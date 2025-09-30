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

const ProductPage = () => {
	// 取得路由參數（route params 路由參數）
	const { id: routeId } = useParams();
	// 為了防止網址含中文或空白，做解碼（decode 解碼）
	const productId = decodeURIComponent(routeId || "");

	// 依商品 ID 取得資料
	const product = getProductById(productId);

	// 切換商品時更新文件標題（document title 文件標題）
	useEffect(() => {
		if (product?.productTitle) {
			document.title = `${product.productTitle} ｜ 遊玩人間市集`;
		} else {
			document.title = "商品不存在 ｜ 遊玩人間市集";
		}
	}, [product?.productTitle]);

	// 找不到商品
	if (!product) {
		return (
			<div className="product">
				<div className="breadcrumb">
					<Link to="/">首頁</Link>
					<span>›</span>
					<span className="is-current">找不到此商品</span>
				</div>
				<div className="section">很抱歉，這個商品不存在或已下架。</div>
			</div>
		);
	}

	// 若資料有自帶 breadcrumb（導覽路徑），優先使用
	const bc =
		Array.isArray(product.breadcrumb) && product.breadcrumb.length > 0
			? product.breadcrumb
			: [
				{ label: "Switch", to: "/switch" },
				{ label: "主機", to: "/switch/console" }
			];

	return (
		<div className="product">
			{/* 麵包屑（breadcrumb 導覽路徑） */}
			<div className="breadcrumb">
				<Link to="/">首頁</Link>
				<span className="angleBracket">›</span>
				{bc.map((b, i) => (
					<span key={`${b.label}-${i}`} className="breadcrumb__item">
						{b.to ? <Link to={b.to}>{b.label}</Link> : <span>{b.label}</span>}
						<span className="angleBracket">›</span>
					</span>
				))}
				<span className="is-current">{product.productTitle}</span>
			</div>

			{/* 商品簡介（info 資訊） */}
			<section className="product__info section">
				<ProductInfo {...product} />
			</section>

			{/* 賣家資訊（seller 賣家） */}
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

			{/* 商品詳細說明（detail 詳細） */}
			<section className="product__detail section">
				<ProductDetail detailContent={product.detailContent} />
			</section>

			{/* 問與答（Q&A 問答）— localStorage（本地儲存）鍵名：qa:<productId> */}
			<section className="product__qa section">
				<div className="top_decorate2"></div>
				<ProductQa productId={product.id} initialQa={product.qa || []} />
				<div className="down_decorate2"></div>
			</section>

			{/* 你可能有興趣（recommend 推薦） */}
			<section className="product__recommend section">
				<ProductRecommend items={product.recommendItems || []} />
			</section>
		</div>
	);
};

export default ProductPage;
