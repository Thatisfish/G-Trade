// src/pages/AlltypePage.jsx
import "../styles/Alltype.scss";
import { useMemo, useState, useEffect } from "react";
import { Link, NavLink, useParams, Navigate, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Helmet } from "@dr.pogodin/react-helmet";

import { PRODUCTS } from "../data/products.js";
import AllTypeCards from "../components/AllTypeCards.jsx";
import Paginations from "../components/Pagination.jsx";

// === 橫幅（banner 橫幅）設定（config 設定）===
import SwBanner1 from "../images/banner_pokemon.avif";
import SwBanner2 from "../images/Alltype_SW/Alltype_banner02.avif";
import SwBanner3 from "../images/Alltype_SW/Alltype_banner03.avif";
import PsBanner1 from "../images/Alltype_PS/Alltype_PS_banner01.webp";
import PsBanner2 from "../images/Alltype_PS/Alltype_PS_banner02.avif";
import PsBanner3 from "../images/Alltype_PS/Alltype_PS_banner03.avif";
import XbBanner1 from "../images/Alltype_Xbox/Alltype_Xbox_banner01.avif";
import XbBanner2 from "../images/Alltype_Xbox/Alltype_Xbox_banner04.avif";

const BANNERS = {
	Switch: [SwBanner1, SwBanner2, SwBanner3],
	PS: [PsBanner1, PsBanner2, PsBanner3],
	Xbox: [XbBanner1, XbBanner2],
};

const PLATFORM_LABEL = {
	Switch: "Switch",
	PS: "PS系列",
	Xbox: "Xbox",
};

// 分類（category 類別）：UI 顯示 ↔ URL slug（網址代稱）
const TABS = ["全部", "主機", "遊戲", "配件"];
const CAT_TO_SLUG = { 全部: "all", 主機: "console", 遊戲: "game", 配件: "accessory" };
const SLUG_TO_CAT = { all: "全部", console: "主機", game: "遊戲", accessory: "配件" };

const VALID_PLATFORMS = ["Switch", "PS", "Xbox"];
const VALID_CATEGORY_SLUGS = ["all", "console", "game", "accessory"];

// 取卡片需要的最小欄位
const pickId = (p) => p?.id ?? p?.slug ?? p?.productId ?? p?.pid ?? null;
const toCardItem = (p) => {
	const id = pickId(p);
	return {
		id,
		image: Array.isArray(p.mainImage) ? p.mainImage[0] : p.mainImage,
		category: p.category, // 你現有為中文（主機/遊戲/配件）
		title: p.productTitle,
		seller: p.sellerName || "",
		priceNow: (p.salePrice ?? p.originalPrice)?.toString?.() ?? "",
		priceOld: p.salePrice != null ? (p.originalPrice?.toString?.() ?? "") : undefined,
		size: "medium",
	};
};

export default function AlltypePage() {
	// 從路由取平台與分類（category 英文/分類：可選）
	const { platform, category } = useParams(); // platform: Switch|PS|Xbox；category: all|console|game|accessory（或 undefined）
	const navigate = useNavigate();

	const PLATFORM = decodeURIComponent(platform || "");
	if (!VALID_PLATFORMS.includes(PLATFORM)) return <Navigate to="/alltype/Switch/all" replace />;

	// 沒帶分類就導向該平台的 all（全部）
	useEffect(() => {
		if (!category) {
			navigate(`/alltype/${PLATFORM}/all`, { replace: true });
		}
	}, [category, PLATFORM, navigate]);

	// 目前分類（中文顯示用）
	const currentCategorySlug = VALID_CATEGORY_SLUGS.includes(category || "") ? category : "all";
	const currentCategoryName = SLUG_TO_CAT[currentCategorySlug] || "全部";

	// 依平台過濾整體清單
	const list = useMemo(() => {
		const arr = PRODUCTS.filter((p) => p.platform === PLATFORM).map(toCardItem);
		const bad = arr.filter((x) => !x.id);
		if (bad.length) console.warn("[AlltypePage] 有商品缺少 id：", bad);
		return arr.filter((x) => !!x.id);
	}, [PLATFORM]);

	// 統計各分類數量（顯示「全部(4) 主機(3) …」）
	const counts = useMemo(() => {
		return list.reduce(
			(acc, p) => {
				acc["全部"]++;
				if (TABS.includes(p.category)) {
					acc[p.category] = (acc[p.category] || 0) + 1;
				}
				return acc;
			},
			{ 全部: 0, 主機: 0, 遊戲: 0, 配件: 0 }
		);
	}, [list]);

	// 依目前分類再篩一次
	const filtered = useMemo(() => {
		return currentCategoryName === "全部" ? list : list.filter((p) => p.category === currentCategoryName);
	}, [list, currentCategoryName]);

	// 分頁（pagination 英文/分頁）
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		// 當分類（從網址）變動時，回到第一頁
		setCurrentPage(1);
	}, [currentCategorySlug, PLATFORM]);

	const ITEMS_PER_PAGE = 12;
	const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
	const currentItems = useMemo(() => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
		const endIndex = startIndex + ITEMS_PER_PAGE;
		return filtered.slice(startIndex, endIndex);
	}, [filtered, currentPage]);

	const handlePageChange = (page) => {
		setCurrentPage(page);
		document.querySelector(".B_item")?.scrollIntoView({ behavior: "smooth" });
	};

	// 切換分類 → 改 URL（path 英文/路徑）
	const goCategory = (tabName) => {
		const slug = CAT_TO_SLUG[tabName] || "all";
		navigate(`/alltype/${PLATFORM}/${slug}`);
		// currentPage 會在 useEffect 被歸 1
	};

	// 平台切換時，沿用目前 category slug
	const platformLink = (p) => `/alltype/${p}/${currentCategorySlug}`;

	const banners = BANNERS[PLATFORM] || [];

	return (
		<>
			<Helmet>
				<title>{`遊玩人間市集 ｜ ${PLATFORM_LABEL[PLATFORM]} ｜ ${currentCategoryName}`}</title>
				<meta name="description" content="歡迎來到遊玩人間市集，探索各式二手遊戲商品。" />
			</Helmet>

			<div className="B_content">
				{/* 橫幅（banner 橫幅） */}
				<div className="B_banner">
					<Swiper
						spaceBetween={30}
						centeredSlides={true}
						autoplay={{ delay: 2500, disableOnInteraction: false }}
						pagination={{ clickable: true }}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className="mySwiper"
					>
						{banners.map((src, i) => (
							<SwiperSlide key={i}><img src={src} alt="活動橫幅" /></SwiperSlide>
						))}
					</Swiper>
				</div>

				{/* 平台切換（tabs 分頁） */}
				<div className="B_itemTitles">
					<NavLink className="B_itemTitle" to={platformLink("PS")}>PS系列</NavLink>
					<p className="B_name">{PLATFORM_LABEL[PLATFORM]}</p>
					<NavLink className="B_itemTitle" to={platformLink("Xbox")}>Xbox</NavLink>
					<NavLink className="B_itemTitle" to={platformLink("Switch")}>Switch</NavLink>
				</div>

				{/* 類別（category 類別 → 會改 URL path 英文/路徑） */}
				<div className="B_category" role="tablist" aria-label="商品分類 (category 類別)">
					{TABS.map((tab) => {
						const isActive = currentCategoryName === tab;
						return (
							<button
								key={tab}
								className={`B_Categories ${isActive ? "is-active" : ""}`}
								type="button"
								role="tab"
								aria-selected={isActive}
								onClick={() => goCategory(tab)}
							>
								{tab}（{counts[tab] ?? 0}）
							</button>
						);
					})}
				</div>

				{/* 卡片（card 卡片） */}
				<div className="B_item">
					{currentItems.map((item) => (
						<AllTypeCards
							key={item.id}
							id={item.id}
							image={item.image}
							category={item.category}
							title={item.title}
							seller={item.seller}
							priceNow={item.priceNow}
							priceOld={item.priceOld}
							size="medium"
							linkTo={`/product/${encodeURIComponent(item.id)}`}
							wrapperClass="B_cardLink"
							ariaLabel={item.title}
						/>
					))}
				</div>

				{totalPages > 1 && (
					<Paginations
						totalPages={totalPages}
						onPageChange={handlePageChange}
						currentPage={currentPage}
					/>
				)}
			</div>
		</>
	);
}
