// src/components/CartToast.jsx
import React, { useEffect, useRef } from "react";

const CartToast = ({
	title = "",
	img = "",
	qty = 1,
	count = 0,          // ⬅️ 新增：目前購物車數量
	visible = false,
	onClick = () => { },
	onClose = () => { },
	duration = 3000
}) => {
	const timerRef = useRef(null);

	useEffect(() => {
		if (!visible) return;
		clearTimeout(timerRef.current);
		timerRef.current = setTimeout(() => onClose(), duration);
		return () => clearTimeout(timerRef.current);
	}, [visible, duration, onClose]);

	return (
		<div
			className={`cartToast ${visible ? "is-show" : ""}`}
			role="status"
			aria-live="polite"
			aria-atomic="true"
		>
			<button type="button" className="cartToast__card" onClick={onClick}>
				<div className="cartToast__media">
					{img ? <img src={img} alt="" /> : <div className="ph" />}
				</div>
				<div className="cartToast__content">
					<p className="cartToast__title">{title}</p>
					{/* ⬇️ 這裡改掉 */}
					<p className="cartToast__desc">
						已加入購物車 ×{qty} ｜ 目前共 {count} 件
					</p>
					<p className="cartToast__cta">前往購物車 →</p>
				</div>
				<span
					className="cartToast__close"
					aria-label="關閉（Close 關閉）"
					onClick={(e) => {
						e.stopPropagation();
						onClose();
					}}
				>
					×
				</span>
			</button>
		</div>
	);
};

export default CartToast;
