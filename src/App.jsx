// App.jsx
import { useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login"; // 你的 login 元件

import Home from './pages/Home';
import New_info from './pages/New_info';
import Hot_commodity from './pages/Hot_commodity';
import Alltype from './pages/Alltype';
import Register from './pages/Register';
import Shopping_cart from './pages/Shopping_cart';
import Collect from './pages/Collect';
import RealN_Info from './pages/RealN_Info';
import Package from './pages/Package';
import Real_name from './pages/Real_name'
import ScrollToTop from './js/ScrollToTop';
import Orders from './pages/Orders';
import Reviewpage from './pages/Reviewpage';
import ProductPage from './pages/ProductPage'

export default function App() {
	const { pathname } = useLocation();
	const isHome = pathname === "/";
	const theme = isHome ? "light" : "red";

	const [showLogin, setShowLogin] = useState(false);
	const navigate = useNavigate();

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
					<Route path="/Shopping_cart" element={<Shopping_cart />} />
					<Route path="/Register" element={<Register />} />
					<Route path="/Collect" element={<Collect />} />
					<Route path='/Real_name' element={<Real_name />} />
					<Route path='/RealN_Info' element={<RealN_Info />} />
					<Route path='/Package' element={<Package />} />
					<Route path='/Orders' element={<Orders />} />
					<Route path='/Reviewpage' element={<Reviewpage />} />
					<Route path='/ProductPage' element={<ProductPage />} />
				</Routes>

				<Footer theme={theme} />
			</div>
		</>
	);
}
