import '../styles/Home.scss'
import InforCard from '../components/Inforcard'
import G from '../images/G.webp'
import A from '../images/A.webp'
import M from '../images/M.webp'
import E from '../images/E.webp'
import icon_star from '../images/icon-star.svg'
import Slogan from '../images/slogan1.webp'
import HPP from '../images/HomePageP.webp'
import Switch from '../images/switch.svg'
export default function Home() {
    return (
        <main>
            <div className='bodd'>
                <div className="hero-section">
                    {/* （包含整段標語） */}
                    <img className="hero-text" src={Slogan} alt="slogan" />
                    {/* 文字圖檔 */}
                    <div>
                        <div className="game-letters">
                            <img src={G} alt="G" className="letter g" />
                            <img src={A} alt="A" className="letter a" />
                            <img src={M} alt="M" className="letter m" />
                            <img src={E} alt="E" className="letter e" />
                        </div>
                        <div className='bp'>
                            <img src={HPP} alt="P" className='hpb' />
                        </div>
                    </div>

                    {/* 小 icon 裝飾 */}
                    {/* <img className="hero-icon icon-star" src={icon_star} alt="" />
                <img className="hero-icon icon-cart" src="icon-cart.png" alt="" /> */}
                    {/* 其他裝飾圖 */}
                </div>
                <div className='bridge-wrapper'>
                    <div className='bridge'>
                        <div className="circle"></div>
                        <div className='hot'>
                            <h3>近期熱搜</h3>
                            <div className='hot-list'>
                                <p>Nintendo Switch 2</p>
                                <p>寶可夢傳說 Z-A</p>
                                <p>邊緣禁地4</p>
                            </div>
                        </div>
                    </div>
                    <div className="switch-container">
                        <img src={Switch} alt="Switch主機" className="Switch" />
                    </div>
                </div>
                <div className='newup'>
                    <h2 className="section-title">最新上架</h2>
                    <InforCard />
                    <button className="view-all-button">查看所有商品</button>
                </div>
                <div className='infor-card'>

                </div>
                <div className='news'>
                    <h2 className="section-title">最新消息</h2>
                </div>
            </div>
        </main>
    );
}