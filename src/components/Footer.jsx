import { Link } from 'react-router-dom'
import '../styles/Footer.scss'

export default function Footer({ theme = 'red' }) {
	return (
		<footer className={`footer ${theme}`}>
			<nav>
				<ul className="sitemap">
					<li><Link to="/New_info" className="sitemap-f">最新消息</Link></li>
					<li>
						<Link to="/Alltype" className="sitemap-f">商品總覽</Link>
						<ul>
							<li><Link to="/Alltype">Switch</Link></li>
							<li><Link to="/Alltype">PS系列</Link></li>
							<li><Link to="/Alltype">Xbox系列</Link></li>
						</ul>
					</li>
					<li>
						<Link to="/Register" className="sitemap-f">會員中心</Link>
						<ul>
							<li><Link to="/BuyerCenter">買家中心</Link></li>
							<li><Link to="/SellerCenter">賣家中心</Link></li>
							<li><Link to="/Register">註冊會員</Link></li>
						</ul>
					</li>
					<li><Link to="/About" className="sitemap-f">關於我們</Link></li>
					<li className='about'>
						<span className="sitemap-f">聯絡我們</span>
						<ul>
							<li>Phone：0800-916-666</li>
							<li>Email：support@playmarket.tw</li>
							<li>客服時間：週一~週五 10:30~20:00</li>
						</ul>
					</li>
				</ul>
			</nav>
			<small className="Copyright">
				Copyright © 2025 遊玩人間市集・僅供課堂展示用途
			</small>
		</footer>
	)
}
