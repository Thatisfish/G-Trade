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
                <a href="./index.html">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                </a>
                <ul className="menu">
                    <li><a href="">最新消息</a></li>
                    <li><a href="">熱門商品</a></li>
                    <li><a href="">Switch</a></li>
                    <li><a href="">PS系列</a></li>
                    <li><a href="">Xbox系列</a></li>
                </ul>
                <ul className="nav-icon">
                    <li><a className="icon-search" href="#"></a></li>
                    <li><a className="icon-Shopping_cart" href="#"></a></li>
                    <li><a className="icon-login" href="#"></a></li>
                    <li><a className="icon-hamburger" href="#"></a></li>
                </ul>
            </nav>
        </header>
    );
}
