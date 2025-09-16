import React from "react";
import ashcan from '../images/ShoppingCard_icon/ashcan.svg'

export default function CartItem({ img, title, price, qty }) {
  return (
    <div className="J_cartItem">
      <input type="checkbox" />
      <div className="J_product">
      <img src={img} alt={title} />
      <div className="J_itemInfo">
        <p className="J_itemTitle">{title}</p>
        <p className="J_itemPrice">NT$ {price}</p>
      </div>
      </div>
      <span className="J_itemQty">x {qty}</span>
      <button className="J_deleteBtn">
        <img src={ashcan} alt="刪除商品" />
      </button>
    </div>
  );
}