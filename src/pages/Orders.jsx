import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import OrderCard from '../components/OrderCard'
import ReviewCard from '../components/ReviewCard'
import '../styles/_Orders.scss'

// 圖片兩張
import ordersImg from '../images/orderImg1.svg'
import sellerImg from '../images/orderImg2.webp'

const mockOrders = [
  {
    id: "C2025080501",
    shop: '@GAME_1318的賣場',
    title: "附硬殼包+玻璃貼+TPU材質透明殼【Switch2主機 NS2主機】",
    date: "2025-08-05",
    price: 999,
    status: "未出貨",
    img: ordersImg,
  },

  {
    id: 'C2025080501',
    shop: '@GAME_1318',
    title: '附硬殼包+玻璃貼+TPU材質透明殼【Switch2主機 NS2主機】',
    price: 999,
    date: '2025-08-05',
    status: '未出貨',
    img: ordersImg,
  },

  {
    id: 'C2025080501',
    shop: '@GAME_1318',
    title: '附硬殼包+玻璃貼+TPU材質透明殼【Switch2主機 NS2主機】',
    price: 999,
    date: '2025-08-05',
    status: '已完成',
    img: ordersImg,
  },
]

const tabs = ['訂單摘要', '未出貨', '已到貨', '完成訂單', '商品退換']

const Orders = () => {
  const [tab, setTab] = useState('訂單摘要')

  return (
    <main className="J_content">
      <Sidebar />
      <div className="J_layout">
        {/* 麵包屑 */}
        <div className="J_breadcrumbs">
          <a href="#">首頁</a>
          <span >›</span>
          <a href="#">會員中心</a>
          <span >›</span>
          <a href="#">購買中心</a>
          <span >›</span>
          <span >收藏清單</span>
        </div>

        {/* OrderTabs */}
        <div className="J_ordertabs">
          {tabs.map(t => (
            <button key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>

        {/* Orders */}
        <div className="J_orders">
          {mockOrders.map(order => (
            <OrderCard key={order.id} {...order} />
          ))}
        </div>

        {/* Review */}
        <ReviewCard />

        {/* Pagination */}
        <div className="J_pagination">« ‹ 1 2 3 4 › »</div>
      </div>
    </main>
  )
}

export default Orders