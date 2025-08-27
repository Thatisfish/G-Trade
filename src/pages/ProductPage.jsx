// src/pages/ProductPage.jsx
import { useParams } from "react-router-dom"
// 之後這四個元件可以放在 components/product/ 裡
import ProductInfo from "../components/product/Product_Info"
import SellerInfo from "../components/product/SellerInfo"
import ProductDetail from "../components/product/product_detail"
import ProductQa from "../components/product/Product_qa"
import ProductRecommend from "../components/product/Product_Recommend"
import '../styles/ProductPage.scss'
// 先用假資料，之後可以從 data/products.js 匯入
const mockProduct = {
	id: "nsw-oled-red",
	title: "任天堂 Switch OLED 紅藍主機組",
	price: 10990,
	badges: ["近全新", "免運"],
	images: ["/img/p/nsw/1.jpg", "/img/p/nsw/2.jpg"],
	seller: { name: "玩家小店", level: "鑽石", score: 4.9 },
	reviews: [
		{ user: "Han", score: 5, content: "出貨快，主機很新", date: "2025-08-20" }
	],
	recommendations: [
		{ id: "ps5-slim", title: "PS5 Slim 光碟版", price: 12990, thumb: "/img/r/ps5.jpg" }
	]
}

const ProductPage = () => {
	const { id } = useParams()
	// TODO: 之後用 id 從資料陣列找對應商品
	const product = mockProduct

	if (!product) return <div>找不到此商品</div>

	return (
		<div className="product">
			{/* 麵包屑 */}
			<div className="breadcrumb">
				<a href="/">首頁</a>
				<span>›</span>
				<a href="/switch">Switch</a>
				<span>›</span>
				<a href="/switch/console">主機</a>
				<span>›</span>
				<span className="is-current">商品詳情</span>
			</div>
			{/* 商品簡介 */}
			<section className="product__info section">
				<ProductInfo {...product} />
			</section>
			{/* 賣家資訊 */}
			<aside className="product__seller section">
				<div className="top_decorate"></div>
				<SellerInfo {...product.seller} />
				<div className="down_decorate"></div>
			</aside>
			{/* 商品詳細說明 */}
			<section className="product__detail section">
				<ProductDetail reviews={product.reviews} rating={5} reviewCount={1} />
			</section>
			{/* 問與答 */}
			<section className="product__qa section">
				<ProductQa qa={product.qa} />
			</section>
			{/* 你可能有興趣的商品 */}
			<section className="product__recommend section">
				<ProductRecommend items={product.recommendations} />
			</section>
		</div>
	)
}

export default ProductPage
