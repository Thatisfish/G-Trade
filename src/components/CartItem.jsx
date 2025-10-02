// src/components/CartItem.jsx
import React, { useState } from "react";
import ashcan from '../images/ShoppingCard_icon/ashcan.svg'

export default function CartItem({ img, title, price, qty, storeName }) {
	const [deleted, setDeleted] = useState(false);

	const handleDelete = () => {
		const confirmed = window.confirm(`確定要刪除「${title}」嗎？`);
		if (confirmed) setDeleted(true);
	};

	if (deleted) return null;

	return (
		<div className="J_cartItem">
			<div className="ctn">
				<input type="checkbox" aria-label={`選取 ${title}`} />
				{storeName && <p className="J_storeName">{storeName}</p>}
			</div>
			<div className="ct">
				<div className="J_product">
					<input type="checkbox" aria-label={`選取 ${title}`} />
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
