// Navbar.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Navbar.scss';
import Logo from '../images/logo.png';

export default function Navbar({ theme, onOpenLogin }) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolled(window.pageYOffset !== 0);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<header id="topbar">
			<nav className={`navigation ${theme} ${scrolled ? 'scrolled' : ''}`}>
				<Link to="/">
					<div className="logo">
						<img src={Logo} alt="logo" />
					</div>
				</Link>

				<ul className="menu">
					<li><Link to="/New_info">最新消息</Link></li>
					<li><Link to="/Hot_commodity">熱門商品</Link></li>
					<li><Link to="/Alltype">Switch</Link></li>
					<li><Link to="/Alltype">PS系列</Link></li>
					<li><Link to="/Alltype">Xbox系列</Link></li>
				</ul>

				<ul className="nav-icon">
					<li className="shadow-img"><Link className="icon-search" to="/Package" /></li>
					<li className="shadow-img"><Link className="icon-Shopping_cart" to="/Shopping_cart" /></li>
					<li className="shadow-img">
						<button
							type="button"
							className="icon-member"
							onClick={onOpenLogin}
							aria-label="會員登入"
						/>
					</li>
					<li className="shadow-img"><Link className="icon-bell" to="/Collect" /></li>
					<li className="shadow-img"><Link className="icon-hamburger" to="/RealN_Info" /></li>
				</ul>
			</nav>
		</header>
	);
}
