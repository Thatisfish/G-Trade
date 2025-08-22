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
      <button className="J_checkoutBtn">結帳</button>
    </div>
  );
}