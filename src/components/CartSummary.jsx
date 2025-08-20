import React from "react";

export default function CartSummary() {
  return (
    <div className="cart-summary">
      <p>
        商品總金額 <span>$0</span>
      </p>
      <p>
        運費 <span>$0</span>
      </p>
      <p className="total">
        應付金額 <span>$0</span>
      </p>
      <button className="checkout-btn">結帳</button>
    </div>
  );
}