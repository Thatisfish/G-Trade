import React from "react";

import visa from '../images/ShoppingCard_icon/visa.svg'
import visa2 from '../images/ShoppingCard_icon/visa2.svg'
import JCB from '../images/ShoppingCard_icon/JCB.svg'
import LINEPay from '../images/ShoppingCard_icon/LINEPay-2.png'
import JKOPay from '../images/ShoppingCard_icon/JKOPay-2.png'

export default function PaymentOptions({ onSelect, selected }) {
  const handleChange = (e) => {
    const val = e.target.value;
    if (typeof onSelect === 'function') onSelect(val);
  };

  return (
    <div className="J_paymentOptions">
      <label>
        <input type="radio" name="payment" value="credit" onChange={handleChange} checked={selected === 'credit'} />
        信用卡
        <img src={visa} alt="visa" />
        <img src={visa2} alt="master" />
        <img src={JCB} alt="jcb" />
      </label>

      <label>
        <input type="radio" name="payment" value="atm" onChange={handleChange} checked={selected === 'atm'} />
        ATM 轉帳
      </label>

      <label>
        <input type="radio" name="payment" value="cvs" onChange={handleChange} checked={selected === 'cvs'} />
        超商貨到付款
      </label>

      <label>
        <input type="radio" name="payment" value="MobilePayment" onChange={handleChange} checked={selected === 'MobilePayment'} />
        電子支付
        <img className="J_LINEPAY" src={LINEPay} alt="LINEPay" />
        <img className="J_JKOPAY" src={JKOPay} alt="JKOPay" />
      </label>

    </div>
  );
}