// src/components/AllTypeCards.jsx
import { Link } from 'react-router-dom'
import '../styles/_AllTypeCards.scss'

/**
 * AllTypeCards
 * - 傳入 linkTo 時：最外層用 <Link>
 * - 沒傳 linkTo 時：最外層用 <div>
 * - 內部不要再放任何 <Link>/<a>，避免 a 裡面包 a
 */
const AllTypeCards = ({
	tag,
	image,
	title,
	seller,
	priceNow,
	priceOld,
	size = 'medium',
	linkTo,             // 連結目標
	wrapperClass = '',  // 額外 class
	ariaLabel           // 無障礙用 aria-label
}) => {
	const Wrapper = linkTo ? Link : 'div'
	const className = `${wrapperClass} B_info-card ${size}`.trim()
	const wrapperProps = linkTo
		? { to: linkTo, className, 'aria-label': ariaLabel }
		: { className, 'aria-label': ariaLabel }

	return (
		<Wrapper {...wrapperProps}>
			{tag && <div className="B_info-tag">{tag}</div>}
			<img src={image} alt={title} className="B_info-img" />
			<div className="B_info-content">
				<h3 className="B_info-title">{title}</h3>
				{seller && <p className="B_info-seller">@{seller}</p>}
				<div className="B_info-price">
					<span className="B_price-now">NT$ {priceNow}</span>
					{priceOld && <span className="B_price-old">NT$ {priceOld}</span>}
				</div>
			</div>
		</Wrapper>
	)
}

export default AllTypeCards
