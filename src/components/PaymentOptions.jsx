import React from "react";

import visa from '../images/ShoppingCard_icon/visa.svg'
import visa2 from '../images/ShoppingCard_icon/visa2.svg'
import JCB from '../images/ShoppingCard_icon/JCB.svg'

export default function PaymentOptions() {
  return (
    <div className="J_paymentOptions">
      <label>
        <input type="radio" name="paym  ent" value="credit" />
        信用卡
        <img src={visa} alt="visa" />
        <img src={visa2} alt="master" />
        <img src={JCB} alt="jcb" />
      </label>

      <label>
        <input type="radio" name="payment" value="atm" />
        ATM 轉帳
      </label>

      <label>
        <input type="radio" name="payment" value="cvs" />
        超商貨到付款
      </label>
    </div>
  );
}