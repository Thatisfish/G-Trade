import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_HamburgerMenu.scss';


const HamburgerMenu = ({ isOpen, onClose, onOpenLogin }) => {

	// ESC 鍵關閉選單
	useEffect(() => {
		const handleEscKey = (e) => {
			if (e.key === 'Escape' && isOpen) {
				onClose();
			}
		};

		const originalOverflow = document.body.style.overflow;

		if (isOpen) {
			document.addEventListener('keydown', handleEscKey);
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = originalOverflow || '';
		}

		return () => {
			document.removeEventListener('keydown', handleEscKey);
			document.body.style.overflow = originalOverflow || '';
		};
	}, [isOpen, onClose]);


	// 點擊遮罩關閉
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	// 點擊連結後關閉選單
	const handleLinkClick = () => {
		onClose();
	};



	return (
		<>
			{/* 彈窗遮罩 */}
			<div
				className={`modalOverlay ${isOpen ? 'active' : ''}`}
				onClick={handleOverlayClick}
			></div>

			{/* 彈窗選單 */}
			<div className={`modal ${isOpen ? 'active' : ''}`}>
				<button
					className="closeBtn"
					onClick={onClose}
					aria-label="關閉選單"
				>
					&times;
				</button>

				<div className="menuContent">
					<ul className="menu">
						<li className="menuItem">
							<Link to="/" className="menuLink" onClick={handleLinkClick}>
								首頁
							</Link>

						</li>
						<li className="menuItem">
							<Link to="/New_info" className="menuLink" onClick={handleLinkClick}>
								最新消息
							</Link>

						</li>
						<li className="menuItem">
							<Link to="/#newup" className="menuLink" onClick={handleLinkClick}>
								熱門商品
							</Link>

						</li>
						<li className="menuItem">
							<Link to="/Shopping_cart" className="menuLink" onClick={handleLinkClick}>
								購物車
							</Link>

						</li>
						<li className="menuItem">
							<button
								type="button"
								className="menuLink icon-member" // 如果要沿用原本的樣式，這邊保留 menuLink
								onClick={() => {
									onClose();      // 先關掉漢堡選單
									onOpenLogin();  // 再打開登入彈窗
								}}
								aria-label="會員登入"
							>
								會員中心
							</button>
						</li>
						<li className="menuItem2">
							<div className='menuTitle'><a className="menuLink">平台特色</a>
							</div>
							<div className="submenu">
								<Link to="#" className="menu_item_item" onClick={handleLinkClick}>
								</Link>
								<Link to="/Package" className="menu_item_item" onClick={handleLinkClick}>包裝指南</Link>
								<Link to="/RealN_info" className="menu_item_item" onClick={handleLinkClick}>實名登錄</Link>
								<Link to="/Escrow_Info" className="menu_item_item" onClick={handleLinkClick}>第三方支付</Link>
								<Link to="/ListingGuideline" className="menu_item_item" onClick={handleLinkClick}>上架規範</Link>
							</div>
						</li>
					</ul>

					<ul className="menu">
						<li className="menuItem2">
							<Link to="/alltype/Switch" className='menuLink' onClick={handleLinkClick}>Switch</Link>
						</li>
						<li className="menuItem2">
							<Link to="/alltype/PS" className="menuLink" onClick={handleLinkClick}>PS系列</Link>
						</li>
						<li className="menuItem2">
							<Link to="/alltype/Xbox" className="menuLink" onClick={handleLinkClick}>Xbox系列</Link>
						</li>
					</ul >
				</div >
			</div >
		</>
	);
};

export default HamburgerMenu;