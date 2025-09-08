import { NavLink } from "react-router-dom";
import "../styles/_Sidebar.scss";

const Sidebar = () => {
  return (
    <>
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
      <aside>
        <select name="" id="">
          <option value="/collect">📁收藏清單</option>
          <option value="/Orders">📦我的訂單</option>
          <option value="/">🎟️優惠券匣</option>
          <option value="/Real_name">✅實名認證</option>
          <option value="/Reviewpage">💬客服中心</option>
        </select>
      </aside>
    </>

  );
};

export default Sidebar;
