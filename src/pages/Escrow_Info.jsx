import '../styles/_Escrow_Info.scss'
import OuterFrame from '../components/OuterFrame'
import B_ESImg1 from '../images/EscrowInfo/Es_Img1.avif'
import B_ESImg2 from '../images/EscrowInfo/Es_Img2.avif'
import B_ESImg3 from '../images/EscrowInfo/Es_Img3.webp'
import B_ESImg4 from '../images/EscrowInfo/Es_Img4.avif'
import B_ESImg5 from '../images/EscrowInfo/Es_Img5.avif'
import B_ESImg6 from '../images/EscrowInfo/Es_Img6.avif'
import B_ESImg7 from '../images/EscrowInfo/Es_Img7.avif'
import B_ESImg8 from '../images/EscrowInfo/Es_Img8.avif'
import B_ESImg9 from '../images/EscrowInfo/Es_Img9.webp'
import B_ESImg10 from '../images/EscrowInfo/Es_Img10.webp'
import { Helmet } from '@dr.pogodin/react-helmet'

const Escrow_Info = () => {
	return (
		<>
			<Helmet>
				<title>遊玩人間市集 ｜ 第三方支付 </title>
				<meta name="description" content="歡迎來到遊玩人間市集，探索各式二手遊戲商品。" />
			</Helmet>
			<main className='B_EsMain'>
				<section className="B_EsSec">
					<div className='B_EsTitle'>
						<div className='B_EsTitle01'>
							<h2>第三方<span>支付</span> </h2>
							<small>Third-party payment</small>
						</div>

						<p className='B_EsP'>確保雙方資金安全，避免詐騙或糾紛！</p>
					</div>
					<div className='B_EsIntro'>
						<p>為了保障雙方權益，買家在平臺進行交易時，款項不會直接從買家流向賣家，而是先由獨立的第三方支付機構代為保管，確保買家收到商品無誤後，才將款項撥付給賣家，避免交易糾紛與詐騙風險。</p>
						<img className='B_EsImg1' src={B_ESImg1} alt="" />
					</div>
				</section>

				<section className="B_EsSec2">
					<h2 className='B_EsH2'>關於第三方撥款</h2>
					<div className='B_EsItem'>
						<img className='B_EsImgF' src={B_ESImg2} alt="" />
						<OuterFrame textClass='B_EsF' text="買家下單並完成付款" />
						<img className='B_EsImgS' src={B_ESImg3} alt="" />
					</div>
					<img className='B_EsArrow1' src={B_ESImg9} alt='' />
					<div className='B_EsItem'>
						<img className='B_EsImgF up' src={B_ESImg4} alt="" />
						<img className='B_EsImg2' src={B_ESImg5} alt="" />
						<OuterFrame textClass='B_EsF' text="平台暫時保管款項" />
						<img className='B_EsImgF down' src={B_ESImg4} alt="" />
					</div>
					<img className='B_EsArrow2' src={B_ESImg10} alt='' />
					<div className='B_EsItem'>
						<img className='B_EsImgF' src={B_ESImg6} alt="" />
						<OuterFrame textClass='B_EsF' text="買家確認收貨" />
						<img className='B_EsImgS' src={B_ESImg7} alt="" />
					</div>
					<img className='B_EsArrow3' src={B_ESImg9} alt='' />
					<div className='B_EsItem2'>
						<img className='B_EsImgS payUp' src={B_ESImg8} alt="" />
						<OuterFrame textClass='B_EsF' text="平台將款項撥付賣家" />
						<img className='B_EsImgS payDown' src={B_ESImg8} alt="" />
						<p>※如遇商品爭議，可透過客服中心提出申訴 。</p>
					</div>
				</section>
			</main>
		</>
	)
}

export default Escrow_Info