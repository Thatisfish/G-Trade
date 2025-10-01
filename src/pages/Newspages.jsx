import { useNavigate } from 'react-router-dom';
import "../styles/_Newspages.scss"
import banner01 from "../images/Newspages/banner.avif"
import { Helmet } from '@dr.pogodin/react-helmet';

const Newspages = () => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);

	};
	return (
		<>
			<Helmet>
				<title>遊玩人間市集 ｜ 暑假遊戲入手祭，全館免運開跑！ </title>
				<meta name="description" content="歡迎來到遊玩人間市集，探索各式二手遊戲商品。" />
			</Helmet>
			<section className="newPages">
				<div className="newsPagesHeader">
					<img src={banner01} alt="暑假遊戲入手祭橫幅" />
					<div className="newsPagesTitle">
						<h2>暑假遊戲入手祭，全館免運開跑！</h2>
						<span className="newsPagesDate">發布日期: 2025.09.27</span>
					</div>
				</div>

				<div className="newsPagesBody">
					<div className="newsPContents">
						<div className="newsPagesDescription">
							<p className="newsP">
								暑假就是要玩遊戲玩到爽！<br /><br />
								即日起至 9/30，只要在本平台購買任一商品（不論是主機、遊戲片，還是周邊配件），通通享有「全館免運費」優惠！
								不僅讓你輕鬆入手二手好物，還能省下運費成本，買得安心又划算。<br /><br />
								無論是剛加入的新玩家，還是想補完收藏的老玩家，現在都是最佳入手時機！
								快來挖寶，讓遊戲生活升級無負擔！
							</p>
						</div>

						<div className="newsPagesInfo">
							<div className="eventDate">
								<h3>活動時間</h3>
								<div className="eventDateDetails">
									<p><span className="eventDateLabel">開始:</span> 2025年9月16日</p>
									<p><span className="eventDateLabel">結束:</span> 2025年9月30日</p>
								</div>
							</div>

							<div className="eventNotice">
								<h3>注意事項</h3>
								<ul className="eventNoticeList">
									<li>每筆訂單限使用一次免運優惠</li>
									<li>僅限台灣本島地區使用</li>
									<li>平台保有活動最終解釋與調整權利</li>
								</ul>
							</div>
						</div>

						<div className="newsPagesActions">
							<button className="newsPagesBtn newsPagesBtn--secondary" onClick={handleGoBack}>返回消息列表</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Newspages