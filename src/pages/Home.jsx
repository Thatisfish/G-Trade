import '../styles/Home.css'
import G from '../images/G.webp'
import A from '../images/A.webp'
import M from '../images/M.webp'
import E from '../images/E.webp'
import Slogan from '../images/slogan1.webp'
import HPP from '../images/HomePageP.webp'
export default function Home() {
    return (
        <main>
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
                <img className="hero-icon icon-star" src="./IMAGES/icon-star.svg" alt="" />
                <img className="hero-icon icon-cart" src="icon-cart.png" alt="" />
                {/* 其他裝飾圖 */}
            </div>
        </main>
    );
}