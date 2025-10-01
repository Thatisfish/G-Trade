// App.jsx
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate, Navigate } from "react-router-dom";
import { HelmetProvider } from "@dr.pogodin/react-helmet";
import { Suspense, lazy } from "react";
import FloatChat, { ChatProvider } from "./components/FloatChat";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login"; // login（登入）元件
import HamburgerMenu from "./components/HamburgerMenu";
import SearchPage from "./pages/SearchPage";


// Home 保持同步載入（首頁一定會用到）
import Home from "./pages/Home";

// 其餘頁面改用 lazy（延遲載入，英文：lazy loading）
const New_info = lazy(() => import("./pages/New_info"));
const AlltypePage = lazy(() => import("./pages/AlltypePage"));
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
const Newspages = lazy(() => import("./pages/Newspages"));
const Coupon = lazy(() => import("./pages/Coupon"));
const Content = lazy(() => import("./pages/Content"));
const AllNotify = lazy(() => import("./pages/AllNotify"));

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

	// ✅ 支援 /#newup 這種 hash（雜湊）錨點的平滑滾動
	useEffect(() => {
		if (!location.hash) return;
		const tryScroll = () => {
			const hash = location.hash; // 例如 "#newup"
			const el = document.querySelector(hash) || document.querySelector(`.${hash.slice(1)}`);
			if (el) el.scrollIntoView({ block: "center" });
		};
		const t = setTimeout(tryScroll, 60);
		return () => clearTimeout(t);
	}, [location]);

	const openLogin = () => setShowLogin(true);
	const closeLogin = () => setShowLogin(false);
	const goRegister = () => {
		setShowLogin(false);
		navigate("/Register");
	};

	// 🔥 作法 A：啟動後「空閒時間預抓」頁面模組（prefetch）
	useEffect(() => {
		const warmup = () => {
			Promise.all([
				import("./pages/New_info"),
				import("./pages/AlltypePage"),
				import("./pages/Register"),
				import("./pages/Shopping_cart"),
				import("./pages/Collect"),
				import("./pages/RealN_Info"),
				import("./pages/Package"),
				import("./pages/Real_name"),
				import("./pages/Orders"),
				import("./pages/Coupon"),
				import("./pages/Reviewpage"),
				import("./pages/Content"),
				import("./pages/ProductPage"),
				import("./pages/Escrow_Info"),
				import("./pages/ListingGuideline"),
				import("./pages/Newspages"),
				import("./pages/AllNotify"),
			]).catch(() => {
				// 靜默失敗即可
			});
		};
		if ("requestIdleCallback" in window) {
			window.requestIdleCallback(warmup, { timeout: 2000 });
		} else {
			const t = setTimeout(warmup, 2000);
			return () => clearTimeout(t);
		}
	}, []);

	return (
		<>
			<ChatProvider>
				<HelmetProvider>
					<Navbar theme={theme} onOpenLogin={openLogin} />

					<div className={isHome ? "home-bg" : ""}>
						{!isHome && <div className="red-banner"></div>}
						{showLogin && <Login onClose={closeLogin} onRegister={goRegister} />}

						<ScrollToTop />

						{/* 用 Suspense（暫掛）提供載入中的 fallback（後備畫面） */}
						<Suspense fallback={<div className="page-loading">載入中…</div>}>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/New_info" element={<New_info />} />
								<Route path="/alltype" element={<Navigate to="/alltype/switch/all" replace />} />
								<Route path="/alltype/:platform" element={<AlltypePage />} />
								<Route path="/alltype/:platform/:category" element={<AlltypePage />} />
								<Route path="/Shopping_cart" element={<Shopping_cart />} />
								<Route path="/Register" element={<Register />} />
								<Route path="/Collect" element={<Collect />} />
								<Route path="/Real_name" element={<Real_name />} />
								<Route path="/RealN_Info" element={<RealN_Info />} />
								<Route path="/Package" element={<Package />} />
								<Route path="/Orders" element={<Orders />} />
								<Route path="/Coupon" element={<Coupon />} />
								<Route path="/search" element={<SearchPage />} />
								<Route path="/Reviewpage" element={<Reviewpage />} />
								<Route path="/Content" element={<Content />} />
								{/* ✅ 動態商品頁（dynamic product page） */}
								<Route path="/product/:id" element={<ProductPage />} />
								{/* 其他頁面 */}
								<Route path="/Escrow_Info" element={<EscrowInfo />} />
								<Route path="/ListingGuideline" element={<ListingGuideline />} />
								<Route path="/hamburgerMenu" element={<HamburgerMenu />} />
								<Route path="/Newspages" element={<Newspages />} />
								<Route path="/AllNotify" element={<AllNotify />} />
							</Routes>
						</Suspense>

						<Footer theme={theme} onOpenLogin={openLogin} />
						<FloatChat />
					</div>
				</HelmetProvider>
			</ChatProvider>
		</>
	);
}
