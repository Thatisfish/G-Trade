import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/_HamburgerMenu.scss';
import { FaArrowAltCircleDown, FaArrowAltCircleRight } from "react-icons/fa";

const HamburgerMenu = ({ isOpen, onClose }) => {

    // ESC 鍵關閉選單
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'hidden'; // 防止背景滾動
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('keydown', handleEscKey);
            document.body.style.overflow = 'auto';
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

    if (!isOpen) return null; // 不顯示時直接返回 null

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
                            <FaArrowAltCircleRight />
                        </li>
                        <li className="menuItem">
                            <Link to="/New_info" className="menuLink" onClick={handleLinkClick}>
                                最新消息
                            </Link>
                            <FaArrowAltCircleRight />
                        </li>
                        <li className="menuItem">
                            <Link to="/ProductPage" className="menuLink" onClick={handleLinkClick}>
                                熱門商品
                            </Link>
                            <FaArrowAltCircleRight />
                        </li>
                        <li className="menuItem">
                            <Link to="/Shopping_cart" className="menuLink" onClick={handleLinkClick}>
                                購物車
                            </Link>
                            <FaArrowAltCircleRight />
                        </li>
                        <li className="menuItem">
                            <Link to="/Customer" className="menuLink" onClick={handleLinkClick}>
                                會員中心
                            </Link>
                            <FaArrowAltCircleRight />
                        </li>
                    </ul>

                    <ul className="menu">
                        <li className="menuItem2">
                            <div className='menuTitle'><a className="menuLink">Switch</a>
                                <FaArrowAltCircleDown />
                            </div>

                            <div className="submenu">
                                <Link to="/Alltype" className="menu_item_item" onClick={handleLinkClick}>
                                </Link>
                                <a href="#" className="menu_item_item">主機</a>
                                <a href="#" className="menu_item_item">遊戲</a>
                                <a href="#" className="menu_item_item">配件</a>
                            </div>
                        </li>
                        <li className="menuItem2">
                            <a className="menuLink">PS系列</a>
                            <FaArrowAltCircleDown />
                            <div className="submenu">
                                <Link to="/Alltype_PS" className="menu_item_item" onClick={handleLinkClick}>
                                </Link>
                                <a href="#" className="menu_item_item">主機</a>
                                <a href="#" className="menu_item_item">遊戲</a>
                                <a href="#" className="menu_item_item">配件</a>
                            </div>
                        </li>
                        <li className="menuItem2">
                            <a className="menuLink">Xbox系列</a>
                            <FaArrowAltCircleDown />
                            <div className="submenu">
                                <Link to="/Alltype_Xbox" className="menu_item_item" onClick={handleLinkClick}>
                                </Link>
                                <a href="#" className="menu_item_item">主機</a>
                                <a href="#" className="menu_item_item">遊戲</a>
                                <a href="#" className="menu_item_item">配件</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default HamburgerMenu;