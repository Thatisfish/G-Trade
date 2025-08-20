import React from "react";

export default function ShippingOptions() {
  return (
    <div className="shipping-options">
      <div className="option-group">
        <h3>超商門市</h3>
        <label>
          <input type="radio" name="shipping" value="7-11" />
          7-11 超商取貨 <span className="price">$60</span>
        </label>
        <label>
          <input type="radio" name="shipping" value="familymart" />
          全家 超商取貨 <span className="price">$60</span>
        </label>
      </div>

      <div className="option-group">
        <h3>實體宅配/面交</h3>
        <label>
          <input type="radio" name="shipping" value="post" />
          郵寄掛號 <span className="price">$80</span>
        </label>
        <label>
          <input type="radio" name="shipping" value="home" />
          宅配/快遞寄送 <span className="price">$80</span>
        </label>
        <label>
          <input type="radio" name="shipping" value="face" />
          面交
        </label>
      </div>
    </div>
  );
}