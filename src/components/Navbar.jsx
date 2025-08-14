import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../styles/Navbar.scss';
import Logo from '../images/logo.png';

export default function Navbar({ theme }) {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.pageYOffset !== 0);
		};
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
					<div className="shadow-img">
						<li><a className="icon-search" href="#"></a></li>
					</div>
					<div className="shadow-img">
						<li><Link className="icon-Shopping_cart" to="/Shopping_cart"></Link></li>
					</div>
					<div className="shadow-img">
						<li><Link className="icon-member" to="/Register"></Link></li>
					</div>
					<div className="shadow-img">
						<li><Link className="icon-bell" to="/Collect"></Link></li>
					</div>
					<div className="shadow-img">
						<li><Link className="icon-hamburger" to="#"></Link></li>
					</div>
				</ul>
			</nav>
		</header>
	);
}
