import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/_Content.scss'
import Sidebar from '../components/Sidebar'
import { Helmet } from '@dr.pogodin/react-helmet'

function Content() {
	const navigate = useNavigate()
	const [showConfirm, setShowConfirm] = useState(false)
	return (
		<>
			<Helmet>
				<title>遊玩人間市集 ｜ 收藏清單 </title>
				<meta name="description" content="歡迎來到遊玩人間市集，探索各式二手遊戲商品。" />
			</Helmet>
			<main className="J_content">

				<Sidebar />

				<div className="J_layout">

					<div className="J_ContentForm">
						<h1 className="J_ContentTitle">聯絡我們</h1>
						<form
							name="contactform"
							id="contactform"
							action=""
							method="post"
							acceptCharset="UTF-8"
							onSubmit={(e) => {
								e.preventDefault()
								// show confirmation modal
								setShowConfirm(true)
								// clear form fields
								try { e.target.reset() } catch (err) { }
								// after short delay, hide modal and navigate back to Content
								setTimeout(() => {
									setShowConfirm(false)
									navigate('/Content')
								}, 1600)
							}}
						>
							<label htmlFor="username">*姓名：</label>
							<input
								type="text"
								name="username"
								id="username"
								title="姓名欄位"
								placeholder="請輸入您的姓名"
								required
								autoFocus
							/>

							<label htmlFor="tel">*聯絡電話：</label>
							<input
								type="tel"
								name="tel"
								id="tel"
								maxLength={10}
								title="聯絡電話欄位，請輸入 9~10 位數字"
								placeholder="例如：0987654321"
								inputMode="tel"
								pattern="[0-9]{9,10}"
								required
							/>

							<label htmlFor="email">*Email：</label>
							<input
								type="email"
								name="email"
								id="email"
								title="Email欄位"
								placeholder="請輸入Email"
								required
							/>

							<label htmlFor="message">留言：</label>
							<textarea
								name="message"
								id="message"
								rows={6}
								placeholder="請輸入您的意見"
							/>

							<button className="J_btn-animat J_ContentBTN" type="submit">
								<span>送出</span>
							</button>
						</form>
					</div>
					{/* 提交後的確認視窗 */}
					{showConfirm && (
						<div style={{ position: 'fixed', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 9999 }}>
							<div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.4)' }} onClick={() => { setShowConfirm(false); navigate('/Content') }} />
							<div style={{ background: '#fff', padding: 20, borderRadius: 8, zIndex: 10000, minWidth: 260, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
								<p style={{ marginBottom: 12 }}>已收到您的訊息，客服人員將會回覆您</p>
								<button className='J_ContentBTN' type="button" onClick={() => { setShowConfirm(false); navigate('/Content') }} style={{ background: '#DE1A10', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: 6 }}>確認</button>
							</div>
						</div>
					)}
				</div>
			</main>
		</>
	)
}

export default Content