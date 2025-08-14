import '../styles/inforcard.scss'
import Card from '../components/Card'
import DKB from '../images/Card_Image/DKB.webp'
import DS2CE from '../images/Card_Image/DS2CE.webp'
import ps5_pro from '../images/Card_Image/ps5_pro.webp'
import SWP2 from '../images/Card_Image/switch_pro2.webp'
import SW2 from '../images/Card_Image/switch2.webp'


const arrCardinfor = [
	{
		id: 1,
		// tag: '全新上架',
		image: DKB,
		title: '咚奇剛蕉力全開+咚奇剛amiibo',
		seller: 'paly**56',
		priceNow: '800',
		size:'small'
	},
	{
		id: 2,
		tag: '全新上架',
		image: DS2CE,
		title: '死亡擱淺典藏版',
		seller: 'Ds2CE**250626',
		priceNow: '1100',
		size:'medium'
	},
	{
		id: 3,
		tag: '限時優惠',
		image: ps5_pro,
		title: 'PS5 PRO主機 1TB 極致黑',
		seller: 'Ssp**5',
		priceNow: '9999',
		priceOld: '15000',
		size:'large'
	},
	{
		id: 4,
		tag: '限時優惠',
		image: SWP2,
		title: 'PS5 PRO主機 1TB 極致黑',
		seller: 'fun31**56',
		priceNow: '5000',
		priceOld: '5500',
		size:'medium'
	},
	{
		id: 5,
		tag: '限時優惠',
		image: SW2,
		title: 'PS5 PRO主機 1TB 極致黑',
		seller: 'fun31**56',
		priceNow: '5000',
		priceOld: '5500',
		size:'small'
	},
]



const Inforcard = () => {
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

export default Inforcard
