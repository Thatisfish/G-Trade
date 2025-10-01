// Navbar.jsx
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import '../styles/Navbar.scss';
import Logo_w from '../images/logo_white.avif';
import Logo_r from '../images/logo_red.avif';
import BellPopover from './Navbar/BellPopover'
import Cart from '../images/icon/icon-Shopping_cart_gray.svg'
import Home from '../images/icon/icon-home_gray.svg'
import Member from '../images/icon/icon-member_gray.svg'
import HamburgerMenu from './HamburgerMenu';

export default function Navbar({ theme, onOpenLogin }) {
	// ── 既有狀態 ─────────────────────────────────────────────
	const [scrolled, setScrolled] = useState(false);
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
	const location = useLocation();
	const isDetailRoute = location.pathname.startsWith('/ProductPage');
	const [isFavorite, setIsFavorite] = useState(false);

	const [lte640, setLte640] = useState(() => window.matchMedia('(max-width: 640px)').matches);
	useEffect(() => {
		const mq = window.matchMedia('(max-width: 640px)');
		const onChange = e => setLte640(e.matches);
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	}, []);
	const showDetailBar = isDetailRoute && lte640;

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			setScrolled(scrollY > 0);
		};

		handleScroll(); // 初始化一次
		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	const handleHamburgerToggle = () => setIsHamburgerOpen(!isHamburgerOpen);
	const handleHamburgerClose = () => {
		setIsHamburgerOpen(false);
		setTimeout(() => {
			setScrolled(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0);
		}, 10);
	};

	// ── 新增：電腦版搜尋展開/送出 ─────────────────────────────
	const navigate = useNavigate();
	const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
	const [desktopSearch, setDesktopSearch] = useState('');
	const inputRef = useRef(null);

	const openSearch = () => {
		setDesktopSearchOpen(true);
		// 下一個 repaint 再 focus 比較保險
		requestAnimationFrame(() => inputRef.current?.focus());
	};

	const closeSearch = () => {
		setDesktopSearchOpen(false);
		setDesktopSearch('');
	};

	const handleDesktopSubmit = (e) => {
		e.preventDefault();
		const q = desktopSearch.trim();
		if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
		closeSearch();
	};

	// Esc 關閉；路由改變時也關閉
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === 'Escape') closeSearch();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, []);
	useEffect(() => {
		closeSearch();
	}, [location.pathname, location.search]);

	return (
		<>
			<header id="topbar">
				<nav className={`navigation ${theme} ${scrolled ? 'scrolled' : ''}`}>
					<Link to="/">
						<div className="logo shadow-img">
							<img
								src={theme === 'light' ? Logo_w : Logo_r}
								alt="logo"
							/>
						</div>
					</Link>

					<ul className="menu">
						<li><Link to="/New_info">最新消息</Link></li>
						<li><Link to="/#newup">熱門商品</Link></li>
						<li><Link to="/alltype/Switch">Switch</Link></li>
						<li><Link to="/alltype/PS">PS系列</Link></li>
						<li><Link to="/alltype/Xbox">Xbox</Link></li>
					</ul>

					<ul className="nav-icon">
						{/* ── 電腦版搜尋（點圖示展開，往左長出來） ── */}
						<li className={`desktop-search ${desktopSearchOpen ? 'is-open' : ''}`}>
							<form className="desktop-search__form" onSubmit={handleDesktopSubmit}>
								<button
									type="button"
									className="desktop-search__toggle icon-search"
									aria-label="開啟搜尋"
									onClick={openSearch}
								/>
								<input
									ref={inputRef}
									type="text"
									className="desktop-search__input"
									placeholder="搜尋商品名稱…"
									value={desktopSearch}
									onChange={(e) => setDesktopSearch(e.target.value)}
									onBlur={() => {
										// 若輸入中就不要立刻收起；這裡採寬鬆策略：blur 直接關
										closeSearch();
									}}
								/>
								<button type="submit" className="desktop-search__submit" aria-label="送出搜尋" />
							</form>
						</li>

						<li className="shadow-img"><Link className="icon-Shopping_cart" to="/Shopping_cart" /></li>
						<li className="shadow-img">
							<button
								type="button"
								className="icon-member"
								onClick={onOpenLogin}
								aria-label="會員登入"
							/>
						</li>
						<li className="shadow-img">
							<BellPopover />
						</li>
						<li className="shadow-img">
							<button
								type="button"
								className="icon-hamburger"
								onClick={handleHamburgerToggle}
								aria-label="選單"
							/>
						</li>
					</ul>
				</nav>
			</header>

			{/* 手機版 topbar：原樣（保留你原本的輸入框與 Bell/Hamburger） */}
			<header className={`mobile-nav ${theme}`}>
				<div className="mobile-nav__container">
					<div className="icon-logo mobile-icon">
						<Link to="/#">
							<img
								src={theme === 'light' ? Logo_r : Logo_w}
								alt="logo"
							/>
						</Link>
					</div>
					<div className="mobile-nav__search">
						<input type="text" placeholder="搜尋商品..." className="mobile-nav__search-input" />
						<div className="icon-search mobile-icon">
							<Link to="/#" />
						</div>
					</div>
					<div className="icon-notice mobile-icon">
						<BellPopover />
					</div>
					<div className="icon-hamburger mobile-icon">
						<button
							type="button"
							className="hamburger-btn"
							onClick={handleHamburgerToggle}
							aria-label="選單"
						/>
					</div>
				</div>
			</header>

			<nav className={`mobile-bottom-nav ${showDetailBar ? 'detail' : ''}`}>
				{showDetailBar ? (
					<>
						<button
							className={`btn-favorite ${isFavorite ? "active" : ""}`}
							onClick={() => setIsFavorite(!isFavorite)}
						>
							{isFavorite ? <FaHeart className="icon-heart" /> : <FaRegHeart className="icon-heart" />}
							<span>收藏</span>
						</button>
						<Link to="/Shopping_cart" className='btn-cart'><img src={Cart} alt="" />購物車</Link>
						<div className='mbnd'>
							<button className="btn-add-cart">加入購物車</button>
							<button className="btn-buy-now">立即購買</button>
						</div>
					</>
				) : (
					<>
						<Link to="/"><img src={Home} alt="" />首頁</Link>
						<Link to="/Shopping_cart"><img src={Cart} alt="" />購物車</Link>
						<button
							type="button"
							className="icon-mobile-member"
							onClick={onOpenLogin}
							aria-label="會員中心"
						><img src={Member} alt="會員中心" />會員中心</button>
					</>
				)}
			</nav>

			{/* 漢堡選單 */}
			<HamburgerMenu
				isOpen={isHamburgerOpen}
				onClose={handleHamburgerClose}
				onOpenLogin={onOpenLogin}
			/>
		</>
	);
}
