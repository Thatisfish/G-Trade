// Navbar.jsx
import { Link, useLocation, useNavigate, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import '../styles/Navbar.scss';
import Logo_w from '../images/logo_white.avif';
import Logo_r from '../images/logo_red.avif';
import BellPopover from './Navbar/BellPopover';
import Cart from '../images/icon/icon-Shopping_cart_gray.svg';
import Home from '../images/icon/icon-home_gray.svg';
import Member from '../images/icon/icon-member_gray.svg';
import HamburgerMenu from './HamburgerMenu';

function getCartCount() {
	try {
		const raw = window.localStorage.getItem('gtrade:cart');
		if (!raw) return 0;
		const data = JSON.parse(raw);
		const items = Array.isArray(data) ? data : (data?.items ?? []);
		return items.reduce((sum, it) => {
			const q = Number(it.qty ?? it.quantity ?? 0);
			return sum + (Number.isFinite(q) ? q : 0);
		}, 0);
	} catch {
		return 0;
	}
}

export default function Navbar({ theme, onOpenLogin }) {
	/* ───────────────────────────
	   既有狀態（state 狀態）
	   ─────────────────────────── */
	const [scrolled, setScrolled] = useState(false);
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const isDetailRoute = location.pathname.startsWith('/ProductPage');
	const [isFavorite, setIsFavorite] = useState(false);
	const [cartCount, setCartCount] = useState(() => getCartCount());

	/* RWD：640 以下顯示細節底部列（bottom bar 底列） */
	const [lte640, setLte640] = useState(() => window.matchMedia('(max-width: 640px)').matches);
	useEffect(() => {
		const mq = window.matchMedia('(max-width: 640px)');
		const onChange = e => setLte640(e.matches);
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	}, []);
	const showDetailBar = isDetailRoute && lte640;

	/* 捲動陰影（scrolled 陰影） */
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY || document.documentElement.scrollTop;
			setScrolled(scrollY > 0);
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	// ── 監聽購物車變化（跨分頁用 storage，同分頁用自訂事件） ───────────
	useEffect(() => {
		const sync = () => setCartCount(getCartCount());

		// 初始同步
		sync();

		// 其他分頁對 localStorage 的變更
		const onStorage = (e) => {
			if (e.key === 'gtrade:cart') sync();
		};

		// 本分頁內部動作（手動派發 'cart:changed'）
		const onCartChanged = () => sync();

		window.addEventListener('storage', onStorage);
		window.addEventListener('cart:changed', onCartChanged);

		return () => {
			window.removeEventListener('storage', onStorage);
			window.removeEventListener('cart:changed', onCartChanged);
		};
	}, []);


	const handleHamburgerToggle = () => setIsHamburgerOpen(!isHamburgerOpen);
	const handleHamburgerClose = () => {
		setIsHamburgerOpen(false);
		setTimeout(() => {
			setScrolled(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0);
		}, 10);
	};

	/* ───────────────────────────
	   電腦版搜尋（desktop search 桌面搜尋）
	   ─────────────────────────── */
	const [desktopSearchOpen, setDesktopSearchOpen] = useState(false);
	const [desktopSearch, setDesktopSearch] = useState('');
	const inputRef = useRef(null);

	const openSearch = () => {
		setDesktopSearchOpen(true);
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
	useEffect(() => {
		const onKey = (e) => {
			if (e.key === 'Escape') closeSearch();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, []);
	useEffect(() => {
		// 只要路由有變化就收起搜尋
		closeSearch();
	}, [location.pathname, location.search]);

	/* ───────────────────────────
	   ScrollSpy（滾動監聽）for #newup
	   目標：只有當 #newup 區塊真的在視口內才高亮，不因為點擊就鎖定
	   ─────────────────────────── */
	const [isHotActive, setIsHotActive] = useState(false);
	const observerRef = useRef(null);

	useEffect(() => {
		// 只在首頁監聽；離開首頁清理並關閉高亮
		if (location.pathname !== '/') {
			setIsHotActive(false);
			if (observerRef.current) {
				observerRef.current.disconnect();
				observerRef.current = null;
			}
			return;
		}

		const target = document.querySelector('#newup');
		if (!target) {
			setIsHotActive(false);
			return;
		}

		observerRef.current = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				setIsHotActive(entry.isIntersecting);
			},
			{
				root: null,
				threshold: 0.3,
				rootMargin: '-85px 0px -20% 0px' // 視專案 navbar 高度調整
			}
		);

		observerRef.current.observe(target);
		return () => {
			observerRef.current?.disconnect();
			observerRef.current = null;
		};
	}, [location.pathname]);

	/* 點擊「熱門商品」的行為 */
	const handleHotClick = (e) => {
		if (location.pathname === '/') {
			e.preventDefault();
			const el = document.getElementById('newup');
			if (el) {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		}
		// 其他頁：正常前往 /#newup
	};

	/* ───────────────────────────
	   手機版搜尋（沿用你原本樣式與結構）
	   ─────────────────────────── */
	const [mobileSearch, setMobileSearch] = useState('');
	const mobileInputRef = useRef(null);

	const handleMobileSubmit = (e) => {
		e.preventDefault();
		const q = mobileSearch.trim();
		if (q) navigate(`/search?q=${encodeURIComponent(q)}`);
	};

	// 路由變動就清空輸入（不動樣式）
	useEffect(() => {
		setMobileSearch('');
	}, [location.pathname, location.search]);

	/* ───────────────────────────
	   Render（渲染）
	   ─────────────────────────── */
	return (
		<>
			<header id="topbar">
				<nav className={`navigation ${theme} ${scrolled ? 'scrolled' : ''}`}>
					<Link to="/">
						<div className="logo shadow-img">
							<img src={theme === 'light' ? Logo_w : Logo_r} alt="logo" />
						</div>
					</Link>

					<ul className="menu">
						<li><NavLink to="/New_info" end>最新消息</NavLink></li>

						{/* 熱門商品：只在區塊進視口時亮，不會因點擊而鎖定 */}
						<li>
							<Link
								to="/#newup"
								onClick={handleHotClick}
								className={isHotActive ? 'is-active' : ''}
							>
								熱門商品
							</Link>
						</li>

						<li><NavLink to="/alltype/Switch">Switch</NavLink></li>
						<li><NavLink to="/alltype/PS">PS系列</NavLink></li>
						<li><NavLink to="/alltype/Xbox">Xbox</NavLink></li>
					</ul>

					<ul className="nav-icon">
						{/* 電腦版搜尋（點圖示展開，往左長出來） */}
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
									onBlur={closeSearch}
								/>
								<button type="submit" className="desktop-search__submit" aria-label="送出搜尋" />
							</form>
						</li>

						<li className="shadow-img">
							<Link className="icon-Shopping_cart has-badge" to="/Shopping_cart" aria-label="購物車">
								{cartCount > 0 && <span className="badge" aria-live="polite">{cartCount}</span>}
							</Link>
						</li>
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

			{/* 手機版 topbar（完全沿用你的 class，不新增樣式） */}
			<header className={`mobile-nav ${theme}`}>
				<div className="mobile-nav__container">
					<div className="icon-logo mobile-icon">
						<Link to="/">
							<img src={theme === 'light' ? Logo_r : Logo_w} alt="logo" />
						</Link>
					</div>

					<form className="mobile-nav__search" onSubmit={handleMobileSubmit} role="search">
						<input
							ref={mobileInputRef}
							type="text"
							placeholder="搜尋商品..."
							className="mobile-nav__search-input"
							value={mobileSearch}
							onChange={(e) => setMobileSearch(e.target.value)}
							autoCapitalize="none"
							autoCorrect="off"
							autoComplete="off"
							enterKeyHint="search"
						/>
						{mobileSearch && (
							<button
								type="button"
								className="mobile-nav__clear"
								onClick={() => setMobileSearch('')}
								aria-label="清除文字"
							/>
						)}
						<button
							type="submit"
							className="icon-search mobile-icon"
							aria-label="送出搜尋"
						/>
					</form>

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

			{/* 手機底部導覽列 */}
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
							<Link to="/Shopping_cart" className="btn-cart">
								<img src={Cart} alt="" />
								購物車
								{cartCount > 0 && <span className="badge">{cartCount}</span>}
							</Link>
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
						>
							<img src={Member} alt="會員中心" />會員中心
						</button>
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
