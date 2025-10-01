// src/components/product/product_detail.jsx
import React from "react";

const ProductDetail = ({ detailContent = "" }) => {
	return (
		<div className="detail">
			<div className="detail_title">商品詳細說明</div>
			<div className="detail_content">{detailContent || "—"}</div>
		</div>
	);
};

export default ProductDetail;
