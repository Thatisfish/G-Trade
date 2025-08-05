import '../styles/Home.css'
import G from '../assets/G.png'
import A from '../assets/A.png'
import M from '../assets/M.png'
import E from '../assets/E.png'
import Slogan from '../assets/slogan1.svg'
export default function Home() {
    return (
        <main>
            <div className="hero-section">
                {/* （包含整段標語） */}
                <img className="hero-text" src={Slogan} alt="slogan" />
                {/* 文字圖檔 */}
                <div className="game-letters">
                    <img src={G} alt="G" className="letter g" />
                    <img src={A} alt="A" className="letter a" />
                    <img src={M} alt="M" className="letter m" />
                    <img src={E} alt="E" className="letter e" />
                </div>

                {/* 小 icon 裝飾 */}
                <img className="hero-icon icon-star" src="./IMAGES/icon-star.svg" alt="" />
                <img className="hero-icon icon-cart" src="icon-cart.png" alt="" />
                {/* 其他裝飾圖 */}
            </div>
        </main>
    );
}