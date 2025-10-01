import '../styles/Home.scss'
import { Link, useNavigate } from 'react-router-dom';
import InforCard from '../components/Inforcard'
import G from '../images/home/G.webp'
import A from '../images/home/A.webp'
import M from '../images/home/M.webp'
import E from '../images/home/E.webp'
import HPP from '../images/HomePageP.webp'
import Switch from '../images/switch.webp'
import HomeNews from '../components/HomeNewsSection'
import hand from '../images/home/hand.webp'
import special01 from '../images/home/special01.svg'
import special02 from '../images/home/special02.svg'
import special03 from '../images/home/special03.svg'
import special04 from '../images/home/special04.svg'
import ArrowLeft from '../images/home/arrow-left.svg';
import ArrowDown from '../images/home/arrow-down.svg';
import { Helmet } from '@dr.pogodin/react-helmet';
import { useState } from 'react';

export default function Home() {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);

	const goPlatform = (platform) => {
		setShowModal(false); // 關閉彈窗
		navigate(`/alltype/${platform}/all`);
	};
	return (
		<>
			<Helmet>
				<title>遊玩人間市集 ｜ 首頁 </title>
				<meta name="description" content="歡迎來到遊玩人間市集，探索各式二手遊戲商品。" />
			</Helmet>
			<main>
				<div className='bodd'>
					<div className="hero-section">
						{/* （包含整段標語） */}
						{/* <img className="hero-text1" src={Slogan1} alt="slogan" />
					<img className="hero-text2" src={Slogan2} alt="slogan" /> */}

						{/* 文字圖檔 */}
						<div>
							<div className="hero-text">
								<span className="small-text">找主機，不用再比價比命運</span>
								<p>買得放心，玩的開心，就在這裡</p>
							</div>
							<div className="hero-mask"></div>
							<div className="game-letters-scale">
								<div className="game-letters">
									<img src={G} alt="G" className="letter g" />
									<img src={A} alt="A" className="letter a" />
									<img src={M} alt="M" className="letter m" />
									<img src={E} alt="E" className="letter e" />
								</div>
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
					<div id="newup" className='newup'>
						<h2 className="section-title">熱門商品</h2>
						<InforCard />
						<button className="view-all-button"
							onClick={() => setShowModal(true)}>
							查看所有商品</button>
						{/* Modal 懸浮視窗 */}
						{showModal && (
							<div className="modal-overlay" onClick={() => setShowModal(false)}>
								<div className="modal-content" onClick={(e) => e.stopPropagation()}>
									<div className="platform-cards">
										<div className="platform-card" onClick={() => goPlatform("Switch")}>
											<div className='c_imgBox'><img src="/src/images/ProductPage/SidePicture2.jpg" alt="" />
											</div><p>Switch</p>
										</div>
										<div className="platform-card" onClick={() => goPlatform("PS")}>
											<div className='c_imgBox'><img src="/src/images/Alltype_PS/Alltype_PS_item09.avif" alt="" />
											</div><p>PS系列</p>
										</div>
										<div className="platform-card" onClick={() => goPlatform("Xbox")}>
											<div className='c_imgBox'><img src="/src/images/Alltype_Xbox/Alltype_Xbox_item06.avif" alt="" />
											</div><p>Xbox</p>
										</div>
									</div>
									<button className="close-btn" onClick={() => setShowModal(false)}>關閉</button>
								</div>
							</div>
						)}
					</div>
					<div className='special'>
						{/* 左邊的手 */}
						<img className="hand" src={hand} alt="" />
						{/* 二手商品字樣 */}
						<svg className="headline-svg"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="-10 0 700 200"
							height="200"
							preserveAspectRatio="xMinYMid meet">
							<text x="0" y="100" fontSize="48" fontWeight="700"
								fill="none" stroke="#fff" strokeWidth="10"
								strokeLinejoin="round" strokeLinecap="round">
								二手商品也能安心購入
							</text>
							<text x="0" y="100" fontSize="48" fontWeight="700" fill="#000">
								二手商品也能安心購入
							</text>
						</svg>

						{/* 四個區塊 */}
						<div className="special-cards">
							<Link to="/Package" className="card c1"><img src={special01} alt="包裝宣導" /></Link>
							<Link to="/RealN_Info" className="card c2"><img src={special02} alt="實名制" /></Link>
							<div className="detail-hint c3">
								<img src={ArrowLeft} alt="左箭頭" className="arrow left" />
								<span className="hint-text">點擊了解詳細</span>
								<img src={ArrowDown} alt="下箭頭" className="arrow down" />
							</div>
							<div className="empty c4"></div> {/* 左下空格 */}
							<Link to="/Escrow_Info" className="card c5"><img src={special03} alt="第三方撥款" /></Link>
							<Link to="/ListingGuideline" className="card c6"><img src={special04} alt="商品狀態標示" /></Link>
						</div>
						{/* 背景們 */}
						<div className='clippath'>
						</div>
						<div className='clippath2'>
						</div>
					</div>
					<div className='news'>
						<h2 className="section-title-n">最新消息</h2>
						<div className='news-main'>
							<HomeNews />
						</div>
					</div>
				</div>
				<div
					dangerouslySetInnerHTML={{
						__html: `
			<!--
			                        _oo0oo_
			                       o8888888o
			                       88" . "88
			                       (| -_- |)
			                      0\\  =  /0
			                    ___/\\---'\\___
			                  .' \\\\|     |// '.
			                 / \\\\|||  :  |||// \\
			                / _||||| -:- |||||-   \\
			               |   | \\\\\\  -  /// |   |
			               | \\_|  ''\\---/''  |_/ |
			               \\  .-\\__  '-'  ___/-. /
			             ___'. .'  /--.--\\  \`. .'___
			          ."" '<  \`.___\\_<|>_/___.' >' "".
			         | | :  \`- \`.;\`\\ _ /\\\`.;\`/ - \` : | |
			         \\  \\ \`_.   \\_ __\\ /__ _/   .-\` /  /
			     =====\`-.____\`.___ \\_____/___.-\`___.-'=====
			                       \`=---='

			               佛祖保佑         永無BUG
			-->
			`
					}}
				/>
			</main>
		</>
	);
}
