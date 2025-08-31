import React from 'react'
import sellerImg from '../images/orderImg2.webp'

export default function ReviewCard() {
  return (
    <div className="J_reviewcard">
      <div className="J_reviewButton">
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

      <div className="J_reviewSection">
        <img src={sellerImg} alt="user" className="J_avatar" />
      <div className="J_reviewform">
        <div className="J_stars">⭐⭐⭐⭐⭐</div>
        <textarea placeholder="請輸入評價內容..." />
        <button>送出</button>
      </div>
      </div>
      
    </div>
  )
}