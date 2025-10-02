// src/components/CartItem.jsx
import React from "react";
import ashcan from '../images/ShoppingCard_icon/ashcan.svg';

export default function CartItem({
	id, img, title, price, qty, storeName,
	selected = false,
	onToggle, onInc, onDec,
	onRemove,               // ✅ 真正執行刪除
	onRequestRemove         // ✅ 新增：請求父層顯示確認彈窗
}) {
	const handleDelete = () => {
		if (typeof onRequestRemove === 'function') {
			onRequestRemove({ id, title }); // 交給父層決定要不要刪
		} else if (typeof onRemove === 'function') {
			// fallback（English: fallback 後備機制），沒有提供彈窗就直接刪
			onRemove(id);
		}
	};

	return (
		<div className="J_cartItem">
			<div className="ctn">
				<label className="J_ctnCheckWrap">
					<input
						className="J_ctnCheck"
						type="checkbox"
						aria-label={`選取 ${storeName || "未知店家"}`}
						checked={selected}
						onChange={onToggle}
					/>
					<span className="J_storeName">{storeName || "未知店家"}</span>
				</label>
			</div>

			<div className="ct">
				<div className="J_product">
					<input
						className="J_ctCheck"
						type="checkbox"
						aria-label={`選取 ${title}`}
						checked={selected}
						onChange={onToggle}
					/>
					<div className="pif">
						<img src={img} alt={title} />
						<div className="J_itemInfo">
							<p className="J_itemTitle">{title}</p>
							<p className="J_itemPrice">NT$ {price}</p>
						</div>
					</div>
				</div>

				<span className="J_itemQty">x {qty}</span>

				<button
					type="button"
					className="J_deleteBtn"
					aria-label={`刪除 ${title}`}
					onClick={handleDelete}
				>
					<img src={ashcan} alt="刪除商品" />
				</button>
			</div>
		</div>
	);
}
