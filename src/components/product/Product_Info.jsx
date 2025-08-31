import React from 'react'
import { useState } from "react";
import SidePicture1 from '../../images/ProductPage/SidePicture1.webp'
import SidePicture2 from '../../images/ProductPage/SidePicture2.jpg'

import Evaluate1 from '../../images/ProductPage/01.png'
const ProductInfo = () => {
	const photos = [
		{ src: SidePicture1, alt: "商品大圖 1" },
		{ src: SidePicture2, alt: "商品大圖 2" },
		{ src: SidePicture1, alt: "商品大圖 3" },
		{ src: SidePicture2, alt: "商品大圖 4" },
	];

	// 2) 目前選到哪一張（index 索引）
	const [curIndex, setCurIndex] = useState(0);
	const [isFav, setIsFav] = useState(false);
	return (
		<div className="product-page">
			{/* 圖片區 */}
			<div className="product-gallery">
				<div className="thumbnails">
					{photos.map((p, i) => (
						<div
							key={i}
							className={`thumb ${i === curIndex ? "is-active" : ""}`}
							onMouseEnter={() => setCurIndex(i)} // hover 換大圖
						>
							<img src={p.src} alt={`縮圖 ${i + 1}`} />
						</div>
					))}
				</div>
				<div className="main-image">
					<img src={photos[curIndex].src} alt={photos[curIndex].alt} />
				</div>
			</div>

			{/* 商品資訊區 */}
			<div className="product-detail">
				<div className='product-main'>
					<h1 className="product-title">
						附硬殼包+玻璃貼+TPU材質透明殼【Switch2主機 NS2主機】
					</h1>

					<div className="product-mainInfo">
						<p className="product-meta">上架日期：2025.07.24</p>
						<div className='product-price'>
							<span className="original-price">NTD$1,500</span>
							<span className="sale-price">NTD$999</span>
						</div>
					</div>
				</div>
				<div className="product-actions">
					<button
						className={`btn-fav ${isFav ? "active" : ""}`}
						onClick={() => setIsFav(!isFav)}
					>
						<span className="heart"></span>
					</button>
					<button className="btn-cart btn">加入購物車</button>
					<button className="btn-buy btn">直接購買</button>
				</div>
				<div className="product-status">
					<img src={Evaluate1} alt="" />
				</div>

				<div className="product-description">
					<h2>商品說明</h2>
					<ul>
						<li>商品狀態：近全新，僅拆封或試用，無任何使用痕跡或瑕疵，與新品無異。</li>
						<li>其他備註：附硬殼包+玻璃貼+TPU材質透明殼</li>
						<li>商品所在地：臺北市</li>
						<li>運送服務：超商取貨、宅配、面交</li>
						<li>付款方式：信用卡/行動支付/超商取貨付款</li>
					</ul>
				</div>


			</div>
		</div>

	)
}

export default ProductInfo