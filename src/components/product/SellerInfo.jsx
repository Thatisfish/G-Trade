// src/components/product/SellerInfo.jsx
import React from "react";
import check from "../../images/ProductPage/check.svg";
import fastShip from "../../images/ProductPage/fastShip.svg";
import quickReply from "../../images/ProductPage/quickReply.svg";
import fallbackAvatar from "../../images/ProductPage/user.jpg";
import star from "../../images/ProductPage/star.svg";

const TAG_ICON = {
	check,
	fastShip,
	quickReply
};

const SellerInfo = ({
	sellerAvatar,
	sellerName,
	sellerScore,
	sellerCount,
	sellerLocation,
	sellerTags = [],
	sellerDesc
}) => {
	const avatarSrc = sellerAvatar || fallbackAvatar;

	return (
		<>
			<div className="seller seller-pc">
				<div className="seller__profile">
					<img src={avatarSrc} alt="賣家頭像" className="seller__avatar" />
					<p className="seller__name">{sellerName}</p>
				</div>

				<div className="seller__rwd">
					<div className="seller__stats">
						<div className="seller__rating">
							<span className="seller__score">{sellerScore?.toFixed?.(1) ?? sellerScore}</span>
							<img src={star} alt="評分星等" />
							<span className="seller__count">({sellerCount}則評價)</span>
						</div>

						<p className="seller__location">{sellerLocation}</p>

						<div className="seller__tags">
							{sellerTags.map((t) => {
								const icon = TAG_ICON[t];
								return icon ? <img key={t} src={icon} alt={t} /> : null;
							})}
						</div>
					</div>

					<div className="seller__desc">
						<p>{sellerDesc}</p>
					</div>
				</div>

				<div className="seller__actions">
					<button className="btn">追蹤+</button>
					<button className="btn">聊聊</button>
				</div>
			</div>

			{/* 行動版 */}
			<div className="seller seller-mobile">
				<img src={avatarSrc} alt="賣家頭像" className="seller__avatar" />
				<div className="scenter">
					<p className="seller__name">{sellerName}</p>

					<div className="seller__rating">
						<span className="seller__score">{sellerScore?.toFixed?.(1) ?? sellerScore}</span>
						<img src={star} alt="評分星等" />
						<span className="seller__count">({sellerCount}則評價)</span>
					</div>

					<div className="seller__tags">
						{sellerTags.map((t) => {
							const icon = TAG_ICON[t];
							return icon ? <img key={t} src={icon} alt={t} /> : null;
						})}
					</div>
				</div>

				<div className="seller__actions">
					<button className="btn">追蹤+</button>
					<button className="btn">聊聊</button>
				</div>
			</div>
		</>
	);
};

export default SellerInfo;
