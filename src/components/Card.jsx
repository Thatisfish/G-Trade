import { BsDpad } from "react-icons/bs";
import { IoMdRadioButtonOff } from "react-icons/io";

const Card = ({ tag, image, title, seller, priceNow, priceOld, size }) => {
	return (
		<div className={`info-card ${size}`}>
			{tag && <div className="info-tag">{tag}</div>}
			<img src={image} alt={title} className="info-img" />
			<div className="info-content">
				<div className="itsd">
					<div className="its">
						<h3 className="info-title">{title}</h3>
						<p className="info-seller">@{seller}</p>
					</div>
					<div className="decorate">
						<BsDpad size={60} color="#999999" />
						<div className="abbutton">
							<div className="item item-1">
								<IoMdRadioButtonOff color="#999999" className="radio-icon" size={35} />
								<span className="radio-text">B</span>
							</div>
							<div className="item item-2">
								<IoMdRadioButtonOff color="#999999" className="radio-icon" size={35} />
								<span className="radio-text">A</span>
							</div>
						</div>
					</div>
				</div>
				<div className="info-price">
					<span className="price-now">NT$ {priceNow}</span>
					{priceOld && <span className="price-old">NT$ {priceOld}</span>}
				</div>
			</div>
		</div>
	)
}
export default Card