import React from 'react'

export default function OrderCard({ id, shop, title, price, date, status, img }) {
  return (
    <div className="ordercard">
      <img src={img} alt={title} />
      <div className="details">
        <h4>{title}</h4>
        <p>訂單號碼: {id}</p>
        <p>日期: {date}</p>
        <p>金額: ${price}</p>
        <p>狀態: {status}</p>
      </div>
      <div className="actions">
        <button>確認收貨</button>
        <button>給評價</button>
      </div>
    </div>
  )
}