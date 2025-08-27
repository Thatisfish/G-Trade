import React from "react";

export default function CartSummary() {
  return (
    <div className="J_cartSummary">
      <p>
        商品總金額 <span>$0</span>
      </p>
      <p>
        運費 <span>$0</span>
      </p>
      <p className="J_total">
        應付金額 <span>$0</span>
      </p>
      <button className="J_checkoutBtn">
        <span className="J_checkoutContent">
        <span className="J_Checkout">結帳</span>
        <svg className="J_triangle" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 8" fill="none">
          <path d="M7.5 4L0.75 7.89711V0.102886L7.5 4Z" fill="white" />
        </svg>
        </span>
      </button>
    </div>
  );
}