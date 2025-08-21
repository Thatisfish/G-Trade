import React from "react";

import A711 from '../images/ShoppingCard_icon/711.svg'
import family from '../images/ShoppingCard_icon/family.svg'
import post from '../images/ShoppingCard_icon/post.svg'
import blackcat from '../images/ShoppingCard_icon/blackcat.svg'

export default function ShippingOptions() {
  return (
    <div className="J_shippingOptions">
      <div className="J_optionGroup">
        <h3>超商門市</h3>
        <label>
          <input type="checkbox" name="shipping" value="7-11" />
          <span className="J_price">$60</span>
          <img src={A711} alt="" />北商門市
          選擇其他收件資訊 
        </label>
        <label>
          <input type="checkbox" name="shipping" value="familymart" />
          <span className="J_price">$60</span>
          <img src={family} alt="" />北商門市
          選擇其他收件資訊 
        </label>
      </div>

      <div className="J_optionGroup">
        <h3>賣家自行提供</h3>
        <label>
          <input type="checkbox" name="shipping" value="post" />
          <img src={post} alt="" />郵寄掛號 <span className="J_price">$80</span>
        </label>
        <label>
          <input type="checkbox" name="shipping" value="home" />
          <img src={blackcat} alt="" />宅配/快遞寄送 <span className="J_price">$80</span>
        </label>
        <label>
          <input type="checkbox" name="shipping" value="face" />
          面交
        </label>
      </div>
    </div>
  );
}