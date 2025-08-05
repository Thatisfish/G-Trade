import '../styles/Navbar.css'
import Logo from '../assets/logo.png'
export default function Header() {
    return (
        <header id="topbar">
            <nav className="navigation">
                <a href="./index.html">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    
                </a>
                <ul className="menu">{/* menu */}
                    <li><a href="">最新消息</a></li>
                    <li><a href="">熱門商品</a></li>
                    <li><a href="">Switch</a></li>
                    <li><a href="">PS系列</a></li>
                    <li><a href="">Xbox系列</a></li>
                </ul>
                <ul className="nav-icon">{/* icon */}
                    <li><input type="text" placeholder="想找什麼?" className="search-bar" /></li>
                    <li><a className="icon-search" href="#"></a></li>
                    <li><a className="icon-Shopping_cart" href="#"></a></li>
                    <li><a className="icon-login" href="#"></a></li>
                </ul>
            </nav>
        </header>
    );
}