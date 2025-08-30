import '../styles/_Alltype.scss'
import { useMemo, useState } from 'react';
import Banner from '../images/banner_pokemon.avif'
import AllTypeCards from '../components/AllTypeCards.jsx'
import DKB from '../images/Card_Image/DKB.webp'
import DS2CE from '../images/Card_Image/DS2CE.webp'
// import ps5_pro from '../images/Card_Image/ps5_pro.webp'
import SWP2 from '../images/Card_Image/switch_pro2.webp'
import SW2 from '../images/Card_Image/switch2.webp'
import SWB from '../images/Card_Image/item_switch01.avif'

const arrCardinfor = [
	{
		id: 1,
		// tag: '全新上架',
		image: DKB,
		category: '遊戲',
		title: '咚奇剛蕉力全開+咚奇剛amiibo',
		seller: 'paly**56',
		priceNow: '800',
		size: 'small'
	},
	{
		id: 2,
		tag: '全新上架',
		category: '遊戲',
		image: DS2CE,
		title: '死亡擱淺典藏版',
		seller: 'Ds2CE**250626',
		priceNow: '1100',
		size: 'medium'
	},
	{
		id: 3,
		tag: '限時優惠',
		category: '主機',
		image: SWB,
		title: '九成新 Switch主機 黑色版',
		seller: 'Ssp**5',
		priceNow: '9999',
		priceOld: '15000',
		size: 'large'
	},
	{
		id: 4,
		tag: '限時優惠',
		category: '配件',
		image: SWP2,
		title: 'switch 手把 公司貨 九成新 可面交',
		seller: 'fun31**56',
		priceNow: '5000',
		priceOld: '5500',
		size: 'medium'
	},
	{
		id: 5,
		tag: '限時優惠',
		category: '主機',
		image: SW2,
		title: '全新紅藍switch主機 附明星大亂鬥遊戲片全新紅藍switch主機 附明星大亂鬥遊戲片',
		seller: 'fun31**56',
		priceNow: '5000',
		priceOld: '5500',
		size: 'small'
	},
	{
		id: 6,
		tag: '限時優惠',
		category: '配件',
		image: SWP2,
		title: 'switch 手把 公司貨 九成新 可面交',
		seller: 'fun31**56',
		priceNow: '5000',
		priceOld: '5500',
		size: 'medium'
	},
	{
		id: 7,
		tag: '限時優惠',
		image: SW2,
		category: '主機',
		title: '全新紅藍switch主機 附明星大亂鬥遊戲片全新紅藍switch主機 附明星大亂鬥遊戲片',
		seller: 'fun31**56',
		priceNow: '5000',
		priceOld: '5500',
		size: 'small'
	},
	{
		id: 8,
		tag: '全新上架',
		category: '遊戲',
		image: DS2CE,
		title: '死亡擱淺典藏版',
		seller: 'Ds2CE**250626',
		priceNow: '1100',
		size: 'medium'
	},
	{
		id: 9,
		image: DKB,
		category: '遊戲',
		title: '咚奇剛蕉力全開+咚奇剛amiibo',
		seller: 'paly**56',
		priceNow: '800',
		size: 'small'
	},
];

const TABS = ['全部', '主機', '遊戲', '配件'];

const Alltype = () => {
	const [active, setActive] = useState('全部');
	const counts = useMemo(() => {
		return arrCardinfor.reduce(
			(acc, p) => {
				acc['全部']++;
				acc[p.category] = (acc[p.category] || 0) + 1;
				return acc;
			},
			{ 全部: 0, 主機: 0, 遊戲: 0, 配件: 0, }
		);
	}, []);

	// 依當前頁籤篩選
	const filtered = useMemo(() => {
		return active === '全部'
			? arrCardinfor
			: arrCardinfor.filter((p) => p.category === active);
	}, [active]);

	return (
		<>
			{/* <Nav /> */}
			<div className='B_content'>
				<div className='B_banner'>
					<img src={Banner} alt="banner" />
				</div>

				<p className='B_name'>switch</p>
				<div className='B_category' role="tablist" aria-label="商品分類">
					{TABS.map(tab => (
						<button
							key={tab}
							className={`B_Categories ${active === tab ? 'is-active' : ''}`}
							type='button'
							role="tab"
							aria-selected={active === tab}
							onClick={() => setActive(tab)}
						>
							{tab}({counts[tab]})
						</button>
					))}
					{/* <button className='B_Categories' type='button'>主機 ()</button>
          <button className='B_Categories' type='button'>遊戲 ()</button>
          <button className='B_Categories' type='button'>配件 ()</button> */}
				</div>

				<div className='B_item'>
					{arrCardinfor.map(item => (
						<AllTypeCards key={item.id} {...item} />
					))}
				</div>

				<div className='B_pages'>1 2 3 4 5 6</div>
			</div >
		</>
	)
}

export default Alltype