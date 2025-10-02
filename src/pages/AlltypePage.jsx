// src/pages/AlltypePage.jsx
import "../styles/Alltype.scss";
import { useMemo, useState, useEffect } from "react";
import { NavLink, useParams, Navigate, useNavigate, useLocation } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Helmet } from "@dr.pogodin/react-helmet";

import { PRODUCTS } from "../data/products.js";
import AllTypeCards from "../components/AllTypeCards.jsx";
import Paginations from "../components/Pagination.jsx";

// === 橫幅（banner 橫幅） ===
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

// 分類（tabs 分頁籤）：UI 顯示 ↔ URL slug
const TABS = ["全部", "主機", "遊戲", "配件"];
const CAT_TO_SLUG = { 全部: "all", 主機: "console", 遊戲: "game", 配件: "accessory" };
const SLUG_TO_CAT = { all: "全部", console: "主機", game: "遊戲", accessory: "配件" };

const VALID_PLATFORMS = ["Switch", "PS", "Xbox"];
const VALID_CATEGORY_SLUGS = ["all", "console", "game", "accessory"];

// 取卡片需要的欄位（normalize 正規化）
const pickId = (p) => p?.id ?? p?.slug ?? p?.productId ?? p?.pid ?? null;
const toCardItem = (p) => {
	const id = pickId(p);
	return {
		id,
		image: Array.isArray(p.mainImage) ? p.mainImage[0] : p.mainImage,
		category: p.category, // 主機 / 遊戲 / 配件
		title: p.productTitle,
		seller: p.sellerName || "",
		priceNow: (p.salePrice ?? p.originalPrice)?.toString?.() ?? "",
		priceOld: p.salePrice != null ? (p.originalPrice?.toString?.() ?? "") : undefined,
		size: "medium",

		// ▼ 供排序使用（priceNum：數字價格、meta：日期、sellerScore：賣家評分）
		meta: p.productMeta, // YYYY-MM-DD
		priceNum: Number(p.salePrice ?? p.originalPrice) || 0,
		sellerScore: Number(p.sellerScore ?? 0)
	};
};

export default function AlltypePage() {
	// ── 路由參數 ─────────────────────────────────────────────
	const { platform, category } = useParams();
	const navigate = useNavigate();
	const location = useLocation();

	const PLATFORM = decodeURIComponent(platform || "");
	if (!VALID_PLATFORMS.includes(PLATFORM)) return <Navigate to="/alltype/Switch/all" replace />;

	// 沒帶分類就導向 all（不捲動）
	useEffect(() => {
		if (!category) {
			navigate(`/alltype/${PLATFORM}/all`, { replace: true, state: { noScroll: true } });
		}
	}, [category, PLATFORM, navigate]);

	// 目前分類
	const currentCategorySlug = VALID_CATEGORY_SLUGS.includes(category || "") ? category : "all";
	const currentCategoryName = SLUG_TO_CAT[currentCategorySlug] || "全部";

	// ── 平台資料（先過濾，再轉卡片物件） ─────────────────────
	const list = useMemo(() => {
		const arr = PRODUCTS.filter((p) => p.platform === PLATFORM).map(toCardItem);
		const bad = arr.filter((x) => !x.id);
		if (bad.length) console.warn("[AlltypePage] 有商品缺少 id：", bad);
		return arr.filter((x) => !!x.id);
	}, [PLATFORM]);

	// 分類數量統計（counts 統計）
	const counts = useMemo(() => {
		return list.reduce(
			(acc, p) => {
				acc["全部"]++;
				if (TABS.includes(p.category)) acc[p.category] = (acc[p.category] || 0) + 1;
				return acc;
			},
			{ 全部: 0, 主機: 0, 遊戲: 0, 配件: 0 }
		);
	}, [list]);

	// 依分類篩選
	const filtered = useMemo(() => {
		return currentCategoryName === "全部" ? list : list.filter((p) => p.category === currentCategoryName);
	}, [list, currentCategoryName]);

	// ── 排序（select 下拉） ──────────────────────────────────
	// sortKey：default / price-asc / price-desc / date-new / date-old / score-desc / score-asc
	const [sortKey, setSortKey] = useState("default");

	const sortedFiltered = useMemo(() => {
		const out = [...filtered];
		switch (sortKey) {
			case "price-asc":
				out.sort((a, b) => a.priceNum - b.priceNum);
				break;
			case "price-desc":
				out.sort((a, b) => b.priceNum - a.priceNum);
				break;
			case "date-new":
				out.sort((a, b) => new Date(b.meta) - new Date(a.meta));
				break;
			case "date-old":
				out.sort((a, b) => new Date(a.meta) - new Date(b.meta));
				break;
			case "score-desc":
				out.sort((a, b) => b.sellerScore - a.sellerScore);
				break;
			case "score-asc":
				out.sort((a, b) => a.sellerScore - b.sellerScore);
				break;
			default:
				// 預設不變
				break;
		}
		return out;
	}, [filtered, sortKey]);

	// ── 分頁（pagination 分頁） ─────────────────────────────
	const [currentPage, setCurrentPage] = useState(1);

	// 切換分類或平台 → 回到第 1 頁
	useEffect(() => {
		setCurrentPage(1);
	}, [currentCategorySlug, PLATFORM]);

	// 切換排序 → 回到第 1 頁
	useEffect(() => {
		setCurrentPage(1);
	}, [sortKey]);

	const ITEMS_PER_PAGE = 12;
	const totalPages = Math.ceil(sortedFiltered.length / ITEMS_PER_PAGE);
	const currentItems = useMemo(() => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
		const endIndex = startIndex + ITEMS_PER_PAGE;
		return sortedFiltered.slice(startIndex, endIndex);
	}, [sortedFiltered, currentPage]);

	const handlePageChange = (page) => {
		setCurrentPage(page);
		// 需要分頁時自動滾動可開啟：
		// document.getElementById("B_item")?.scrollIntoView({ behavior: "smooth", block: "start" });
	};

	// ── 分類切換 ────────────────────────────────────────────
	const goCategory = (tabName) => {
		const slug = CAT_TO_SLUG[tabName] || "all";
		navigate(`/alltype/${PLATFORM}/${slug}`, { state: { noScroll: true } });
	};

	// 平台切換用的連結
	const platformLink = (p) => ({
		pathname: `/alltype/${p}/${currentCategorySlug}`,
		state: { noScroll: true }
	});

	const banners = BANNERS[PLATFORM] || [];
	const otherPlatforms = VALID_PLATFORMS.filter((p) => p !== PLATFORM);

	// ── 精準滾動（支援 #hash，含 offset 與重試） ───────────────
	const SCROLL_OFFSET = (() => {
		const navH = document.querySelector(".navbar, .site-header")?.offsetHeight || 0;
		return Math.max(80, navH + 12);
	})();

	const scrollToHash = (hash) => {
		if (!hash) return;
		const id = hash.replace(/^#/, "");
		let tries = 0;

		const tryScroll = () => {
			const el = document.getElementById(id);
			if (el) {
				const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
				window.scrollTo({ top, behavior: "smooth" });
				return;
			}
			if (tries < 20) {
				tries += 1;
				setTimeout(tryScroll, 60);
			}
		};

		setTimeout(tryScroll, 0);
	};

	useEffect(() => {
		// 只有帶 hash 才捲動；沒有 hash 就不動（避免每次都往下跑）
		if (location.hash) {
			scrollToHash(location.hash);
		}
	}, [location.key, location.hash]);

	return (
		<>
			<Helmet>
				<title>{`遊玩人間市集 ｜ ${PLATFORM_LABEL[PLATFORM]} ｜ ${currentCategoryName}`}</title>
				<meta name="description" content="歡迎來到遊玩人間市集，探索各式二手遊戲商品。" />
			</Helmet>

			<div className="B_content">
				{/* 橫幅（banner） */}
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

				{/* 平台切換（加上 id，供 #B_itemTitles 精準滾動） */}
				<div id="B_itemTitles" className="B_itemTitles">
					{otherPlatforms[0] && (
						<NavLink className="B_itemTitle" to={platformLink(otherPlatforms[0])}>
							{PLATFORM_LABEL[otherPlatforms[0]]}
						</NavLink>
					)}

					<p className="B_name">{PLATFORM_LABEL[PLATFORM]}</p>

					{otherPlatforms[1] && (
						<NavLink className="B_itemTitle" to={platformLink(otherPlatforms[1])}>
							{PLATFORM_LABEL[otherPlatforms[1]]}
						</NavLink>
					)}
				</div>

				{/* 類別（Tabs） */}
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

				{/* 排序工具列（toolbar） */}
				<div className="B_sortButtons" aria-label="排序控制（sorting）">
					<button
						className={sortKey === "price-asc" ? "is-active" : ""}
						onClick={() => setSortKey(sortKey === "price-asc" ? "default" : "price-asc")}
					>
						價格 ↑
					</button>
					<button
						className={sortKey === "price-desc" ? "is-active" : ""}
						onClick={() => setSortKey(sortKey === "price-desc" ? "default" : "price-desc")}
					>
						價格 ↓
					</button>
					<button
						className={sortKey === "date-new" ? "is-active" : ""}
						onClick={() => setSortKey(sortKey === "date-new" ? "default" : "date-new")}
					>
						日期 新→舊
					</button>
					<button
						className={sortKey === "date-old" ? "is-active" : ""}
						onClick={() => setSortKey(sortKey === "date-old" ? "default" : "date-old")}
					>
						日期 舊→新
					</button>
				</div>

				{/* 卡片清單（加上 id，供 #B_item 精準滾動） */}
				<div id="B_item" className="B_item">
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
