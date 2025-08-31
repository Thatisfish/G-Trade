import React from 'react'


export default function OrderCard({ id, shop, title, price, date, status, img }) {
  return (
    <div className="J_ordercard">
      <div>
      <h2>{shop}</h2>
      <img src={img} alt={title} />
      </div>

      <div className="J_details">
        
        <div className='J_status'>
        <p></p>
        <p> {status}</p>
        </div>
        
        <p> {id}</p>
        
        <div className='J_detailsflex'>
        <h4>{title}</h4>
        <p>結帳金額: ${price}</p>
        </div>
        
        <p>下單日期: {date}</p>
      </div>
    </div>
  )
}