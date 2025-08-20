import React from "react";

export default function CartItem({ img, title, price, qty }) {
  return (
    <div className="cart-item">
      <input type="checkbox" />
      <img src={img} alt={title} />
      <div className="item-info">
        <p className="item-title">{title}</p>
        <p className="item-price">NT$ {price}</p>
      </div>
      <span className="item-qty">x {qty}</span>
      <button className="delete-btn">🗑</button>
    </div>
  );
}