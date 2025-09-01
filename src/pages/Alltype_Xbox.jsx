import '../styles/_Alltype_Xbox.scss'
import { useMemo, useState } from 'react';
import Banner from '../images/Alltype_Xbox/Alltype_Xbox_banner01.avif'
import AllTypeCards from '../components/AllTypeCards.jsx'
import item11 from '../images/Alltype_Xbox/Alltype_Xbox_item01.avif'
import item12 from '../images/Alltype_Xbox/Alltype_Xbox_item02.avif'
import item13 from '../images/Alltype_Xbox/Alltype_Xbox_item03.avif'
import item14 from '../images/Alltype_Xbox/Alltype_Xbox_item04.avif'
import item15 from '../images/Alltype_Xbox/Alltype_Xbox_item05.avif'
import item16 from '../images/Alltype_Xbox/Alltype_Xbox_item10.avif'
import item17 from '../images/Alltype_Xbox/Alltype_Xbox_item06.avif'
import item18 from '../images/Alltype_Xbox/Alltype_Xbox_item07.avif'
import item19 from '../images/Alltype_Xbox/Alltype_Xbox_item09.avif'

const arrCardinfor = [
    {
        id: 11,
        tag: '全新上架',
        category: '遊戲',
        image: item11,
        title: '《Halo Infinite》 中文版',
        seller: 'halo117**000911',
        priceNow: '790',
        size: 'medium'
    },
    {
        id: 12,
        tag: '限時優惠',
        category: '主機',
        image: item12,
        title: 'Xbox Series X（1TB）含原廠手把',
        seller: 'xseries**882712',
        priceNow: '11900',
        size: 'large'
    },
    {
        id: 13,
        tag: '',
        category: '遊戲',
        image: item13,
        title: '極限競速 地平線5（Forza Horizon 5）',
        seller: 'forzah5**991122',
        priceNow: '950',
        size: 'small'
    },
    {
        id: 14,
        tag: '',
        category: '配件',
        image: item14,
        title: '二手 Xbox 無線控制器（碳黑）',
        seller: 'xpad**553309',
        priceNow: '780',
        size: 'small'
    },
    {
        id: 15,
        tag: '',
        category: '配件',
        image: item15,
        title: 'Xbox 官方充電組 + 電池組',
        seller: 'xcharge**340981',
        priceNow: '550',
        size: 'small'
    },
    {
        id: 16,
        tag: '',
        category: '遊戲',
        image: item16,
        title: '惡靈古堡 4 重製版（Xbox版）',
        seller: 're4x**778812',
        priceNow: '980',
        size: 'medium'
    },
    {
        id: 17,
        tag: '全新上架',
        category: '主機',
        image: item17,
        title: 'Xbox Series S 數位版主機',
        seller: 'xss**245566',
        priceNow: '7990',
        size: 'large'
    },
    {
        id: 18,
        tag: '',
        category: '配件',
        image: item18,
        title: 'Elite Series 2 專業手把（盒裝）',
        seller: 'elite2**093232',
        priceNow: '3450',
        size: 'medium'
    },
    {
        id: 19,
        tag: '',
        category: '遊戲',
        image: item19,
        title: '決勝時刻：現代戰爭II',
        seller: 'codmw2**651019',
        priceNow: '890',
        size: 'small'
    }

];

const TABS = ['全部', '主機', '遊戲', '配件'];

const Alltype_Xbox = () => {
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
                    <img className='B_ban' src={Banner} alt="banner" />
                </div>

                <p className='B_name'>PS系列</p>
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
                </div>

                <div className='B_item'>
                    {filtered.map(item => (
                        <AllTypeCards key={item.id} {...item} />
                    ))}
                </div>

                <div className='B_pages'>1 2 3 4 5 6</div>
            </div >
        </>
    )
}

export default Alltype_Xbox