import '../styles/inforcard.css'
export default function Inforcard({ tag, image, title, seller, priceNow, priceOld }) {
	return (
		<div className="info-card">
			<div className="info-tag">{tag}</div>
			<img src={image} alt={title} className="info-img" />
			<div className="info-content">
				<h3 className="info-title">{title}</h3>
				<p className="info-seller">@{seller}</p>
				<div className="info-price">
					<span className="price-now">NT$ {priceNow}</span>
					<span className="price-old">NT$ {priceOld}</span>
				</div>
			</div>
		</div>
	);
}
