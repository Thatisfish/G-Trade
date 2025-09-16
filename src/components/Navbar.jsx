// Navbar.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Navbar.scss';
import Logo from '../images/logo_white.avif';
import BellPopover from './Navbar/BellPopover'
import Cart from '../images/icon/icon-Shopping_cart_gray.svg'
import Home from '../images/icon/icon-home_gray.svg'
import Bell from '../images/icon/icon_bell_gray.svg'
import Member from '../images/icon/icon-member_gray.svg'
import HamburgerMenu from './HamburgerMenu';

export default function Navbar({ theme, onOpenLogin }) {
	const [scrolled, setScrolled] = useState(false);
	const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

	useEffect(() => {
		const el = document.body; // ✅ 你的情況是 body 在滾動
		if (!el) return;

		const handleScroll = () => {
			setScrolled(el.scrollTop > 0);
		};

		// 初始化判斷一次
		handleScroll();

		el.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll);

		return () => {
			el.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, []);

	const handleHamburgerToggle = () => {
		setIsHamburgerOpen(!isHamburgerOpen);
	};

	const handleHamburgerClose = () => {
		setIsHamburgerOpen(false);
		// 選單關閉後重新檢查滾動位置
		setTimeout(() => {
			setScrolled(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0);
		}, 10);
	};

	return (
		<>
			<header id="topbar">
				<nav className={`navigation ${theme} ${scrolled ? 'scrolled' : ''}`}>
					<Link to="/">
						<div className="logo shadow-img">
							<img src={Logo} alt="logo" />
						</div>
					</Link>

					<ul className="menu">
						<li><Link to="/New_info">最新消息</Link></li>
						<li><Link to="/ProductPage">熱門商品</Link></li>
						<li><Link to="/Alltype">Switch</Link></li>
						<li><Link to="/Alltype_PS">PS系列</Link></li>
						<li><Link to="/Alltype_Xbox">Xbox系列</Link></li>
					</ul>

					<ul className="nav-icon">
						<li className="shadow-img"><Link className="icon-search" to="/#" /></li>
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
							<BellPopover />  {/* ✅ 替代原本的 <Link className="icon-bell" /> */}
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
			<header className={`mobile-nav ${theme}`}>
				<div className="mobile-nav__container">

					<div className="icon-logo mobile-icon">
						<Link to="/#">
							<img src={Logo} alt="" />
						</Link>
					</div>
					<div className="mobile-nav__search">
						<input
							type="text"
							placeholder="搜尋商品..."
							className="mobile-nav__search-input"
						/>
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
			<nav className="mobile-bottom-nav">
				<Link to="/"><img src={Home} alt="" />首頁</Link>
				{/* <Link to="/Notice"><img src={Bell} alt="" />通知</Link> */}
				<Link to="/Shopping_cart"><img src={Cart} alt="" />購物車</Link>
				<button
					type="button"
					className="icon-mobile-member"
					onClick={onOpenLogin}
					aria-label="會員中心"
				><img src={Member} alt="會員中心" />會員中心</button>
				{/* <Link to="/Customer"><img src={Member} alt="" />顧客中心</Link> */}
			</nav>

			{/* 漢堡選單 */}
			<HamburgerMenu
				isOpen={isHamburgerOpen}
				onClose={handleHamburgerClose}
			/>
		</>
	);
}