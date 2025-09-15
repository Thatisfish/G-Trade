import { useState } from "react";
import Card from '../Card'
import DKB from '../../images/Card_Image/DKB.webp'
import DS2CE from '../../images/Card_Image/DS2CE.webp'
import ps5_pro from '../../images/Card_Image/ps5_pro.webp'
import SWP2 from '../../images/Card_Image/switch_pro2.webp'
import UserImg from '../../images/ProductPage/user.jpg'

const PrCard = () => {
	const [isFav, setIsFav] = useState(false);
	return (
		<div className="abc">
			<div className='o1'>
				<div className='o2'>
					<div className='cain'>
						<a href="#" className='userInfo'>
							<div>
								<img src={UserImg} alt="" className='userImg' />
							</div>
							<div>
								<p className='userName'>paly**56</p>
								<p className='upDate'>3天前</p>
							</div>
						</a>

						<a href="" className='commodityInfo'>
							<div className='comImg'>
								<img src={DKB} alt="" />
							</div>
							<p className='comTitle'>咚奇剛蕉力全開+咚奇剛amiibo</p>
							<p className='comPrice'>NT$800</p>
						</a>
					</div>
					<div className='comHeart'>
						<button
							className={`btn-fav ${isFav ? "active" : ""}`}
							onClick={() => setIsFav(!isFav)}
						>
							<span className="heart"></span>
						</button>
					</div>
				</div>
			</div>
			<div className='o1'>
				<div className='o2'>
					<div className='cain'>
						<a href="#" className='userInfo'>
							<div>
								<img src={UserImg} alt="" className='userImg' />
							</div>
							<div>
								<p className='userName'>paly**56</p>
								<p className='upDate'>3天前</p>
							</div>
						</a>

						<a href="" className='commodityInfo'>
							<div className='comImg'>
								<img src={DKB} alt="" />
							</div>
							<p className='comTitle'>咚奇剛蕉力全開+咚奇剛amiibo</p>
							<p className='comPrice'>NT$800</p>
						</a>
					</div>
					<div className='comHeart'>
						<button
							className={`btn-fav ${isFav ? "active" : ""}`}
							onClick={() => setIsFav(!isFav)}
						>
							<span className="heart"></span>
						</button>
					</div>
				</div>
			</div>
			<div className='o1'>
				<div className='o2'>
					<div className='cain'>
						<a href="#" className='userInfo'>
							<div>
								<img src={UserImg} alt="" className='userImg' />
							</div>
							<div>
								<p className='userName'>paly**56</p>
								<p className='upDate'>3天前</p>
							</div>
						</a>

						<a href="" className='commodityInfo'>
							<div className='comImg'>
								<img src={DKB} alt="" />
							</div>
							<p className='comTitle'>咚奇剛蕉力全開+咚奇剛amiibo</p>
							<p className='comPrice'>NT$800</p>
						</a>
					</div>
					<div className='comHeart'>
						<button
							className={`btn-fav ${isFav ? "active" : ""}`}
							onClick={() => setIsFav(!isFav)}
						>
							<span className="heart"></span>
						</button>
					</div>
				</div>
			</div>
			<div className='o1'>
				<div className='o2'>
					<div className='cain'>
						<a href="#" className='userInfo'>
							<div>
								<img src={UserImg} alt="" className='userImg' />
							</div>
							<div>
								<p className='userName'>paly**56</p>
								<p className='upDate'>3天前</p>
							</div>
						</a>

						<a href="" className='commodityInfo'>
							<div className='comImg'>
								<img src={DKB} alt="" />
							</div>
							<p className='comTitle'>咚奇剛蕉力全開+咚奇剛amiibo</p>
							<p className='comPrice'>NT$800</p>
						</a>
					</div>
					<div className='comHeart'>
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

const Inforcard = () => {
	const arrCardinfor = [
		{
			id: 1,
			// tag: '全新上架',
			image: DKB,
			title: '咚奇剛蕉力全開+咚奇剛amiibo',
			seller: 'paly**56',
			priceNow: '800',
			size: 'small'
		},
		{
			id: 2,
			tag: '全新上架',
			image: DS2CE,
			title: '死亡擱淺典藏版',
			seller: 'Ds2CE**250626',
			priceNow: '1100',
			size: 'medium'
		},
		{
			id: 3,
			tag: '限時優惠',
			image: ps5_pro,
			title: 'PS5 PRO主機 1TB 極致黑',
			seller: 'Ssp**5',
			priceNow: '9999',
			priceOld: '15000',
			size: 'large'
		},
		{
			id: 4,
			tag: '限時優惠',
			image: SWP2,
			title: 'PS5 PRO主機 1TB 極致黑',
			seller: 'fun31**56',
			priceNow: '5000',
			priceOld: '5500',
			size: 'medium'
		},
	]
	return (
		<div className="container">
			{arrCardinfor.map((cardinfor) => (
				<Card
					key={cardinfor.id}
					tag={cardinfor.tag}
					image={cardinfor.image}
					title={cardinfor.title}
					seller={cardinfor.seller}
					priceNow={cardinfor.priceNow}
					priceOld={cardinfor.priceOld}
					size={cardinfor.size}
				/>
			))}
		</div>
	)
}

const ProductRecommend = () => {
	return (
		<div className='recommend'>
			<p className='recommend_title'>你可能有興趣的商品</p>
			{/* <Inforcard /> */}
			<PrCard />
			<div className='recommend_btn'>
				<button className='btn'>更多商品</button>
			</div>
		</div>
	)
}

export default ProductRecommend