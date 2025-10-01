import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/_Sidebar.scss";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaTicketAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { AiFillCustomerService } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";

const MENU = [
	{ path: '/AllNotify', label: "所有通知", icon: <HiSpeakerphone /> },
	{ path: '/Collect', label: "收藏清單", icon: <FaHeart /> },
	{ path: '/Orders', label: "我的訂單", icon: <FaCartShopping /> },
	{ path: '/Coupon', label: "優惠券匣", icon: <FaTicketAlt /> },
	{ path: '/Real_name', label: "實名認證", icon: <FaCheckCircle /> },
	{ path: '/Content', label: "客服中心", icon: <AiFillCustomerService /> },
];

const Sidebar = () => {
	const navigate = useNavigate();
	const location = useLocation();

	// 初始化選單狀態
	const [selectPath, setSelectPath] = useState(location.pathname); // 目前選擇的路徑
	const [isOpen, setIsOpen] = useState(false);

	// 路徑變化同步選單文字
	useEffect(() => {
		setSelectPath(location.pathname); // 更新選擇狀態
	}, [location.pathname]);  // 目前網址的路徑

	// 點選單導頁並收合
	const handleSelectChange = (path) => {
		setSelectPath(path); // 更新選擇狀態
		navigate(path);      // 導到選擇的那一頁
		setIsOpen(false);
	};

	return (
		<>
			<aside className="sidebar">
				<ul className="sidebar-menu">
					{MENU.map((item) => (
						<li key={item.path}>
							<NavLink
								to={item.path}
								className={({ isActive }) => (isActive ? "active" : undefined)}
							>
								<span className="icon">{item.icon}</span>
								{item.label}
							</NavLink>
						</li>
					))}
				</ul>
			</aside>
			<div className="c_phSidebar">
				<div className="c_phSelect" onClick={() => setIsOpen(!isOpen)}>
					{MENU.find((item) => item.path === selectPath)?.icon}{""}
					{MENU.find((item) => item.path === selectPath)?.label}
					<span className="dropdown-arrow">
						{isOpen ? '▲' : '▼'}
					</span>
				</div>
				{isOpen && (
					<ul className="option">
						{MENU.map((item) => (
							<li key={item.path} onClick={() => handleSelectChange(item.path)}>
								{item.icon}{item.label}
							</li>
						))}
					</ul>
				)}

			</div>
		</>

	);
};

export default Sidebar;
