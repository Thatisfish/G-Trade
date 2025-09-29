import { Link } from 'react-router-dom'
import '../styles/_CollectCard.scss'

const CollectCard = ({ tag, image, title, seller, priceNow, priceOld, size }) => {
	return (
		<Link to="/y_ProductPage" className={`y_info-card ${size}`}>
			{tag && <div className="y_info-tag">{tag}</div>}
			<img src={image} alt={title} className="y_info-img" />
			<div className="y_info-content">
				<h3 className="y_info-title">{title}</h3>
				<p className="y_info-seller">@{seller}</p>
				<div className="y_info-price">
					<span className="y_price-now">NT$ {priceNow}</span>
					{priceOld && <span className="y_price-old">NT$ {priceOld}</span>}
				</div>
			</div>
		</Link>
	)
}
export default CollectCard