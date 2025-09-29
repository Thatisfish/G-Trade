// Coupon.jsx
import Sidebar from '../components/Sidebar';
import CouponCard from '../components/CouponCard'; 
import '../styles/Coupon.scss'

// 確保也載入了卡片樣式，如果你還沒在其他地方載入的話
// import '../styles/_CouponCard.scss'; 

// 模擬優惠券資料 (保持不變)
const COUPON_DATA = [
    { id: 1, title: '新用戶限定', discount: '全館79折', code: '9527', validFrom: '2025-09-15', validTo: '2025-10-15' },
    { id: 2, title: '限時特惠', discount: '滿千折百', code: 'SAVE100', validFrom: '2025-09-29', validTo: '2025-10-05' },
    { id: 3, title: '會員專屬', discount: '免運優惠', code: 'FREE520', validFrom: '2025-09-01', validTo: '2025-10-31' },
];


const Coupon = () => {
  return (
    <main>
        {/* 外層容器：新增一個 class 名稱 */}
        <div className="y_coupon-page-layout"> 
            
            {/* 左側：側邊欄 (保持不變) */}
            <Sidebar/>
            
            {/* 右側：優惠券列表容器 (使用 class 名稱) */}
            <div className="y_coupon-list-container"> 
                
                <div className='y_coupon_card_box'>
                {/* 使用 map 迴圈渲染多張優惠券卡片 */}
                {COUPON_DATA.map(coupon => (
                    <CouponCard 
                        key={coupon.id}
                        title={coupon.title}
                        discount={coupon.discount}
                        code={coupon.code}
                        validFrom={coupon.validFrom}
                        validTo={coupon.validTo}
                    />
                ))}

                </div>
            </div>
        </div>
    </main>
  );
};

export default Coupon;