import React from "react";

export default function CartItem({ img, title, price, qty }) {
  return (
    <div className="J_cartItem">
      <input type="checkbox" />
      <img src={img} alt={title} />
      <div className="J_itemInfo">
        <p className="J_itemTitle">{title}</p>
        <p className="J_itemPrice">NT$ {price}</p>
      </div>
      <span className="J_itemQty">x {qty}</span>
      <button className="J_deleteBtn">🗑</button>
    </div>
  );
}