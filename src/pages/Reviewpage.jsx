import React from 'react'
import '../styles/Reviewpage.scss'
import avatar from'../images/orderImg2.webp'

export default function Reviewpage() {
  
  return (
    <div className="y_Reviewpage">

      {/* 個人資料區塊 */}
      <section className="profile">
        <img src={avatar} alt="avatar" className="avatar" />
        <div className="info">
          <h2>@GAME_1318</h2>
          <div className="rating">4.8 ★★★★★</div>
          <p className="description">
            信譽良好，商品為本人持有，非代購非集運，請安心購買
          </p>
          <p className="tags">已認證　出貨迅速　快速回覆</p>
          <div className="actions">
            <button>追蹤</button>
            <button>聯繫</button>
          </div>
        </div>
      </section>

      {/* 最新商品區塊 */}
      <section className="latest_products">
        <h3>最新商品</h3>
        <div className="product_list">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="product_card">
              <div className="image_placeholder" />
              <h4>商品名稱</h4>
              <p>NT$ 550</p>
              <button>查看商品</button>
            </div>
          ))}
        </div>
      </section>

      {/* 過去交易區塊 */}
      <section className="past_transactions">
        <h3>過去交易</h3>
        {[1, 2, 3].map((i) => (
          <div key={i} className="transaction">
            <p>2023.04.14 10:12 購買**商品**</p>
            <div className="rating_bar">
              <div className="bar" />
              <span>5.0 ★</span>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}