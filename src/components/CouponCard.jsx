import '../styles/_CouponCard.scss'; 

const CouponCard = ({ title, discount, code, validFrom, validTo }) => {
    // 格式化有效期限
    const period = `${validFrom} - ${validTo}`;

    return (
        // 使用 className 來套用 CSS 樣式
        <div className="coupon-card">
            
            {/* 左側紅色標籤區塊 */}
            <div className="coupon-card-tag">
                <span className="coupon-text">優惠券</span>
            </div>
            
            {/* 右側內容區塊 */}
            <div className="coupon-card-content">
                <h3 className="coupon-title">{title}</h3>
                <h1 className="coupon-discount">{discount}</h1>
                <p className="coupon-info">
                    結帳時輸入折扣碼 **{code}**
                </p>
                <p className="coupon-period">
                    使用期限 : {period}
                </p>
            </div>

        </div>
    );
};

export default CouponCard;