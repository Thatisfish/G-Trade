import React, { useState } from 'react'
import sellerImg from '../images/orderImg2.webp'

export default function ReviewCard({ onSubmit }) {
	const [rating, setRating] = useState(0);
 	const [hover, setHover] = useState(0);

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
							<textarea placeholder="商品符合照片描述，且問問題賣家都很詳細說明，推推!" />



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