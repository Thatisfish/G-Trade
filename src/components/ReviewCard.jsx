import React from 'react'

export default function ReviewCard() {
  return (
    <div className="reviewcard">
      <img src="/avatar.png" alt="user" className="avatar" />
      <div className="reviewform">
        <div className="stars">⭐⭐⭐⭐⭐</div>
        <textarea placeholder="請輸入評價內容..." />
        <button>送出</button>
      </div>
    </div>
  )
}