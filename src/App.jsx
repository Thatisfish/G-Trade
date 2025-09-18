// App.jsx
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login"; // 你的 login 元件

// Home 保持同步載入（首頁一定會用到）
import Home from "./pages/Home";

// 其餘頁面改用 lazy（延遲載入，英文：lazy loading）
const New_info = lazy(() => import("./pages/New_info"));
const Hot_commodity = lazy(() => import("./pages/Hot_commodity"));
const Alltype = lazy(() => import("./pages/Alltype"));
const Alltype_PS = lazy(() => import("./pages/Alltype_PS"));
const Alltype_Xbox = lazy(() => import("./pages/Alltype_Xbox"));
const Register = lazy(() => import("./pages/Register"));
const Shopping_cart = lazy(() => import("./pages/Shopping_cart"));
const Collect = lazy(() => import("./pages/Collect"));
const RealN_Info = lazy(() => import("./pages/RealN_Info"));
const Package = lazy(() => import("./pages/Package"));
const Real_name = lazy(() => import("./pages/Real_name"));
const Orders = lazy(() => import("./pages/Orders"));
const Reviewpage = lazy(() => import("./pages/Reviewpage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const EscrowInfo = lazy(() => import("./pages/Escrow_Info"));
const ListingGuideline = lazy(() => import("./pages/ListingGuideline"));
const HamburgerMenu = lazy(() => import("./components/HamburgerMenu"));

import ScrollToTop from "./js/ScrollToTop";

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

	// ✅ 支援 /#newup 這種 hash 錨點的平滑滾動（同頁或跨頁回到 Home 都適用）
	useEffect(() => {
		if (!location.hash) return;

		const tryScroll = () => {
			const hash = location.hash; // 例如 "#newup"
			// 先找 id（#newup），找不到就用 class（.newup）做後備
			const el = document.querySelector(hash) || document.querySelector(`.${hash.slice(1)}`);
			if (el) {
				el.scrollIntoView({ block: "center" });
			}
		};

		// 等當前 Route 完成渲染、避免被 ScrollToTop 搶先置頂
		const t = setTimeout(tryScroll, 60);
		return () => clearTimeout(t);
	}, [location]);

	const openLogin = () => setShowLogin(true);
	const closeLogin = () => setShowLogin(false);
	const goRegister = () => {
		setShowLogin(false);
		navigate("/Register");
	};

	// 🔥 作法 A：啟動後「空閒時間預抓」所有會展示用到的頁面
	useEffect(() => {
		const warmup = () => {
			Promise.all([
				import("./pages/New_info"),
				import("./pages/Hot_commodity"),
				import("./pages/Alltype"),
				import("./pages/Alltype_PS"),
				import("./pages/Alltype_Xbox"),
				import("./pages/Register"),
				import("./pages/Shopping_cart"),
				import("./pages/Collect"),
				import("./pages/RealN_Info"),
				import("./pages/Package"),
				import("./pages/Real_name"),
				import("./pages/Orders"),
				import("./pages/Reviewpage"),
				import("./pages/ProductPage"),
				import("./pages/Escrow_Info"),
				import("./pages/ListingGuideline"),
				import("./components/HamburgerMenu"),
			]).catch(() => {
				// 靜默失敗即可，避免打擾使用者
			});
		};

		if ("requestIdleCallback" in window) {
			// 英文：requestIdleCallback（中文：瀏覽器空閒回呼）
			window.requestIdleCallback(warmup, { timeout: 2000 });
		} else {
			// 後備方案：延遲 2 秒再預抓
			const t = setTimeout(warmup, 2000);
			return () => clearTimeout(t);
		}
	}, []);

	return (
		<>
			<Navbar theme={theme} onOpenLogin={openLogin} />

			<div className={isHome ? "home-bg" : ""}>
				{!isHome && <div className="red-banner"></div>}
				{showLogin && <Login onClose={closeLogin} onRegister={goRegister} />}

				<ScrollToTop />

				{/* 用 Suspense（英文：暫掛）提供載入中的 fallback（中文：後備畫面） */}
				<Suspense fallback={<div className="page-loading">載入中…</div>}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/New_info" element={<New_info />} />
						<Route path="/Hot_commodity" element={<Hot_commodity />} />
						<Route path="/Alltype" element={<Alltype />} />
						<Route path="/Alltype_PS" element={<Alltype_PS />} />
						<Route path="/Alltype_Xbox" element={<Alltype_Xbox />} />
						<Route path="/Shopping_cart" element={<Shopping_cart />} />
						<Route path="/Register" element={<Register />} />
						<Route path="/Collect" element={<Collect />} />
						<Route path="/Real_name" element={<Real_name />} />
						<Route path="/RealN_Info" element={<RealN_Info />} />
						<Route path="/Package" element={<Package />} />
						<Route path="/Orders" element={<Orders />} />
						<Route path="/Reviewpage" element={<Reviewpage />} />
						<Route path="/ProductPage" element={<ProductPage />} />
						<Route path="/Escrow_Info" element={<EscrowInfo />} />
						<Route path="/ListingGuideline" element={<ListingGuideline />} />
						<Route path="/hamburgerMenu" element={<HamburgerMenu />} />
					</Routes>
				</Suspense>

				<Footer theme={theme} onOpenLogin={openLogin} />
			</div>
		</>
	);
}
