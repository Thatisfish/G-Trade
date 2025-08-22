import { Link } from "react-router-dom";
import "../styles/_Sidebar.scss"


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="active">
          <Link>
            <span className="icon">📁</span>
            收藏清單
          </Link>
        </li>
        <li>
          <Link>
            <span className="icon">📦</span>
            我的訂單
          </Link>
        </li>
        <li>
          <Link>
            <span className="icon">🎟️</span>
            優惠券匣
          </Link>
        </li>
        <li>
          <Link to="/Real_name">
            <span className="icon">✅</span>
            實名認證
          </Link>
        </li>
        <li>
          <Link>
            <span className="icon">💬</span>
            客服中心
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;