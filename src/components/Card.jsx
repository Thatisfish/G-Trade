
const Card = ({ tag, image, title, seller, priceNow, priceOld, size }) => {
    return (
        <div className={`info-card ${size}`}>
            {tag && <div className="info-tag">{tag}</div>}
            <img src={image} alt={title} className="info-img" />
            <div className="info-content">
                <h3 className="info-title">{title}</h3>
                <p className="info-seller">@{seller}</p>
                <div className="info-price">
                    <span className="price-now">NT$ {priceNow}</span>
                    {priceOld && <span className="price-old">NT$ {priceOld}</span>}
                </div>
            </div>
        </div>
    )
}
export default Card