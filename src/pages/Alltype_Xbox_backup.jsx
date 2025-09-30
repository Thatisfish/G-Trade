import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
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
import banner02 from '../images/Alltype_Xbox/Alltype_Xbox_banner04.avif'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Paginations from "../components/Pagination.jsx"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
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

                    </Swiper>
                </div>

                <div className='B_itemTitles'>
                    <Link className='B_itemTitle' to="/Alltype">Switch</Link>
                    <p className='B_name'>Xbox</p>
                    <Link className='B_itemTitle' to="/Alltype_PS">PS系列</Link>
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

export default Alltype_Xbox