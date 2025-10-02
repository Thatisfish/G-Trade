import React from "react";

import A711 from '../images/ShoppingCard_icon/711.svg'
import family from '../images/ShoppingCard_icon/family.svg'
import post from '../images/ShoppingCard_icon/post.svg'
import blackcat from '../images/ShoppingCard_icon/blackcat.svg'

export default function ShippingOptions({ onSelect }) {
  // map shipping option value -> price
  const priceMap = {
    '7-11': 60,
    'familymart': 60,
    'post': 80,
    'home': 80,
    'face': 0
  };

  const handleChange = (e) => {
    const val = e.target.value;
    const price = priceMap[val] ?? 0;
    if (typeof onSelect === 'function') onSelect(price);
  };

  return (
    <div className="J_shippingOptions">
      <h3>超商門市</h3>
      <div className="J_optionGroup">
        <label>
          <input type="radio" name="shipping" value="7-11" onChange={handleChange} />
          <img src={A711} alt="" />
          <div className="J_storeInf">
            <p className="J_price">$60</p>
            <p className="J_Store">北商門市</p>
            <p className="J_other">選擇其他收件資訊</p>
          </div>
        </label>
        <label>
          <input type="radio" name="shipping" value="familymart" onChange={handleChange} />
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
          <input type="radio" name="shipping" value="post" onChange={handleChange} />
          <img src={post} alt="" />郵寄掛號 <span className="J_price">$80</span>
        </label>
        <label>
          <input type="radio" name="shipping" value="home" onChange={handleChange} />
          <img src={blackcat} alt="" />宅配/快遞寄送 <span className="J_price">$80</span>
        </label>
        <label>
          <input type="radio" name="shipping" value="face" onChange={handleChange} />
          面交<span className="J_price">$0</span>
        </label>
      </div>
    </div>
  );
}