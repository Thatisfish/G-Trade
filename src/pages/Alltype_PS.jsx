// import '../styles/_Alltype.scss'
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../images/Alltype_PS/Alltype_PS_banner01.webp'
import AllTypeCards from '../components/AllTypeCards.jsx'
import item02 from '../images/Alltype_PS/Alltype_PS_item03.avif'
import item03 from '../images/Alltype_PS/Alltype_PS_item02.avif'
import item04 from '../images/Alltype_PS/Alltype_PS_item05.avif'
import item05 from '../images/Alltype_PS/Alltype_PS_item06.avif'
import item06 from '../images/Alltype_PS/Alltype_PS_item07.avif'
import item07 from '../images/Alltype_PS/Alltype_PS_item08.avif'
import item08 from '../images/Alltype_PS/Alltype_PS_item09.avif'
import item09 from '../images/Alltype_PS/Alltype_PS_item04.avif'
import item10 from '../images/Alltype_PS/Alltype_PS_item10.avif'
import banner02 from '../images/Alltype_PS/Alltype_PS_banner02.avif'
import banner03 from '../images/Alltype_PS/Alltype_PS_banner03.avif'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Paginations from "../components/Pagination.jsx"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const arrCardinfor = [
    {
        id: 2,
        tag: '全新上架',
        category: '遊戲',
        image: item02,
        title: "《Demon's Souls》重製版",
        seller: 'Ds2CE**250626',
        priceNow: '1100',
        size: 'medium'
    },
    {
        id: 3,
        tag: '限時優惠',
        category: '主機',
        image: item03,
        title: 'PS4 Slim 500GB(二手良品)',
        seller: 'psslim**723158',
        priceNow: '4600',
        size: 'large'
    },
    {
        id: 4,
        tag: '限時優惠',
        category: '主機',
        image: item04,
        title: '九成新PS5附地平線西域禁地遊戲片',
        seller: 'joelTLOU**188812',
        priceNow: '13980',
        size: 'small'
    },
    {
        id: 5,
        tag: '全新上架',
        category: '配件',
        image: item05,
        title: '二手手把 DualShock 4(紅色)',
        seller: 'redpad**914551',
        priceNow: '950',
        size: 'small'
    },
    {
        id: 6,
        tag: '',
        category: '配件',
        image: item06,
        title: 'PS VR 全套組（含攝影機）',
        seller: 'vrbox**330912',
        priceNow: '3200',
        size: 'large'
    },
    {
        id: 7,
        tag: '',
        category: '遊戲',
        image: item07,
        title: '女神異聞錄 5 皇家版',
        seller: 'p5r**008833',
        priceNow: '880',
        size: 'small'
    },
    {
        id: 8,
        tag: '',
        category: '主機',
        image: item08,
        title: '九成新 PlayStation 5 光碟版（全配）',
        seller: 'ps5deal**992244',
        priceNow: '13980',
        size: 'large'
    },
    {
        id: 9,
        tag: '',
        category: '配件',
        image: item09,
        title: '九成新PS4手把',
        seller: 'charge**217600',
        priceNow: '680',
        size: 'small'
    },
    {
        id: 10,
        tag: '',
        category: '遊戲',
        image: item10,
        title: '全新未拆封 戰神：諸神黃昏（中文版）',
        seller: 'godkratos**554421',
        priceNow: '990',
        size: 'medium'
    },
    {
        id: 11,
        tag: '',
        category: '遊戲',
        image: item10,
        title: '全新未拆封 戰神：諸神黃昏（中文版）',
        seller: 'godkratos**554421',
        priceNow: '990',
        size: 'medium'
    },
    {
        id: 12,
        tag: '',
        category: '遊戲',
        image: item10,
        title: '全新未拆封 戰神：諸神黃昏（中文版）',
        seller: 'godkratos**554421',
        priceNow: '990',
        size: 'medium'
    },
    {
        id: 13,
        tag: '',
        category: '遊戲',
        image: item10,
        title: '全新未拆封 戰神：諸神黃昏（中文版）',
        seller: 'godkratos**554421',
        priceNow: '990',
        size: 'medium'
    },
];

const TABS = ['全部', '主機', '遊戲', '配件'];

const Alltype_PS = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 12;
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

    // 計算總頁數
    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

    // 依照當前頁面切片顯示的商品
    const currentItems = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filtered.slice(startIndex, endIndex);
    }, [filtered, currentPage]);

    // 處理頁面變更的函數
    const handlePageChange = (page) => {
        setCurrentPage(page);
        // 可選：滾動到商品列表頂部
        document.querySelector('.B_item')?.scrollIntoView({ behavior: 'smooth' });
    };

    // 當切換分類時重置到第一頁
    const handleCategoryChange = (tab) => {
        setActive(tab);
        setCurrentPage(1);
    };

    return (
        <>
            {/* <Nav /> */}
            <div className='B_content'>
                <div className='B_banner'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={Banner} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={banner02} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={banner03} alt="" />
                        </SwiperSlide>

                    </Swiper>
                </div>

                <div className='B_itemTitles'>
                    <Link className='B_itemTitle' to="/Alltype">Switch</Link>
                    <p className='B_name'>PS系列</p>
                    <Link className='B_itemTitle' to="/Alltype_Xbox">Xbox</Link>
                </div>

                <div className='B_category' role="tablist" aria-label="商品分類">
                    {TABS.map(tab => (
                        <button
                            key={tab}
                            className={`B_Categories ${active === tab ? 'is-active' : ''}`}
                            type='button'
                            role="tab"
                            aria-selected={active === tab}
                            onClick={() => handleCategoryChange(tab)}
                        >
                            {tab}({counts[tab]})
                        </button>
                    ))}
                </div>

                <div className='B_item'>
                    {currentItems.map(item => (
                        <AllTypeCards key={item.id} {...item} />
                    ))}
                </div>

                {/* 分頁組件 */}
                {totalPages > 1 && (
                    <Paginations
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                        currentPage={currentPage}
                    />
                )}
            </div >
        </>
    )
}

export default Alltype_PS