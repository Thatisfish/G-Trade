// src/pages/Shopping_cart.jsx
import React, { useEffect, useMemo, useState, useCallback } from "react";
import "../styles/_Shopping_cart.scss";

import CartItem from "../components/CartItem";
import ShippingOptions from "../components/ShippingOptions";
import PaymentOptions from "../components/PaymentOptions";
import Notes from "../components/Notes";
import CartSummary from "../components/CartSummary";
import CheckoutLoader from "../components/CheckoutLoader";

import home from "../images/ShoppingCard_icon/home.svg";
import cart from "../images/ShoppingCard_icon/cart.svg";
import money from "../images/ShoppingCard_icon/money.svg";
import { Helmet } from "@dr.pogodin/react-helmet";

// 購物車工具（cart utility 工具）
import { getCart, updateQty, removeItem, clearCart } from "../js/cart";

function Shopping_cart() {
	// 狀態（state 狀態）：這裡的 items 一律是「陣列」
	const [items, setItems] = useState([]);
	const [selectedIds, setSelectedIds] = useState(new Set());
	const [selectedShippingPrice, setSelectedShippingPrice] = useState(0);
	const [selectedShippingId, setSelectedShippingId] = useState(null);
	const [selectedPaymentId, setSelectedPaymentId] = useState(null);
	const [isCheckingOut, setIsCheckingOut] = useState(false);

	// 讀取購物車（封裝成函式，方便重用）
	const loadCart = useCallback(() => {
		// ✅ 正確：getCart() 可能是 { items: [...] } 或直接回傳陣列 — 做雙保險
		const data = getCart();
		const arr = Array.isArray(data) ? data : (Array.isArray(data?.items) ? data.items : []);
		setItems(arr);
	}, []);

	// 首次掛載（mount 掛載）→ 抓資料
	useEffect(() => {
		loadCart();
	}, [loadCart]);

	// 當 items 更新時，清理 selectedIds（只保留存在的 id）
	useEffect(() => {
		setSelectedIds(prev => {
			const next = new Set();
			const ids = new Set(items.map(it => String(it.id)));
			prev.forEach(id => { if (ids.has(String(id))) next.add(id) });
			return next;
		})
	}, [items]);

	// ✅ 跨分頁同步（storage 事件）— 不會在同分頁觸發，但保留給多分頁使用
	useEffect(() => {
		const onStorage = (e) => {
			if (e.key === "gtrade:cart" || e.key === "cart" || e.key === "shopping_cart" || e.key === "cartItems") {
				loadCart();
			}
		};
		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, [loadCart]);

	// ✅ 同分頁即時同步：監聽自訂事件（cart.js 會 dispatchEvent）
	useEffect(() => {
		const onCartUpdated = () => loadCart();
		window.addEventListener("gtrade:cart:update", onCartUpdated);
		return () => window.removeEventListener("gtrade:cart:update", onCartUpdated);
	}, [loadCart]);

	// ✅ 切回分頁時也同步一次（例如從商品頁返回）
	useEffect(() => {
		const onFocus = () => loadCart();
		window.addEventListener("focus", onFocus);
		return () => window.removeEventListener("focus", onFocus);
	}, [loadCart]);

	// 數量改變（qty change 數量變更）
	const handleQtyChange = (id, nextQty) => {
		const n = Math.max(1, Number(nextQty) || 1);
		updateQty(id, n);
		loadCart();
	};

	// 增加 / 減少（++ / -- 快捷）
	const handleInc = (id) => {
		const item = items.find((it) => String(it.id) === String(id));
		const cur = Number(item?.qty || 1);
		updateQty(id, cur + 1);
		loadCart();
	};

	const handleDec = (id) => {
		const item = items.find((it) => String(it.id) === String(id));
		const cur = Number(item?.qty || 1);
		updateQty(id, Math.max(1, cur - 1));
		loadCart();
	};

	// 刪除（remove 刪除）
	const handleRemove = (id) => {
		removeItem(id);
		loadCart();
	};

	// 選取狀態處理
	const allChecked = items.length > 0 && selectedIds.size === items.length;

	const toggleAll = () => {
		if (allChecked) {
			setSelectedIds(new Set());
		} else {
			setSelectedIds(new Set(items.map(it => it.id)));
		}
	};

	const toggleItem = (id) => {
		setSelectedIds(prev => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id);
			else next.add(id);
			return next;
		})
	}

	// 計算被選取之商品小計（只包含已勾選的品項）
	const productPrice = useMemo(() => {
		if (!items || items.length === 0) return 0;
		let sum = 0;
		items.forEach(it => {
			if (selectedIds.has(it.id)) {
				const price = Number(it.price) || 0;
				const qty = Number(it.qty) || 0;
				sum += price * qty;
			}
		});
		return sum;
	}, [items, selectedIds]);

	const shippingPrice = Number(selectedShippingPrice) || 0;
	const totalPrice = productPrice + shippingPrice;

	// Checkout handler
	const canCheckout = selectedIds.size > 0 && selectedShippingId && selectedPaymentId;

	const handleCheckout = async () => {
		// 檢查缺項
		const missing = [];
		if (selectedIds.size === 0) missing.push('要購買的商品');
		if (!selectedShippingId) missing.push('運送方式');
		if (!selectedPaymentId) missing.push('付款方式');

		if (missing.length > 0) {
			// 使用原生 alert 顯示，項目以中文頓號分隔
			const message = '請選擇' + missing.join('、');
			alert(message);
			return;
		}

		// 若通過檢查，繼續結帳流程
		setIsCheckingOut(true);
		// 模擬 loading 1.5 秒
		await new Promise(r => setTimeout(r, 1500));
		// 結帳完成：移除已勾選的商品
		selectedIds.forEach(id => {
			removeItem(id);
		});
		// 重新載入購物車
		loadCart();
		// 重設勾選、運送、付款
		setSelectedIds(new Set());
		setSelectedShippingId(null);
		setSelectedShippingPrice(0);
		setSelectedPaymentId(null);
		setIsCheckingOut(false);
		// 顯示通知
		alert('已完成結帳');
	};

	// 清空（clear 清空）
	const handleClear = () => {
		if (confirm("確定要清空購物車嗎？（This will remove all items 全部刪除）")) {
			clearCart();
			loadCart();
		}
	};

	// 小計（subtotal 小計）與品項數
	const subtotal = useMemo(
		() => items.reduce((sum, it) => sum + Number(it.price || 0) * Number(it.qty || 0), 0),
		[items]
	);
	const itemCount = useMemo(
		() => items.reduce((sum, it) => sum + Number(it.qty || 0), 0),
		[items]
	);

	return (
		<>
			<Helmet>
				<title>遊玩人間市集 ｜ 購物車</title>
				<meta name="description" content="歡迎來到遊玩人間市集，探索各式二手遊戲商品。" />
			</Helmet>

			<div className={`J_cartPage ${isCheckingOut ? 'is-loading' : ''}`}>
				<h1 className="J_cartTitle">購物車</h1>

				<div className="J_cartContainer">
					{/* 左側：商品清單 + 選項 */}
					<div className="J_cartLeft">
						<section className="J_cartSection">
							{/* 店家列（header 表頭） */}
							<div className="J_cartSectionA">
								<div className="J_cartSectionA__left">
									<label className="J_storeCheck" aria-label="全選（Select all 全選）">
										<input className="J_allCheck" type="checkbox" checked={allChecked} onChange={toggleAll} />
									</label>
									{/* <img src={home} alt="商店（Store 商店）" /> */}
									<h2 className="J_sectionTitle">商品</h2>
								</div>

								<div className="J_cartSectionA__right">
									<button
										type="button"
										className="J_clearBtn"
										onClick={handleClear}
										aria-label="清空購物車（Clear cart 清空）"
									>
										清空
									</button>
								</div>
							</div>

							{/* 購物車內容 */}
							{items.length === 0 ? (
								<div className="J_cartEmpty">
									<p>你的購物車目前是空的。</p>
									<a className="J_btnBack" href="/alltype/Switch/all">
										繼續逛逛
									</a>
								</div>
								) : (
								items.map((item) => (
									<CartItem
										key={item.id}
										id={item.id}
										img={item.img}
										title={item.title}
										price={item.price}
										qty={item.qty}
										storeName={item.storeName || item.sellerName || item.seller__name}
										onQtyChange={(q) => handleQtyChange(item.id, q)}
										onInc={() => handleInc(item.id)}
										onDec={() => handleDec(item.id)}
										onRemove={() => handleRemove(item.id)}
										selected={selectedIds.has(item.id)}
										onToggle={() => toggleItem(item.id)}
									/>
								))
							)}
						</section>

						{/* 運送方式（Shipping 運送） */}
						<section className="J_cartSection2">
							<h2 className="J_sectionTitle">
								<img src={cart} alt="購物車（Cart 購物車）" />
								運送方式
							</h2>
									<ShippingOptions onSelect={({ id, price }) => { setSelectedShippingId(id); setSelectedShippingPrice(price); }} selected={selectedShippingId} />
						</section>

						{/* 付款方式（Payment 付款） */}
						<section className="J_cartSection2">
							<h2 className="J_sectionTitle">
								<img src={money} alt="金錢（Money 金錢）" />
								付款方式
							</h2>
							<PaymentOptions onSelect={(id) => setSelectedPaymentId(id)} selected={selectedPaymentId} />
						</section>

						{/* 備註（Notes 備註） */}
						<section className="J_cartSection2">
							<Notes />
						</section>
					</div>

					{/* 右側：結帳摘要（Summary 摘要） */}
					<div className="J_cartRight">
						<CartSummary
							subtotal={subtotal}
							itemCount={itemCount}
							productPrice={productPrice}
							shippingPrice={shippingPrice}
							totalPrice={totalPrice}
							disabled={!canCheckout}
							isLoading={isCheckingOut}
							onCheckout={handleCheckout}
						// onCheckout={() => alert("尚未串接結帳流程（Checkout flow 待串接）")}
						/>
					</div>
				</div>
			</div>

			{isCheckingOut && <CheckoutLoader />}
		</>
	);
}

export default Shopping_cart;
