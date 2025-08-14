import '../styles/Footer_Red.scss'
export default function Footer() {
    return (
        <footer>
            <nav>
                <ul className="sitemap">
                    <li><a href="./index.html" className="sitemap-f">最新消息</a></li>
                    <li>
                        <a href="" className="sitemap-f">商品總覽</a>
                        {/* 子選單 */}
                        <ul>
                            <li><a href="#">Switch</a></li>
                            <li><a href="#">PS系列</a></li>
                            <li><a href="#">Xbox系列</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="" className="sitemap-f">會員中心</a>
                        {/* 子選單 */}
                        <ul>
                            <li><a href="#">買家中心</a></li>
                            <li><a href="#">賣家中心</a></li>
                            <li><a href="#">註冊會員</a></li>
                        </ul>
                    </li>
                    <li><a href="" className="sitemap-f">關於我們</a></li>
                    <li>
                        <a className="sitemap-f">聯絡我們</a>
                        <ul>
                            <li>Phone：0800-916-666</li>
                            <li>Email： support@playmarket.tw</li>
                            <li>客服時間： 週一~週五 10:30~20:00</li>
                        </ul>
                    </li>

                </ul>
            </nav>
            <small className="Copyright">Copyright &copy; 2025遊玩人間市集・僅供課堂展示用途</small>
        </footer>
    );
}