import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, FreeMode, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import '../styles/inforcard.scss'
import Card from '../components/Card'

import DKB from '../images/Card_Image/DKB.webp'
import DS2CE from '../images/Card_Image/DS2CE.webp'
import ps5_pro from '../images/Card_Image/ps5_pro.webp'
import SWP2 from '../images/Card_Image/switch_pro2.webp'
import SW2 from '../images/Card_Image/switch2.webp'
import Hollow from '../images/Card_Image/Hollow.webp'
import flower from '../images/Card_Image/flower.webp'

const arrCardinfor = [
	{ id: 1, image: DKB, title: '咚奇剛蕉力全開+咚奇剛amiibo', seller: 'paly**56', priceNow: '800', size: 'small' },
	{ id: 2, tag: '全新上架', image: DS2CE, title: '死亡擱淺典藏版', seller: 'Ds2CE**250626', priceNow: '1100', size: 'medium' },
	{ id: 3, tag: '限時優惠', image: ps5_pro, title: 'PS5 PRO主機 1TB 極致黑', seller: 'Ssp**5', priceNow: '9999', priceOld: '15000', size: 'large' },
	{ id: 4, tag: '', image: SWP2, title: 'PS5 PRO主機 1TB 極致黑', seller: 'fun31**56', priceNow: '5000', priceOld: '5500', size: 'medium' },
	{ id: 5, tag: '限時優惠', image: SW2, title: 'PS5 PRO主機 1TB 極致黑', seller: 'fun31**56', priceNow: '5000', priceOld: '5500', size: 'small' },
	{ id: 6, tag: '', image: Hollow, title: 'PS5 PRO主機 1TB 極致黑', seller: 'fun31**56', priceNow: '5000', priceOld: '5500', size: 'small' },
	{ id: 7, tag: '限時優惠', image: flower, title: 'PS5 PRO主機 1TB 極致黑', seller: 'fun31**56', priceNow: '5000', priceOld: '5500', size: 'small' },
]

export default function Inforcard() {
	return (
		<div className="inforcard-wrap">
			<Swiper
				modules={[Autoplay, FreeMode, A11y]}
				className="inforcard-swiper inforcard-swiper--marquee"
				loop={true}                              // 無限循環(loop)
				slidesPerView="auto"                     // 寬由 CSS 控制
				spaceBetween={40}                        // 間距
				freeMode={{ enabled: true, momentum: true, sticky: false }} // 自由拖拉(freeMode)
				autoplay={{
					delay: 0,                             // 0=連續播放
					disableOnInteraction: false,          // 互動後繼續
					pauseOnMouseEnter: true               // 滑入暫停
				}}
				speed={1000}                            // 越大越慢、越平穩
				grabCursor={true}                        // 滑鼠游標抓手
			>
				{arrCardinfor.map(card => (
					<SwiperSlide key={card.id}>
						<Card
							tag={card.tag}
							image={card.image}
							title={card.title}
							seller={card.seller}
							priceNow={card.priceNow}
							priceOld={card.priceOld}
							size={card.size}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
