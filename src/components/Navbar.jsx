import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

import '../styles/Navbar.css';
import Logo from '../images/logo.png';

export default function Header() {
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
            <nav className={`navigation ${scrolled ? 'scrolled' : ''}`}>
                <Link to="/">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                </Link>
                <ul className="menu">
                    <li><Link to="/New_info">最新消息</Link></li>
                    <li><Link to="/Hot_commodity">熱門商品</Link></li>
                    <li><Link to="/Switch">Switch</Link></li>
                    <li><Link to="/Ps">PS系列</Link></li>
                    <li><Link to="/Xbox">Xbox系列</Link></li>
                </ul>
                <ul className="nav-icon">
                    <div class="shadow-img">
                        <li><a className="icon-search" href="#"></a></li>
                    </div>
                    <div class="shadow-img">
                        <li><a className="icon-Shopping_cart" href="#"></a></li>
                    </div>
                    <div class="shadow-img">
                        <li><a className="icon-member" href="#"></a></li>
                    </div>
                    <div class="shadow-img">
                        <li><a className="icon-bell" href="#"></a></li>
                    </div>
                    <div class="shadow-img">
                        <li><a className="icon-hamburger" href="#"></a></li>
                    </div>
                </ul>
            </nav>
        </header>
    );
}
