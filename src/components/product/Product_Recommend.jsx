import { useState } from "react";
import Card from '../Card'
import DKB from '../../images/Card_Image/DKB.webp'
import DS2CE from '../../images/Card_Image/DS2CE.webp'
import ps5_pro from '../../images/Card_Image/ps5_pro.webp'
import SWP2 from '../../images/Card_Image/switch_pro2.webp'
import UImg from '../../images/ProductPage/user.jpg'

const PrCard = ({ userImg, userName, upDate, commodityImage, commodityTitle, commodityPrice }) => {
	const [isFav, setIsFav] = useState(false);

	return (
		<div className="abc">
			<div className="o1">
				<div className="o2">
					<div className="cain">
						<a href="#" className="userInfo">
							<div>
								<img src={userImg} alt="" className="userImg" />
							</div>
							<div>
								<p className="userName">{userName}</p>
								<p className="upDate">{upDate}</p>
							</div>
						</a>

						<a href="" className="commodityInfo">
							<div className="comImg">
								{/* {tag && <div className="info-tag">全新上架</div>} */}
								<img src={commodityImage} alt="" />
							</div>
							<p className="comTitle">{commodityTitle}</p>
							<p className="comPrice">NT${commodityPrice}</p>
						</a>
					</div>

					<div className="comHeart">
						<button
							className={`btn-fav ${isFav ? "active" : ""}`}
							onClick={() => setIsFav(!isFav)}
						>
							<span className="heart"></span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

// 多張卡片
const Inforcard = () => {
	const arrCardinfor = [
		{
			id: 1,
			userImg: UImg,
			userName: 'paly**56',
			upDate: '3天前',
			commodityImage: DKB,
			commodityTitle: '咚奇剛蕉力全開+咚奇剛amiibo',
			commodityPrice: '800',
		},
		{
			id: 2,
			userImg: UImg,
			userName: 'Ds2CE**250626',
			upDate: '3天前',
			commodityImage: DS2CE,
			commodityTitle: '死亡擱淺典藏版',
			commodityPrice: '1100',
		},
		{
			id: 3,
			userImg: UImg,
			userName: 'Ssp**5',
			upDate: '3天前',
			commodityImage: ps5_pro,
			commodityTitle: 'PS5 PRO主機 1TB 極致黑',
			commodityPrice: '9999',
		},
		{
			id: 4,
			userImg: UImg,
			userName: 'fun31**56',
			upDate: '3天前',
			commodityImage: SWP2,
			commodityTitle: 'Switch 2全新主機',
			commodityPrice: '5000',
		},
	]

	return (
		<div className="containerPrCard">
			{arrCardinfor.map((card) => (
				<PrCard
					key={card.id}
					userImg={card.userImg}
					userName={card.userName}
					upDate={card.upDate}
					commodityImage={card.commodityImage}
					commodityTitle={card.commodityTitle}
					commodityPrice={card.commodityPrice}
				/>
			))}
		</div>
	)
}

const ProductRecommend = () => {
	return (
		<div className='recommend'>
			<p className='recommend_title'>你可能有興趣的商品</p>
			<Inforcard />
			{/* <PrCard /> */}
			<div className='recommend_btn'>
				<button className='btn'>更多商品</button>
			</div>
		</div>
	)
}

export default ProductRecommend