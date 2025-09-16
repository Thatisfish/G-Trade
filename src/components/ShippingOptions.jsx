import React from "react";

import A711 from '../images/ShoppingCard_icon/711.svg'
import family from '../images/ShoppingCard_icon/family.svg'
import post from '../images/ShoppingCard_icon/post.svg'
import blackcat from '../images/ShoppingCard_icon/blackcat.svg'

export default function ShippingOptions() {
  return (
    <div className="J_shippingOptions">
      <h3>超商門市</h3>
      <div className="J_optionGroup">
        <label>
          <input type="radio" name="shipping" value="7-11" />
          <img src={A711} alt="" />
          <div className="J_storeInf">
            <p className="J_price">$60</p>
            <p className="J_Store">北商門市</p>
            <p className="J_other">選擇其他收件資訊</p>
          </div>
        </label>
        <label>
          <input type="radio" name="shipping" value="familymart" />
          <img src={family} alt="" />
          <div className="J_storeInf">
            <p className="J_price">$60</p>
            <p className="J_Store">北商門市</p>
            <p className="J_other">選擇其他收件資訊</p>
          </div>
        </label>
      </div>

      <h3>賣家自行提供</h3>
      <div className="J_optionGroup">
        <label>
          <input type="radio" name="shipping" value="post" />
          <img src={post} alt="" />郵寄掛號 <span className="J_price">$80</span>
        </label>
        <label>
          <input type="radio" name="shipping" value="home" />
          <img src={blackcat} alt="" />宅配/快遞寄送 <span className="J_price">$80</span>
        </label>
        <label>
          <input type="radio" name="shipping" value="face" />
          面交
        </label>
      </div>
    </div>
  );
}