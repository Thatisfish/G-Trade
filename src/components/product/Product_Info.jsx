import React from 'react'
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
		<>
			<div className="product-page product-page-pc">
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
							<li><p className='st'>商品狀態：</p>近全新，僅拆封或試用，無任何使用痕跡或瑕疵，與新品無異。</li>
							<li><p className='st'>其他備註：</p>附硬殼包+玻璃貼+TPU材質透明殼</li>
							<li><p className='st'>商品位置：</p>臺北市</li>
							<li><p className='st'>運送服務：</p>超商取貨、宅配、面交</li>
							<li><p className='st'>付款方式：</p>信用卡/行動支付/超商取貨付款</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="product-page product-page-mobile">
				<div className='carousel'>
					<Swiper
						modules={[Pagination]}
						pagination={{
							type: "fraction", // ✅ 會顯示 1/3 這種格式
						}}
						style={{ width: "100%", height: "100%" }}
					>
						{photos.map((p, i) => (
							<SwiperSlide key={i}>
								<img src={p.src} alt={p.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className='detail_mobile'>
					<div className="mobile_title">
						附硬殼包+玻璃貼+TPU材質透明殼【Switch2主機 NS2主機】
					</div>
					<div className='mobile_infor'>
						<div className="mobile_price">
							<p className='new_price'>NTD$999</p>
							<p className='old_price'>NTD$1500</p>
						</div>
						<div className="mobile_date">
							上架日期:2025.07.24
						</div>
					</div>
					<div className='mobile_description'>
						<div className='md'>
							<h2>商品說明</h2>
							<img src={Evaluate1} alt="" className='mobile_status' />
						</div>
						<ul>
							<li><p className='st'>商品狀態：</p>近全新，僅拆封或試用，無任何使用痕跡或瑕疵，與新品無異。</li>
							<li><p className='st'>其他備註：</p>附硬殼包+玻璃貼+TPU材質透明殼</li>
							<li><p className='st'>商品位置：</p>臺北市</li>
							<li><p className='st'>運送服務：</p>超商取貨、宅配、面交</li>
							<li><p className='st'>付款方式：</p>信用卡/行動支付/超商取貨付款</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductInfo