import React from 'react'
import '../styles/_Shopping_cart.scss'

import CartItem from "../components/CartItem";
import ShippingOptions from "../components/ShippingOptions";
import PaymentOptions from "../components/PaymentOptions";
import Notes from "../components/Notes";
import CartSummary from "../components/CartSummary";

import mario1 from '../images/Card_Image/mario1.svg'
import mario2 from '../images/Card_Image/mario2.svg'



function Shopping_cart() {
// 商品資料
  const cartItems = [
    {
      id: 1,
      title: "超級瑪莉歐派對 空前盛會 中文版超級瑪莉歐派對 空前盛會 中文版超級瑪莉歐派對 空前盛會 中文版超級瑪莉歐派對 空前盛會 中文版",
      price: 999,
      qty: 1,
      img: mario1,
    },
    {
      id: 2,
      title: "瑪利歐賽車8 豪華版",
      price: 999,
      qty: 1,
      img: mario2,
    }
  ];

  return (
    <div className="J_cartPage">
      <h1 className="J_cartTitle">購物車</h1>

      <div className="J_cartContainer">
        {/* 左側：商品清單 + 選項 */}
        <div className="J_cartLeft">
          {/* 商品清單 */}
          <section className="J_cartSection">
            <h2 className="J_sectionTitle">🛍 店家名稱</h2>
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                img={item.img}
                title={item.title}
                price={item.price}
                qty={item.qty}
              />
            ))}
          </section>

          {/* 運送方式 */}
          <section className="J_cartSection">
            <h2 className="J_sectionTitle">🚚 運送方式</h2>
            <ShippingOptions />
          </section>

          {/* 付款方式 */}
          <section className="J_cartSection">
            <h2 className="J_sectionTitle">💲 付款方式</h2>
            <PaymentOptions />
          </section>

          {/* 備註 */}
          <section className="J_cartSection">
            <Notes />
          </section>
        </div>

        {/* 右側：結帳摘要 */}
        <div className="J_cartRight">
          <CartSummary />
        </div>
      </div>
    </div>
  );
}


export default Shopping_cart