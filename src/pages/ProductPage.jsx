// src/pages/ProductPage.jsx
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ProductInfo from "../components/product/Product_Info";
import SellerInfo from "../components/product/SellerInfo";
import ProductDetail from "../components/product/product_detail";
import ProductQa from "../components/product/Product_qa";
import ProductRecommend from "../components/product/Product_Recommend";
import { getProductById } from "../data/products";
import "../styles/ProductPage.scss";

/**
 * 平台（platform 平台）對應資訊：
 * label（標籤文字）、to（返回列表的路由）
 * 平台層：回「全部」分頁，並捲到 B_itemTitles
 */
const PLATFORM_INFO = {
	Switch: { label: "Switch", to: "/alltype/Switch/all#B_itemTitles" },
	PS: { label: "PS", to: "/alltype/PS/all#B_itemTitles" },
	Xbox: { label: "Xbox", to: "/alltype/Xbox/all#B_itemTitles" }
};

const ProductPage = () => {
	// 路由參數
	const { id: routeId } = useParams();
	const productId = decodeURIComponent(routeId || "");

	// 依 id 取得商品
	const product = getProductById(productId);

	// 標題
	useEffect(() => {
		document.title = product?.productTitle
			? `${product.productTitle} ｜ 遊玩人間市集`
			: "商品不存在 ｜ 遊玩人間市集";
	}, [product?.productTitle]);

	// 找不到商品
	if (!product) {
		return (
			<div className="product">
				<nav className="breadcrumb">
					<Link to="/">首頁</Link>
					<span className="angleBracket">›</span>
					<span className="is-current">找不到此商品</span>
				</nav>
				<div className="section">很抱歉，這個商品不存在或已下架。</div>
			</div>
		);
	}

	// ===== 動態麵包屑（依平台/分類，自動組） =====
	let bc;
	if (Array.isArray(product.breadcrumb) && product.breadcrumb.length > 0) {
		// 若資料自帶 breadcrumb，優先使用
		bc = product.breadcrumb;
	} else {
		// 正規化（避免 PS系列 / XBOX / 全形空白等）
		const normalizePlatform = (v) => {
			const t = String(v || "").trim();
			if (t === "PS系列" || t === "PlayStation" || t === "ps" || t === "Ps") return "PS";
			if (t === "XBOX" || t === "xbox") return "Xbox";
			return t || "Switch";
		};
		const normalizeCategory = (v) => {
			const t = String(v || "").replace(/\u3000/g, " ").trim();
			if (["主機", "機台"].includes(t)) return "主機";
			if (["遊戲", "軟體", "遊戲片"].includes(t)) return "遊戲";
			if (["配件", "周邊", "周邊商品"].includes(t)) return "配件";
			if (t === "" || t === "全部") return "全部";
			return t;
		};

		const platform = normalizePlatform(product.platform);
		const categoryName = normalizeCategory(product.category);

		// 路由 slug
		const CAT_TO_SLUG = { "主機": "console", "遊戲": "game", "配件": "accessory", "全部": "all" };
		const catSlug = CAT_TO_SLUG[categoryName] || "all";

		// 平台層 → /alltype/:platform/all#B_itemTitles
		const platformCrumb = PLATFORM_INFO[platform] ?? {
			label: platform || "Switch",
			to: `/alltype/${encodeURIComponent(platform || "Switch")}/all#B_itemTitles`
		};

		// 分類層 → /alltype/:platform/:category#B_item
		const categoryCrumb = {
			label: categoryName || "全部",
			to: `/alltype/${encodeURIComponent(platform)}/${catSlug}#B_item`
		};

		bc = [platformCrumb, categoryCrumb];
	}

	return (
		<div className="product">
			{/* 麵包屑 */}
			<nav className="breadcrumb" aria-label="Breadcrumb（導覽路徑）">
				<Link to="/">首頁</Link>
				<span className="angleBracket">›</span>

				{bc.map((b, i) => (
					<span key={`${b.label}-${i}`} className="breadcrumb__item">
						{b.to ? <Link to={b.to}>{b.label}</Link> : <span>{b.label}</span>}
						<span className="angleBracket">›</span>
					</span>
				))}

				<span className="is-current">{product.productTitle}</span>
			</nav>

			{/* 商品資訊 */}
			<section className="product__info section">
				<ProductInfo {...product} />
			</section>

			{/* 賣家資訊 */}
			<aside className="product__seller section">
				<div className="top_decorate"></div>
				<SellerInfo
					sellerAvatar={product.sellerAvatar}
					sellerName={product.sellerName}
					sellerScore={product.sellerScore}
					sellerCount={product.sellerCount}
					sellerLocation={product.sellerLocation}
					sellerTags={product.sellerTags}
					sellerDesc={product.sellerDesc}
				/>
				<div className="down_decorate"></div>
			</aside>

			{/* 詳細內容 */}
			<section className="product__detail section">
				<ProductDetail detailContent={product.detailContent} />
			</section>

			{/* 問與答（localStorage 鍵名：qa:<productId>） */}
			<section className="product__qa section">
				<div className="top_decorate2"></div>
				<ProductQa productId={product.id} initialQa={product.qa || []} />
				<div className="down_decorate2"></div>
			</section>

			{/* 推薦 */}
			<section className="product__recommend section">
				<ProductRecommend items={product.recommendItems || []} />
			</section>
		</div>
	);
};

export default ProductPage;
