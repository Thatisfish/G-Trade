import { NavLink } from "react-router-dom";
import "../styles/_Sidebar.scss";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <NavLink to="/collect" className={({ isActive }) => isActive ? "active" : undefined}>
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
  );
};

export default Sidebar;
