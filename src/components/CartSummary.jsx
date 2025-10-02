import React from "react";

function fmt(n) {
  return Number(n || 0).toLocaleString();
}

export default function CartSummary({ subtotal, itemCount, productPrice, shippingPrice, totalPrice }) {
  // Backwards-compatible: if productPrice not provided, fall back to subtotal
  const product = typeof productPrice === 'number' ? productPrice : Number(subtotal || 0);
  const ship = typeof shippingPrice === 'number' ? shippingPrice : 0;
  const total = typeof totalPrice === 'number' ? totalPrice : product + ship;

  return (
    <div className="J_cartSummary">
      <p>
        商品總金額 <span>$<span className="J_productPrice">{fmt(product)}</span></span>
      </p>
      <p>
        運費 <span>$<span className="J_shippingPrice">{fmt(ship)}</span></span>
      </p>
      <p className="J_total">
        應付金額 <span>$<span className="J_totalPrice">{fmt(total)}</span></span>
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