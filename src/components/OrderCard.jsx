
import React, { useState } from 'react'
import ReviewCard from './ReviewCard';


export default function OrderCard({ id, shop, title, price, date, status, img }) {
  const [showReview, setShowReview] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  return (
    <>
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

          <div className="J_detailsflex2">
            <p>下單日期: {date}</p>
            {status === "已完成" && (
              <div className="J_order-actions" style={{position: 'relative'}}>
                {/* <button>確認收款</button> */}
                {!confirmed && (
                <button
                  className="J_RB1"
                  onClick={() => {
                    setConfirmed(true);
                    setShowConfirmModal(true);
                  }}
                >
                  <span className="J_checkoutContent">
                    <span className="J_Checkout">確認收貨</span>
                    <svg className="J_triangle" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 8" fill="none">
                      <path d="M7.5 4L0.75 7.89711V0.102886L7.5 4Z" fill="white" />
                    </svg>
                  </span>
                </button>
                )}
                {/* <button>給評</button> */}
                <button className="J_RB2" onClick={() => setShowReview(v => !v)}>
                  <span className="J_checkoutContent">
                    <span className="J_Checkout">給評</span>
                    <svg className={`J_triangle${showReview ? ' is-open' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 8" fill="none">
                      <path d="M7.5 4L0.75 7.89711V0.102886L7.5 4Z" fill="white" />
                    </svg>
                  </span>
                </button>
                <div className={`J_review-float${showReview ? ' is-open' : ''}`}>
                  <ReviewCard onSubmit={() => setShowReview(false)} />
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
      {/* ReviewCard 只在按鈕下方浮現，不再用 modal */}
      {showConfirmModal && (
        <div style={{position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999}}>
          <div style={{position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)'}} onClick={() => setShowConfirmModal(false)} />
          <div style={{background: '#fff', padding: 20, borderRadius: 8, zIndex: 10000, minWidth: 260, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center'}}>
            <p style={{marginBottom: 12}}>已確認收貨</p>
            <button onClick={() => setShowConfirmModal(false)} style={{background: '#DE1A10', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: 6, display: 'inline-block', margin: 0}}>關閉</button>
          </div>
        </div>
      )}
    </>
  )
}