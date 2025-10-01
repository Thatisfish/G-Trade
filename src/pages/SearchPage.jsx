// src/pages/SearchPage.jsx
import { useLocation } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import AllTypeCards from "../components/AllTypeCards";
import "../styles/SearchPage.scss"; // 你剛剛的 scss

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

export default function SearchPage() {
	const query = useQuery();
	const keyword = query.get("q")?.trim().toLowerCase() || "";

	// 過濾商品標題
	const results = PRODUCTS.filter((p) =>
		p.productTitle.toLowerCase().includes(keyword)
	);

	return (
		<div className="search-page">
			<div className="search-page__inner">
				<div className="search-page__header">
					<div className="title">
						<h2>搜尋結果</h2>
						{keyword && <span className="keyword">{keyword}</span>}
					</div>
					<span className="count">共 {results.length} 筆</span>
				</div>

				{results.length > 0 ? (
					<div className="search-results">
						{results.map((item) => (
							<AllTypeCards
								key={item.id}
								tag={null}
								image={item.thumb}
								title={item.productTitle}
								seller={item.sellerName}
								priceNow={item.salePrice ?? item.originalPrice}
								priceOld={item.salePrice ? item.originalPrice : null}
								size="medium"
								linkTo={`/product/${encodeURIComponent(item.id)}`} // ✅ 點進詳細頁
								ariaLabel={item.productTitle}
							/>
						))}
					</div>
				) : (
					<div className="search-page__empty">
						<p className="msg">沒有找到相符的商品</p>
						<p className="hint">試試其他關鍵字或縮短字詞</p>
					</div>
				)}
			</div>
		</div>
	);
}
