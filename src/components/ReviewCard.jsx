import React, { useState, useEffect, useRef } from 'react'
import sellerImg from '../images/orderImg2.webp'

export default function ReviewCard({ onSubmit }) {
	const [rating, setRating] = useState(0);
 	const [hover, setHover] = useState(0);
	const [comment, setComment] = useState('')
	const [images, setImages] = useState([]) // { file, url }
    const fileInputRef = useRef(null)
	const imagesRef = useRef([])

	useEffect(() => {
		// revoke any remaining object URLs on unmount
		return () => {
			imagesRef.current.forEach(img => URL.revokeObjectURL(img.url))
		}
	}, [])

	// uploadNotice removed: use alert() only when exceeding limit

	const handleSubmit = () => {
		if (onSubmit) onSubmit(rating);
	};

	return (
		<div>
			<div className="J_reviewcard">

				{/* 上下區域的Layout */}
				<div className="J_reviewSection">
					<div className="J_reviewCardContent">


						{/* 左半邊賣家資訊 */}
						{/* <div className='J_reviewSeller'>
							<p>賣家</p>
							<img src={sellerImg} alt="user" className="J_avatar" />
							<p>@GAME_1318</p>
						</div> */}
						{/* 右半邊評價表單 */}
						<div className="J_reviewform">

							<div className="J_stars" onMouseLeave={() => setHover(0)}>
								<span>評價</span>
								{[1,2,3,4,5].map(i => {
									const isLit = hover ? i <= hover : i <= rating;
									const fillColor = isLit ? '#F2D015' : '#DDDDDD';
									return (
										<button
											key={i}
											type="button"
											aria-label={`${i} 星`}
											onMouseEnter={() => setHover(i)}
											onClick={() => setRating(i)}
											onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setRating(i); } }}
											className="J_star-btn"
										>
											<svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29" fill="none">
												<path d="M14.5489 0.927048C14.8483 0.0057373 16.1517 0.00573993 16.4511 0.927051L19.2045 9.40122C19.3384 9.81324 19.7223 10.0922 20.1555 10.0922L29.0658 10.0922C30.0345 10.0922 30.4373 11.3318 29.6536 11.9012L22.445 17.1385C22.0945 17.3932 21.9479 17.8446 22.0818 18.2566L24.8352 26.7308C25.1345 27.6521 24.0801 28.4182 23.2963 27.8488L16.0878 22.6115C15.7373 22.3568 15.2627 22.3568 14.9122 22.6115L7.70365 27.8488C6.91994 28.4182 5.86546 27.6521 6.16481 26.7307L8.91824 18.2566C9.05211 17.8446 8.90545 17.3932 8.55497 17.1385L1.34641 11.9012C0.562692 11.3318 0.96547 10.0922 1.93419 10.0922L10.8445 10.0922C11.2777 10.0922 11.6616 9.81324 11.7955 9.40122L14.5489 0.927048Z" fill={fillColor} fillOpacity={isLit ? 0.83 : 1} />
											</svg>
										</button>
									)
								})}
							</div>
							<textarea
								placeholder="商品符合照片描述，且問問題賣家都很詳細說明，推推!"
								value={comment}
								onChange={(e) => setComment(e.target.value)}
							/>

							{/* 圖片上傳 */}
							<div className="J_imageUpload">
								{/* 隱藏原生 input，使用自訂按鈕觸發，避免顯示「未選擇任何檔案」文字 */}
								<input
									ref={fileInputRef}
									style={{ display: 'none' }}
									type="file"
									accept="image/*"
									multiple
									onChange={(e) => {
										const files = Array.from(e.target.files || [])
										const currentCount = imagesRef.current.length || 0
										const remaining = 9 - currentCount
										if (remaining <= 0) {
											alert('最多只能上傳 9 張照片')
											// reset input
											e.target.value = null
											return
										}
										const toAdd = files.slice(0, remaining)
										const newImgs = toAdd.map(f => ({ file: f, url: URL.createObjectURL(f) }))
										setImages(prev => {
											const next = [...prev, ...newImgs]
											imagesRef.current = next
											return next
										})
										if (files.length > remaining) {
											alert(`已達上限 9 張，僅上傳前 ${remaining} 張`)
										}
										// reset input so same file can be reselected if removed
										e.target.value = null
									}}
								/>
								<button type="button" onClick={() => fileInputRef.current?.click()} className="J_uploadBtn">上傳商品照</button>
								<div className="J_uploadMeta">
									<span className="J_uploadCount">已上傳 {images.length} / 9</span>
								</div>
								{images.length > 0 && (
									<div className="J_imagePreviews">
										{images.map((img, idx) => (
											<div key={idx} className="J_previewItem">
												<img src={img.url} alt={`preview-${idx}`} />
												<button type="button" onClick={() => {
													// revoke and remove
													URL.revokeObjectURL(img.url)
													setImages(prev => {
														const next = prev.filter((_, i) => i !== idx)
														imagesRef.current = next
														return next
													})
												}}>移除照片</button>
											</div>
										))}
									</div>
								)}
							</div>



						</div>
					</div>

					<div className="J_reviweBtn">
						<button onClick={handleSubmit}>確定送出</button>
					</div>

				</div>


			</div>
		</div>
	)
}