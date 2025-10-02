// /src/js/cart.js
// ✅ 購物車資料層（shopping cart 購物車 data layer 資料層）：localStorage（本機儲存）

const STORAGE_KEY = "gtrade:cart"; // 可自行更名（rename 重新命名）

/* ==============================
   內部：安全讀寫（internal safe read/write 安全讀寫）
   ============================== */

// 讀取 raw（原始）→ 回傳 { items: [] } 結構（structure 結構）
function readRaw() {
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		if (!raw) return { items: [] };

		const data = JSON.parse(raw);

		// 兼容舊格式：若是陣列 array，轉為 { items: [...] }
		if (Array.isArray(data)) return { items: data };

		// 正常格式：{ items: [...] }
		if (data && Array.isArray(data.items)) return data;

		// 其他異常格式，一律重置為空
		return { items: [] };
	} catch (_) {
		// 解析失敗 → 清掉壞資料（bad data 壞資料）避免後續錯誤
		window.localStorage.removeItem(STORAGE_KEY);
		return { items: [] };
	}
}

// ✅ 同分頁／跨分頁同步用：統一廣播事件
function emitCartEvents(norm) {
	try {
		// 計算總件數（total count 總數量）
		const count = (norm.items || []).reduce((sum, it) => sum + Number(it.qty ?? 0), 0);

		// A) 同分頁即時更新（你在 Shopping_cart.jsx 監聽的事件）
		window.dispatchEvent(new Event("gtrade:cart:update"));

		// B) 舊事件（含明細，可供 Navbar/Toast 使用）
		window.dispatchEvent(
			new CustomEvent("cart:changed", {
				detail: { count, items: norm.items }
			})
		);
	} catch (err) {
		// 安全失敗（有些舊瀏覽器 CustomEvent 可能出錯）
		try {
			window.dispatchEvent(new Event("gtrade:cart:update"));
			window.dispatchEvent(new Event("cart:changed"));
		} catch (_) { }
	}
}

// 寫入 raw（原始寫入）；同時廣播變更事件（broadcast change event 廣播變更）
function writeRaw(data) {
	try {
		const norm = normalizeToObject(data);
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(norm));
		emitCartEvents(norm); // ✅ 這行是關鍵：寫入後廣播
	} catch (err) {
		console.error("cart write error（寫入錯誤）:", err);
	}
}

// 把任何輸入轉為 { items: [...] }（normalize 正規化）
function normalizeToObject(input) {
	if (!input) return { items: [] };
	if (Array.isArray(input)) return { items: input };
	if (typeof input === "object" && Array.isArray(input.items)) return input;
	return { items: [] };
}

/* ==============================
   公用 API（Public API 公用介面）
   ============================== */

// 取得購物車（get cart 取得購物車）→ 回傳 **陣列 array**
export function getCart() {
	const data = readRaw();
	return data.items || [];
}

// 取得完整物件（get cart object 取得完整物件）→ { items: [...] }
export function getCartObject() {
	return readRaw();
}

// 儲存整個購物車（save cart 儲存購物車）
export function saveCart(next) {
	writeRaw(next);
	return getCart(); // 方便鏈式使用（chain 鏈式）
}

// 取得目前商品**總件數**（English: total count 總數量）
export function getCount() {
	return getCart().reduce((sum, it) => sum + Number(it.qty ?? it.quantity ?? 0), 0);
}

// 加入商品（add item 新增／累加）
export function addItem(item, addQty = 1) {
	// 基本驗證（validation 驗證）
	if (!item || item.id == null) {
		throw new Error("Invalid product（商品資料不完整）");
	}

	const nQty = Number(addQty);
	const inc = Number.isFinite(nQty) && nQty > 0 ? nQty : 1;

	const data = readRaw();
	const items = data.items || [];

	const idx = items.findIndex((it) => String(it.id) === String(item.id));

	if (idx >= 0) {
		// 已存在 → 累加（accumulate 累加）
		const cur = Number(items[idx].qty ?? items[idx].quantity ?? 0);
		items[idx] = {
			...items[idx],
			...item,
			qty: cur + inc
		};
	} else {
		// 新增（insert 新增）
		items.push({
			id: item.id,
			title: item.title ?? "",
			price: Number(item.price) || 0,
			img: item.img || "",
			qty: inc,
			storeName: item.storeName || item.sellerName || item.seller__name || "未知店家"
		});
	}

	writeRaw({ items });
	console.log("新增商品進購物車", item);
	return items;
}

// 更新單品數量（update quantity 數量）
export function updateQty(id, qty) {
	const data = readRaw();
	const items = data.items || [];
	const idx = items.findIndex((it) => String(it.id) === String(id));

	if (idx >= 0) {
		const n = Math.max(0, Number(qty) || 0);
		if (n === 0) {
			items.splice(idx, 1);
		} else {
			items[idx].qty = n;
		}
		writeRaw({ items });
	}

	return items;
}

// 移除單品（remove item 移除）
export function removeItem(id) {
	const data = readRaw();
	const next = { items: (data.items || []).filter((it) => String(it.id) !== String(id)) };
	writeRaw(next);
	return next.items;
}

// 清空購物車（clear cart 清空）
export function clearCart() {
	writeRaw({ items: [] });
	return [];
}
