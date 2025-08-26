import React from 'react'
import sellerImg from '../images/orderImg2.webp'

export default function ReviewCard() {
  return (
    <div className="J_reviewcard">
      <img src={sellerImg} alt="user" className="J_avatar" />
      <div className="J_reviewform">
        <div className="J_stars">⭐⭐⭐⭐⭐</div>
        <textarea placeholder="請輸入評價內容..." />
        <button>送出</button>
      </div>
    </div>
  )
}