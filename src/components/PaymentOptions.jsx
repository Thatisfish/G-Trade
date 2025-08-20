import React from "react";

export default function PaymentOptions() {
  return (
    <div className="payment-options">
      <label>
        <input type="radio" name="payment" value="credit" />
        <img src="https://img.icons8.com/color/48/000000/visa.png" alt="visa" />
        <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="master" />
        <img src="https://img.icons8.com/color/48/000000/jcb.png" alt="jcb" />
        信用卡
      </label>

      <label>
        <input type="radio" name="payment" value="atm" />
        ATM 轉帳
      </label>

      <label>
        <input type="radio" name="payment" value="cvs" />
        超商繳費代碼
      </label>
    </div>
  );
}