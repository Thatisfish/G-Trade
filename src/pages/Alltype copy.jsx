// src/pages/Alltype.jsx
import "../styles/_Alltype.scss";
import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Banner from "../images/banner_pokemon.avif";
import AllTypeCards from "../components/AllTypeCards.jsx";
import banner02 from "../images/Alltype_SW/Alltype_banner02.avif";
import banner03 from "../images/Alltype_SW/Alltype_banner03.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Paginations from "../components/Pagination.jsx";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// 真正資料
import { PRODUCTS } from "../data/products";
import { Helmet } from "@dr.pogodin/react-helmet";

/* 可能你的產品物件用的不是 id，而是 slug/productId 等
   這裡做個健壯的擷取邏輯 */
const pickId = (p) => p?.id ?? p?.slug ?? p?.productId ?? p?.pid ?? null;

// 類別解析（category 類別）
const TABS = ["全部", "主機", "遊戲", "配件"];
const toCardItem = (p) => {
	const id = pickId(p);
	return {
		id, // 用來組 /product/:id
		image: Array.isArray(p.mainImage) ? p.mainImage[0] : p.mainImage,
		category: p.category,
		title: p.productTitle,
		seller: p.sellerName || "",
		priceNow: (p.salePrice ?? p.originalPrice)?.toString?.() ?? "",
		priceOld: p.salePrice != null ? (p.originalPrice?.toString?.() ?? "") : undefined,
		size: "medium",
	};
};

const Alltype = () => {
	// 產出卡片陣列，過濾掉沒有 id 的資料並在 console（主控台）提醒
	const list = useMemo(() => {
		const arr = PRODUCTS
			.filter((p) => p.platform === "Switch") // ← 這裡過濾
			.map(toCardItem);

		const bad = arr.filter((x) => !x.id);
		if (bad.length) {
			console.warn("[Alltype] 有商品缺少 id：", bad);
		}
		return arr.filter((x) => !!x.id);
	}, []);

	const [currentPage, setCurrentPage] = useState(1);
	const ITEMS_PER_PAGE = 12;
	const [active, setActive] = useState("全部");

	// 各分類數量
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

	// 依當前頁籤篩選
	const filtered = useMemo(() => {
		return active === "全部" ? list : list.filter((p) => p.category === active);
	}, [active, list]);

	// 分頁
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

	const handleCategoryChange = (tab) => {
		setActive(tab);
		setCurrentPage(1);
	};

	return (
		<>
			<Helmet>
				<title>遊玩人間市集 ｜ Switch </title>
				<meta name="description" content="歡迎來到遊玩人間市集，探索各式二手遊戲商品。" />
			</Helmet>
			<div className="B_content">
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
						<SwiperSlide><img src={Banner} alt="活動橫幅" /></SwiperSlide>
						<SwiperSlide><img src={banner02} alt="活動橫幅" /></SwiperSlide>
						<SwiperSlide><img src={banner03} alt="活動橫幅" /></SwiperSlide>
					</Swiper>
				</div>

				<div className="B_itemTitles">
					<Link className="B_itemTitle" to="/Alltype_PS">PS系列</Link>
					<p className="B_name">Switch</p>
					<Link className="B_itemTitle" to="/Alltype_Xbox">Xbox</Link>
				</div>

				<div className="B_category" role="tablist" aria-label="商品分類">
					{TABS.map((tab) => (
						<button
							key={tab}
							className={`B_Categories ${active === tab ? "is-active" : ""}`}
							type="button"
							role="tab"
							aria-selected={active === tab}
							onClick={() => handleCategoryChange(tab)}
						>
							{tab}({counts[tab] ?? 0})
						</button>
					))}
				</div>

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
							/* 把連結目標交給卡片 */
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
};

export default Alltype;
