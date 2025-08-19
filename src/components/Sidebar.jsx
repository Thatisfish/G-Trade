import "../styles/_Sidebar.scss"


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="sidebar-menu">
        <li className="active">
          <span className="icon">📁</span>
          收藏清單
        </li>
        <li>
          <span className="icon">📦</span>
          我的訂單
        </li>
        <li>
          <span className="icon">🎟️</span>
          優惠券匣
        </li>
        <li>
          <span className="icon">✅</span>
          實名認證
        </li>
        <li>
          <span className="icon">💬</span>
          客服中心
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;