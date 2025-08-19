import React from 'react'
import "../styles/_Sidebar.scss"
// src/components/Sidebar/Sidebar.jsx

const MENU = [
  { key: "y_wishlist", label: "收藏清單", icon: "📌" },
  { key: "y_orders", label: "我的訂單", icon: "🧾" },
  { key: "y_coupons", label: "優惠券匣", icon: "🎟️" },
  { key: "y_verify", label: "實名認證", icon: "🪪" },
  { key: "y_support", label: "客服中心", icon: "💬" },
];

export default function Sidebar({ collapsed = false, activeKey, onSelect }) {
  return (
    <nav
      className={`sidebar ${collapsed ? "is-collapsed" : ""}`}
      aria-label="側邊選單"
    >
      <ul className="sidebar__list">
        {MENU.map((item) => {
          const isActive = activeKey === item.key;
          return (
            <li key={item.key}>
              <button
                type="button"
                className={`sidebar__item ${isActive ? "is-active" : ""}`}
                aria-current={isActive ? "page" : undefined}
                onClick={() => onSelect?.(item.key)}
              >
                <span className="sidebar__icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="sidebar__label">{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}


// export default function Sidebar() {
//   const menu = ['熱門商品', '最新消息', '商品列表', '會員中心'];
//   return (
//     <aside className="sidebar">
//       <ul>
//         {menu.map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </aside>
//   );
// }


// export default function Sidebar() {
//   return (
//     <aside style={{ background: "#ccc", padding: "1rem" }}>
//       <p>Sidebar 測試</p>
//     </aside>
//   );
// }