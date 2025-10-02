// src/pages/Shopping_cart.jsx
import React, { useEffect, useMemo, useState, useCallback, useRef } from "react";
import "../styles/_Shopping_cart.scss";

import CartItem from "../components/CartItem";
import ShippingOptions from "../components/ShippingOptions";
import PaymentOptions from "../components/PaymentOptions";
import Notes from "../components/Notes";
import CartSummary from "../components/CartSummary";

import cart from "../images/ShoppingCard_icon/cart.svg";
import money from "../images/ShoppingCard_icon/money.svg";
import { Helmet } from "@dr.pogodin/react-helmet";

import { getCart, updateQty, removeItem, clearCart } from "../js/cart";
import { Link } from "react-router-dom";

function Shopping_cart() {
	// ===== 狀態 =====
	const [items, setItems] = useState([]);
	const [selectedIds, setSelectedIds] = useState(new Set());
	const [selectedShippingPrice, setSelectedShippingPrice] = useState(0);
	const [selectedShippingId, setSelectedShippingId] = useState(null);
	const [selectedPaymentId, setSelectedPaymentId] = useState(null);

	// 成功彈窗 / 清空確認
	const [isSuccessOpen, setIsSuccessOpen] = useState(false);
	const [isClearOpen, setIsClearOpen] = useState(false);
	const [errorMsg, setErrorMsg] = useState("");

	// ✅ 新增：載入中（假 loading 載入）狀態
	const [isLoading, setIsLoading] = useState(false);

	const closeBtnRef = useRef(null);
	const lastFocusedRef = useRef(null);

	// ===== 讀取購物車 =====
	const loadCart = useCallback(() => {
		const data = getCart();
		const arr = Array.isArray(data) ? data : (Array.isArray(data?.items) ? data.items : []);
		setItems(arr);
	}, []);

	useEffect(() => { loadCart(); }, [loadCart]);

	useEffect(() => {
		setSelectedIds(prev => {
			const next = new Set();
			const ids = new Set(items.map(it => String(it.id)));
			prev.forEach(id => { if (ids.has(String(id))) next.add(id) });
			return next;
		});
	}, [items]);

	// 同步
	useEffect(() => {
		const onStorage = (e) => {
			if (["gtrade:cart", "cart", "shopping_cart", "cartItems"].includes(e.key)) loadCart();
		};
		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, [loadCart]);

	useEffect(() => {
		const onCartUpdated = () => loadCart();
		window.addEventListener("gtrade:cart:update", onCartUpdated);
		return () => window.removeEventListener("gtrade:cart:update", onCartUpdated);
	}, [loadCart]);

	useEffect(() => {
		const onFocus = () => loadCart();
		window.addEventListener("focus", onFocus);
		return () => window.removeEventListener("focus", onFocus);
	}, [loadCart]);

	// ===== 數量 / 刪除 =====
	const handleQtyChange = (id, nextQty) => {
		const n = Math.max(1, Number(nextQty) || 1);
		updateQty(id, n);
		loadCart();
	};
	const handleInc = (id) => {
		const item = items.find(it => String(it.id) === String(id));
		const cur = Number(item?.qty || 1);
		updateQty(id, cur + 1);
		loadCart();
	};
	const handleDec = (id) => {
		const item = items.find(it => String(it.id) === String(id));
		const cur = Number(item?.qty || 1);
		updateQty(id, Math.max(1, cur - 1));
		loadCart();
	};
	const handleRemove = (id) => { removeItem(id); loadCart(); };

	// ===== 勾選 =====
	const allChecked = items.length > 0 && selectedIds.size === items.length;
	const toggleAll = () => setSelectedIds(allChecked ? new Set() : new Set(items.map(it => it.id)));
	const toggleItem = (id) => {
		setSelectedIds(prev => {
			const next = new Set(prev);
			if (next.has(id)) next.delete(id); else next.add(id);
			return next;
		});
	};

	// ===== 金額 =====
	const productPrice = useMemo(() => {
		let sum = 0;
		items.forEach(it => {
			if (selectedIds.has(it.id)) sum += (Number(it.price) || 0) * (Number(it.qty) || 0);
		});
		return sum;
	}, [items, selectedIds]);

	const shippingPrice = Number(selectedShippingPrice) || 0;
	const totalPrice = productPrice + shippingPrice;

	// ===== 結帳 =====
	const canCheckout = selectedIds.size > 0 && selectedShippingId && selectedPaymentId;

	// 小工具：延遲（delay 延遲）
	const delay = (ms) => new Promise(res => setTimeout(res, ms));

	const handleCheckout = async () => {
		const missing = [];
		if (selectedIds.size === 0) missing.push("要購買的商品");
		if (!selectedShippingId) missing.push("運送方式");
		if (!selectedPaymentId) missing.push("付款方式");
		if (missing.length > 0) {
			setErrorMsg("請選擇 " + missing.join("、"));
			return;
		}

		setErrorMsg("");
		setIsLoading(true); // 顯示載入 overlay（覆蓋層）

		// 模擬請求 1.5 秒（可自行調整）
		await delay(1500);

		// 實際處理：移除已勾選
		selectedIds.forEach(id => removeItem(id));
		loadCart();

		// 重設選項
		setSelectedIds(new Set());
		setSelectedShippingId(null);
		setSelectedShippingPrice(0);
		setSelectedPaymentId(null);

		setIsLoading(false);

		// 開啟成功彈窗
		lastFocusedRef.current = document.activeElement;
		setIsSuccessOpen(true);
	};

	// ===== 清空 =====
	const handleClear = () => { setIsClearOpen(true); };
	const confirmClear = () => { clearCart(); loadCart(); setIsClearOpen(false); };

	// ===== 小計 / 數量 =====
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
			</Helmet>

			<div className="J_cartPage" aria-busy={isLoading ? "true" : "false"}>
				<h1 className="J_cartTitle">購物車</h1>

				<div className="J_cartContainer" aria-disabled={isLoading ? "true" : "false"}>
					<div className="J_cartLeft">
						<section className="J_cartSection">
							<div className="J_cartSectionA">
								<div className="J_cartSectionA__left">
									<label className="J_storeCheck">
										<input type="checkbox" checked={allChecked} onChange={toggleAll} disabled={isLoading} />
									</label>
									<h2 className="J_sectionTitle">商品</h2>
								</div>
								<div className="J_cartSectionA__right">
									<button type="button" className="J_clearBtn" onClick={handleClear} disabled={isLoading}>
										清空
									</button>
								</div>
							</div>

							{items.length === 0 ? (
								<div className="J_cartEmpty">
									<p>你的購物車目前是空的。</p>
									<a className="J_btnBack" href="/alltype/Switch/all">繼續逛逛</a>
								</div>
							) : (
								items.map(item => (
									<CartItem
										key={item.id}
										id={item.id}
										img={item.img}
										title={item.title}
										price={item.price}
										qty={item.qty}
										storeName={item.sellerName}
										onQtyChange={(q) => !isLoading && handleQtyChange(item.id, q)}
										onInc={() => !isLoading && handleInc(item.id)}
										onDec={() => !isLoading && handleDec(item.id)}
										onRemove={() => !isLoading && handleRemove(item.id)}
										selected={selectedIds.has(item.id)}
										onToggle={() => !isLoading && toggleItem(item.id)}
									/>
								))
							)}
						</section>

						<section className="J_cartSection2">
							<h2 className="J_sectionTitle">
								<img src={cart} alt="購物車（Cart 購物車）" />
								運送方式
							</h2>
							<ShippingOptions
								onSelect={({ id, price }) => { if (!isLoading) { setSelectedShippingId(id); setSelectedShippingPrice(price); } }}
								selected={selectedShippingId}
							/>
						</section>

						<section className="J_cartSection2">
							<h2 className="J_sectionTitle">
								<img src={money} alt="金錢（Money 金錢）" />
								付款方式
							</h2>
							<PaymentOptions onSelect={(id) => !isLoading && setSelectedPaymentId(id)} selected={selectedPaymentId} />
						</section>

						<section className="J_cartSection2">
							<Notes />
						</section>
					</div>

					<div className="J_cartRight">
						{errorMsg && <div className="J_error" role="alert">{errorMsg}</div>}

						<CartSummary
							subtotal={subtotal}
							itemCount={itemCount}
							productPrice={productPrice}
							shippingPrice={shippingPrice}
							totalPrice={totalPrice}
							disabled={!canCheckout || isLoading}
							isLoading={isLoading}
							onCheckout={handleCheckout}
						/>
					</div>
				</div>
			</div>

			{/* ✅ 載入 Overlay（轉圈 + 文字） */}
			{isLoading && (
				<div className="J_loader" role="status" aria-live="polite" aria-label="正在處理訂單，請稍候">
					<div className="J_loader__panel">
						<div className="J_loader__spinner" aria-hidden="true" />
						<p className="J_loader__text">正在處理訂單，請稍候…</p>
					</div>
				</div>
			)}

			{/* 成功彈窗 */}
			{isSuccessOpen && (
				<div className="J_modal" role="dialog" aria-modal="true">
					<div className="J_modal__panel">
						<h3 className="J_modal__title">結帳成功</h3>
						<p className="J_modal__text">已完成結帳！感謝你的購買～</p>
						<div className="J_modal__actions">
							<Link className="J_modal__link" to="/alltype/Switch/all">繼續逛逛</Link>
							<button className="J_modal__btn" onClick={() => setIsSuccessOpen(false)}>關閉</button>
						</div>
					</div>
				</div>
			)}

			{/* 清空確認彈窗 */}
			{isClearOpen && (
				<div className="J_modal" role="dialog" aria-modal="true">
					<div className="J_modal__panel">
						<h3 className="J_modal__title">確認清空購物車？</h3>
						<p className="J_modal__text">此操作會移除所有商品。</p>
						<div className="J_modal__actions">
							<button className="J_modal__link" onClick={confirmClear}>清空</button>
							<button className="J_modal__btn" onClick={() => setIsClearOpen(false)}>取消</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Shopping_cart;
