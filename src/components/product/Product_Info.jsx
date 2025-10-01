// src/components/product/Product_Info.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 從資料層引入狀態對照表（map 對照）
import { PRODUCT_STATUS_MAP } from "../../data/products";

const ProductInfo = ({
	mainImage = [],
	productTitle = "",
	productMeta = "", // YYYY-MM-DD
	originalPrice,
	salePrice,
	productStatus, // 可能是 string（字串 key）或 { key, label, icon } 物件
	st = {},
	// ⬇️ 新增：由父層傳入的事件（handlers 處理器）
	onAddToCart = () => { }, // Add to Cart（加入購物車）
	onBuyNow = () => { } // Buy Now（直接購買）
}) => {
	// 圖片列表（最多 4 張）
	const photos = (mainImage || []).slice(0, 4).map((src, i) => ({
		src,
		alt: `商品大圖 ${i + 1}`
	}));

	const [curIndex, setCurIndex] = useState(0);
	const [isFav, setIsFav] = useState(false);

	// 統一把 productStatus 轉成 { label, icon } 供呈現
	let statusIcon = null;
	let statusLabel = st.status || "商品狀態";

	if (typeof productStatus === "string") {
		const mapped = PRODUCT_STATUS_MAP?.[productStatus];
		statusIcon = mapped?.image || null;
		statusLabel = mapped?.label || statusLabel;
	} else if (productStatus && typeof productStatus === "object") {
		statusIcon = productStatus.icon || null;
		statusLabel = productStatus.label || statusLabel;
	}

	const priceBlock = (
		<div className="product-price">
			{salePrice != null ? (
				<>
					<span className="original-price">NTD${Number(originalPrice).toLocaleString()}</span>
					<span className="sale-price">NTD${Number(salePrice).toLocaleString()}</span>
				</>
			) : (
				<span className="sale-price">NTD${Number(originalPrice).toLocaleString()}</span>
			)}
		</div>
	);

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
								onMouseEnter={() => setCurIndex(i)}
							>
								<img src={p.src} alt={`縮圖 ${i + 1}`} />
							</div>
						))}
					</div>
					<div className="main-image">
						{photos[curIndex] && <img src={photos[curIndex].src} alt={photos[curIndex].alt} />}
					</div>
				</div>

				{/* 商品資訊區 */}
				<div className="product-detail">
					<div className="product-main">
						<h1 className="product-title">{productTitle}</h1>

						<div className="product-mainInfo">
							<p className="product-meta">上架日期：{(productMeta || "").replaceAll("-", ".")}</p>
							{priceBlock}
						</div>
					</div>

					<div className="product-actions">
						<button
							type="button"
							className={`btn-fav ${isFav ? "active" : ""}`}
							onClick={() => setIsFav(!isFav)}
							aria-label="加入收藏（Add to favorites 加入收藏）"
						>
							<span className="heart"></span>
						</button>

						{/* ✅ 綁定加入購物車 */}
						<button
							type="button"
							className="btn-cart btn"
							onClick={onAddToCart}
							aria-label="加入購物車（Add to Cart 加入購物車）"
						>
							加入購物車
						</button>

						{/* 可選：直接購買 */}
						<button
							type="button"
							className="btn-buy btn"
							onClick={onBuyNow}
							aria-label="直接購買（Buy Now 直接購買）"
						>
							直接購買
						</button>
					</div>

					{statusIcon && (
						<div className="product-status">
							<img src={statusIcon} alt={statusLabel} />
						</div>
					)}

					<div className="product-description">
						<h2>商品說明</h2>
						<ul>
							<li><p className="st">商品狀態：</p>{st.status || "-"}</li>
							<li><p className="st">其他備註：</p>{st.note || "-"}</li>
							<li><p className="st">商品位置：</p>{st.location || "-"}</li>
							<li><p className="st">運送服務：</p>{st.shipping || "-"}</li>
							<li><p className="st">付款方式：</p>{st.payment || "-"}</li>
						</ul>
					</div>
				</div>
			</div>

			{/* 行動版 */}
			<div className="product-page product-page-mobile">
				<div className="carousel">
					<Swiper
						modules={[Pagination]}
						pagination={{ type: "fraction" }}
						style={{ width: "100%", height: "100%" }}
					>
						{photos.map((p, i) => (
							<SwiperSlide key={i}>
								<img src={p.src} alt={p.alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>

				<div className="detail_mobile">
					<div className="mobile_title">{productTitle}</div>

					<div className="mobile_infor">
						<div className="mobile_price">
							<p className="new_price">
								{salePrice != null
									? `NTD$${Number(salePrice).toLocaleString()}`
									: `NTD$${Number(originalPrice).toLocaleString()}`}
							</p>
							{salePrice != null && (
								<p className="old_price">NTD${Number(originalPrice).toLocaleString()}</p>
							)}
						</div>
						<div className="mobile_date">上架日期：{(productMeta || "").replaceAll("-", ".")}</div>
					</div>

					<div className="mobile_description">
						<div className="md">
							<h2>商品說明</h2>
							{statusIcon && <img src={statusIcon} alt={statusLabel} className="mobile_status" />}
						</div>
						<ul>
							<li><p className="st">商品狀態：</p>{st.status || "-"}</li>
							<li><p className="st">其他備註：</p>{st.note || "-"}</li>
							<li><p className="st">商品位置：</p>{st.location || "-"}</li>
							<li><p className="st">運送服務：</p>{st.shipping || "-"}</li>
							<li><p className="st">付款方式：</p>{st.payment || "-"}</li>
						</ul>
					</div>

					{/* ✅ 行動版 CTA（可選） */}
					<div className="mobile_actions" style={{ display: "flex", gap: 8, marginTop: 12 }}>
						<button
							type="button"
							className="btn-cart btn"
							onClick={onAddToCart}
							aria-label="加入購物車（Add to Cart 加入購物車）"
							style={{ flex: 1 }}
						>
							加入購物車
						</button>
						<button
							type="button"
							className="btn-buy btn"
							onClick={onBuyNow}
							aria-label="直接購買（Buy Now 直接購買）"
							style={{ flex: 1 }}
						>
							直接購買
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductInfo;
