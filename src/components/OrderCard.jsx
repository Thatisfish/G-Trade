import React from 'react'


export default function OrderCard({ id, shop, title, price, date, status, img }) {
  return (
    <div className="J_ordercard">
      <div className="J_ordercardLeft">
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

        <div className='J_detailsflex2'>
          <p>下單日期: {date}</p>
          {status === "已完成" && (
            <div className="J_order-actions">
              {/* <button>確認收款</button> */}
              <button className="J_RB1">
                <span className="J_checkoutContent">
                  <span className="J_Checkout">確認收款</span>
                  <svg className="J_triangle" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 8" fill="none">
                    <path d="M7.5 4L0.75 7.89711V0.102886L7.5 4Z" fill="white" />
                  </svg>
                </span>
              </button>
              {/* <button>給評</button> */}
              <button className="J_RB2">
                <span className="J_checkoutContent">
                  <span className="J_Checkout">給評</span>
                  <svg className="J_triangle" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 8" fill="none">
                    <path d="M7.5 4L0.75 7.89711V0.102886L7.5 4Z" fill="white" />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>

      </div>


    </div>

  )
}