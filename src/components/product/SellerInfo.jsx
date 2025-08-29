import React from 'react'
import check from '../../images/ProductPage/check.svg'
import fastShip from '../../images/ProductPage/fastShip.svg'
import quickReply from '../../images/ProductPage/quickReply.svg'
import user from '../../images/ProductPage/user.jpg'
import star from '../../images/ProductPage/star.svg'
const SellerInfo = () => {
	return (
		<div className="seller">
			<div className="seller__profile">
				<img src={user} alt="賣家頭像" className="seller__avatar" />
				<p className="seller__name">@fun31**56</p>
			</div>

			<div className="seller__stats">
				<div className="seller__rating">
					<span className="seller__score">4.8</span>
					<img src={star} alt="" />
					<span className="seller__count">(5188則評價)</span>
				</div>
				<p className="seller__location">台北市/萬華區</p>
				<div className="seller__tags">
					<img src={check} alt="" />
					<img src={fastShip} alt="" />
					<img src={quickReply} alt="" />
				</div>
			</div>
			<div className="seller__desc">
				<p>
					個人賣場，商品多九成新，基本上24小時內回覆，歡迎使用留言提問及聊聊^^
				</p>
			</div>
			<div className="seller__actions">
				<button className="btn">追蹤+</button>
				<button className="btn">聊聊</button>
			</div>
		</div>

	)
}

export default SellerInfo