// App.jsx
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login"; // 你的 login 元件

import Home from './pages/Home';
import New_info from './pages/New_info';
import Hot_commodity from './pages/Hot_commodity';
import Alltype from './pages/Alltype';
import Alltype_PS from './pages/Alltype_PS'
import Alltype_Xbox from './pages/Alltype_Xbox';
import Register from './pages/Register';
import Shopping_cart from './pages/Shopping_cart';
import Collect from './pages/Collect';
import RealN_Info from './pages/RealN_Info';
import Package from './pages/Package';
import Real_name from './pages/Real_name'
import ScrollToTop from './js/ScrollToTop';
import Orders from './pages/Orders';
import Reviewpage from './pages/Reviewpage';
import ProductPage from './pages/ProductPage';
import EscrowInfo from './pages/Escrow_Info';
import ListingGuideline from './pages/ListingGuideline'
import HamburgerMenu from './components/HamburgerMenu'

export default function App() {
	const location = useLocation();
	const pathname = location.pathname;
	const isHome = pathname === "/";
	const theme = isHome ? "light" : "red";

	const navigate = useNavigate();
	const [showLogin, setShowLogin] = useState(false);

	useEffect(() => {
		// 判斷別頁是否跳轉並要求打開登入彈窗
		if (location.state?.openLogin) {
			setShowLogin(true);
			setTimeout(() => {
				navigate(location.pathname, { replace: true, state: {} });
			}, 0);
		}
	}, [location, navigate]);
	const openLogin = () => setShowLogin(true);
	const closeLogin = () => setShowLogin(false);
	const goRegister = () => {
		setShowLogin(false);
		navigate("/Register");
	};

	return (
		<>
			<Navbar theme={theme} onOpenLogin={openLogin} />

			<div className={isHome ? "home-bg" : ""}>
				{!isHome && <div className="red-banner"></div>}
				{showLogin && (
					<Login onClose={closeLogin} onRegister={goRegister} />
				)}
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/New_info" element={<New_info />} />
					<Route path="/Hot_commodity" element={<Hot_commodity />} />
					<Route path="/Alltype" element={<Alltype />} />
					<Route path='/Alltype_PS' element={<Alltype_PS />} />
					<Route path='/Alltype_Xbox' element={<Alltype_Xbox />} />
					<Route path="/Shopping_cart" element={<Shopping_cart />} />
					<Route path="/Register" element={<Register />} />
					<Route path="/Collect" element={<Collect />} />
					<Route path='/Real_name' element={<Real_name />} />
					<Route path='/RealN_Info' element={<RealN_Info />} />
					<Route path='/Package' element={<Package />} />
					<Route path='/Orders' element={<Orders />} />
					<Route path='/Reviewpage' element={<Reviewpage />} />
					<Route path='/ProductPage' element={<ProductPage />} />
					<Route path='/Escrow_Info' element={<EscrowInfo />} />
					<Route path='/ListingGuideline' element={<ListingGuideline />} />
					<Route path='/hamburgerMenu' element={<HamburgerMenu />} />
				</Routes>

				<Footer theme={theme} />
			</div>
		</>
	);
}
