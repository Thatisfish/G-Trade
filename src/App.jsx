// App.jsx
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from './pages/Home';
import New_info from './pages/New_info';
import Hot_commodity from './pages/Hot_commodity';
import Alltype from './pages/Alltype';
import Register from './pages/Register';
import Shopping_cart from './pages/Shopping_cart';
import Collect from './pages/Collect';
import RealN_Info from './pages/RealN_Info';
import Package from './pages/Package';
import ScrollToTop from './js/ScrollToTop';

export default function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const theme = isHome ? "light" : "red"; // 主題控制

  return (
    <>
      <Navbar theme={theme} />

      <div className={isHome ? "home-bg" : ""}>
        <ScrollToTop/>
        <Routes>
          {/* 首頁 */}
          <Route path="/" element={<Home />} />

          {/* 其他頁面 */}
          <Route path="/New_info" element={<New_info />} />
          <Route path="/Hot_commodity" element={<Hot_commodity />} />
          <Route path="/Alltype" element={<Alltype />} />
          <Route path="/Shopping_cart" element={<Shopping_cart />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Collect" element={<Collect />} />
          <Route path='/RealN_Info' element={<RealN_Info />} />
          <Route path='/Package' element={<Package />} />
        </Routes>

        <Footer theme={theme} />
      </div>
    </>
  );
}
