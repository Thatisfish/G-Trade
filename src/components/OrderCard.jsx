
import React, { useState, useEffect } from 'react'
import ReviewCard from './ReviewCard';


export default function OrderCard({ id, shop, title, price, date, status, img }) {
	const [showReview, setShowReview] = useState(false);
	const [confirmed, setConfirmed] = useState(false);
	const [reviewed, setReviewed] = useState(false);
	const [showConfirmModal, setShowConfirmModal] = useState(false);
	// lock body scroll while any modal (confirm or review) is open to avoid layout/scrollbar shift
	useEffect(() => {
		const active = showConfirmModal || showReview;
		if (active) {
			const prev = document.body.style.overflow;
			document.body.style.overflow = 'hidden';
			return () => { document.body.style.overflow = prev; };
		}
		return undefined;
	}, [showConfirmModal, showReview]);
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
							<div className="J_order-actions" style={{ position: 'relative' }}>
								{/* 保留按鈕 DOM 但用 visibility 隱藏，避免移除元素造成寬度/排版變化 */}
								<button
									className="J_RB1"
									type="button"
									onClick={() => {
										if (confirmed) return; // already confirmed, ignore
										setConfirmed(true);
										setShowConfirmModal(true);
									}}
									style={{ visibility: confirmed ? 'hidden' : 'visible', pointerEvents: confirmed ? 'none' : 'auto' }}
									aria-hidden={confirmed}
								>
									<span className="J_checkoutContent">
										<span className="J_Checkout">確認收貨</span>
										<svg className="J_triangle" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 8" fill="none">
											<path d="M7.5 4L0.75 7.89711V0.102886L7.5 4Z" fill="white" />
										</svg>
									</span>
								</button>
								{/* <button>給評</button> */}
								<button
									className={`J_RB2${reviewed ? ' is-reviewed' : ''}`}
									type="button"
									onClick={() => { if (reviewed) return; setShowReview(v => !v); }}
									aria-pressed={showReview}
								>
									<span className="J_checkoutContent">
										<span className="J_Checkout">{reviewed ? '已完成評價' : '給評'}</span>
										{/* triangle 隱藏交由 CSS 處理 when reviewed */}
										<svg className={`J_triangle${showReview ? ' is-open' : ''}`} xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 8" fill="none">
											<path d="M7.5 4L0.75 7.89711V0.102886L7.5 4Z" fill="white" />
										</svg>
									</span>
								</button>
								{/* ReviewCard used to float under the button; now we show it in a centered modal (rendered below) */}
							</div>
						)}
					</div>

				</div>
			</div>
			{/* ReviewCard 只在按鈕下方浮現，不再用 modal */}
			{showConfirmModal && (
				<div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
					<div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} onClick={() => setShowConfirmModal(false)} />
					<div style={{ background: '#fff', padding: 20, borderRadius: 8, zIndex: 10000, minWidth: 260, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
						<p style={{ marginBottom: 12 }}>已確認收貨</p>
						<button
							type="button"
							onMouseDown={(e) => e.preventDefault()} /* prevent focus jump on mousedown */
							onClick={() => setShowConfirmModal(false)}
							aria-label="關閉已確認收貨視窗"
							style={{
								background: '#DE1A10',
								color: '#fff',
								border: 'none',
								padding: '8px 12px',
								borderRadius: 6,
								display: 'inline-block',
								margin: 0,
								cursor: 'pointer',
								outline: 'none',
								WebkitTapHighlightColor: 'transparent'
							}}
						>
							關閉
						</button>
					</div>
				</div>
			)}

			{/* Review modal centered on screen */}
			{showReview && (
				<div className={`J_modal-overlay is-open`} onClick={() => setShowReview(false)}>
					<div className="J_modal-content" onClick={(e) => e.stopPropagation()}>
						<ReviewCard onSubmit={() => { setShowReview(false); setReviewed(true); }} />
					</div>
				</div>
			)}
		</>
	)
}