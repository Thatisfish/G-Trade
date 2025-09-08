import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "../styles/_Sidebar.scss";
import { useEffect, useState } from "react";

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
  };

  // 根據選擇路徑對應顯示文字
  const getLabel = (path) => {
    switch (path) {
      case "/Collect":
        return "📁 收藏清單";
      case "/Orders":
        return "📦 我的訂單";
      case "/":
        return "🎟️ 優惠券匣";
      case "/Real_name":
        return "✅ 實名認證";
      case "/Reviewpage":
        return "💬 客服中心";
      default: return "";
    }
  };
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-menu">
          <li>
            <NavLink to="/Collect" className={({ isActive }) => isActive ? "active" : undefined}>
              <span className="icon">📁</span>
              收藏清單
            </NavLink>
          </li>
          <li>
            <NavLink to="/Orders" className={({ isActive }) => isActive ? "active" : undefined}>
              <span className="icon">📦</span>
              我的訂單
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>
              <span className="icon">🎟️</span>
              優惠券匣
            </NavLink>
          </li>
          <li>
            <NavLink to="/Real_name" className={({ isActive }) => isActive ? "active" : undefined}>
              <span className="icon">✅</span>
              實名認證
            </NavLink>
          </li>
          <li>
            <NavLink to="/Reviewpage" className={({ isActive }) => isActive ? "active" : undefined}>
              <span className="icon">💬</span>
              客服中心
            </NavLink>
          </li>
        </ul>
      </aside>
      <div className="c_phSidebar">
        <div className="c_phSelect" onClick={() => setIsOpen(!isOpen)}>{getLabel(selectPath)}
          <span className="dropdown-arrow">
            {isOpen ? '▲' : '▼'}
          </span>
        </div>
        {isOpen && (
          <ul className="option">
            <li onClick={() => handleSelectChange("/Collect")}>📁 收藏清單</li>
            <li onClick={() => handleSelectChange("/Orders")}>📦 我的訂單</li>
            <li onClick={() => handleSelectChange("/")}>🎟️ 優惠券匣</li>
            <li onClick={() => handleSelectChange("/Real_name")}>✅ 實名認證</li>
            <li onClick={() => handleSelectChange("/Reviewpage")}>💬 客服中心</li>
          </ul>
        )}

      </div>
    </>

  );
};

export default Sidebar;
