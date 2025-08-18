import '../styles/_AllTypeCards.scss'

const AllTypeCards = ({ tag, image, title, seller, priceNow, priceOld, size }) => {
    return (
        <div className={`B_info-card ${size}`}>
            {tag && <div className="B_info-tag">{tag}</div>}
            <img src={image} alt={title} className="B_info-img" />
            <div className="B_info-content">
                <h3 className="B_info-title">{title}</h3>
                <p className="B_info-seller">@{seller}</p>
                <div className="B_info-price">
                    <span className="B_price-now">NT$ {priceNow}</span>
                    {priceOld && <span className="B_price-old">NT$ {priceOld}</span>}
                </div>
            </div>
        </div>
    )
}
export default AllTypeCards