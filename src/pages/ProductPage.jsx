// src/pages/ProductPage.jsx
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ProductInfo from "../components/product/Product_Info";
import SellerInfo from "../components/product/SellerInfo";
import ProductDetail from "../components/product/product_detail";
import ProductQa from "../components/product/Product_qa";
import ProductRecommend from "../components/product/Product_Recommend";
import { getProductById } from "../data/products";
import "../styles/ProductPage.scss";
import "../styles/_CartToast.scss";

// 購物車提示卡（toast 吐司訊息卡）
import CartToast from "../components/CartToast";
// 購物車工具：加入項目（addItem 新增項目）、讀取購物車（getCart 取得購物車）
import { addItem, getCart, getCount } from "../js/cart";

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
	// 路由參數（params 參數）
	const { id: routeId } = useParams();
	const productId = decodeURIComponent(routeId || "");

	// 依 id 取得商品
	const product = getProductById(productId);

	const navigate = useNavigate();

	// 標題（title 標題）
	useEffect(() => {
		document.title = product?.productTitle
			? `${product.productTitle} ｜ 遊玩人間市集`
			: "商品不存在 ｜ 遊玩人間市集";
	}, [product?.productTitle]);

	// ===== 加入購物車提示卡狀態（toast 狀態）=====
	const [toast, setToast] = useState({
		show: false,
		title: "",
		img: "",
		qty: 1,
		count: 0
	});

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

	// ===== 動態麵包屑（breadcrumb 導覽路徑）=====
	let bc;
	if (Array.isArray(product.breadcrumb) && product.breadcrumb.length > 0) {
		bc = product.breadcrumb;
	} else {
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

		const CAT_TO_SLUG = { "主機": "console", "遊戲": "game", "配件": "accessory", "全部": "all" };
		const catSlug = CAT_TO_SLUG[categoryName] || "all";

		const platformCrumb = PLATFORM_INFO[platform] ?? {
			label: platform || "Switch",
			to: `/alltype/${encodeURIComponent(platform || "Switch")}/all#B_itemTitles`
		};

		const categoryCrumb = {
			label: categoryName || "全部",
			to: `/alltype/${encodeURIComponent(platform)}/${catSlug}#B_item`
		};

		bc = [platformCrumb, categoryCrumb];
	}

	// ===== 加入購物車（Add to cart 加入購物車）→ 顯示右上提示卡，不立刻導頁 =====
	const handleAddToCart = (qty = 1) => {
		try {
			const firstImg = Array.isArray(product.mainImage) ? product.mainImage[0] : (product.thumb || "");
			addItem(
				{
					id: product.id,
					title: product.productTitle,
					price: product.salePrice ?? product.originalPrice ?? 0,
					img: firstImg,
					sellerName: product.sellerName
				},
				Number(qty) || 1
			);

			// ✅ 用 getCount() 取總件數（避免任何格式不一致）
			const totalCount = getCount();

			setToast({
				show: true,
				title: product.productTitle,
				img: firstImg,
				qty: Number(qty) || 1,
				count: totalCount
			});
		} catch (err) {
			// 若還是失敗，十之八九是 localStorage 被瀏覽器阻擋或無權限
			console.error("Add to cart failed（加入購物車失敗）:", err, {
				addItemType: typeof addItem,
				getCartType: typeof getCart
			});
			alert("加入購物車失敗，請稍後再試。");
		}
	};

	// 立即購買（Buy Now 立即購買）
	const handleBuyNow = (qty = 1) => {
		try {
			const firstImg = Array.isArray(product.mainImage) ? product.mainImage[0] : (product.thumb || "");
			addItem(
				{
					id: product.id,
					title: product.productTitle,
					price: product.salePrice ?? product.originalPrice ?? 0,
					img: firstImg
				},
				Number(qty) || 1
			);
			navigate("/Shopping_cart");
		} catch (err) {
			console.error("Buy now failed（立即購買失敗）:", err);
			alert("處理失敗，請稍後再試。");
		}
	};

	return (
		<>
			{/* 右上提示卡（toast 吐司訊息卡）— 位置由 CartToast 的 CSS 控制在 Navbar 下方 */}
			<CartToast
				title={toast.title}
				img={toast.img}
				qty={toast.qty}
				count={toast.count}
				visible={toast.show}
				onClick={() => navigate("/Shopping_cart")}
				onClose={() => setToast((t) => ({ ...t, show: false }))}
				duration={3000}
			/>

			<div className="product">
				{/* 麵包屑（breadcrumb 導覽路徑） */}
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
					<ProductInfo
						{...product}
						onAddToCart={handleAddToCart}     // 點擊後顯示提示卡（toast 提示卡）
						onBuyNow={handleBuyNow}           // 仍保留「立即購買」直達購物車
					/>
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

				{/* 問與答 */}
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
		</>
	);
};

export default ProductPage;
