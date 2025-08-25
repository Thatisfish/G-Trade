import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import OrderCard from '../components/OrderCard'
import ReviewCard from '../components/ReviewCard'
import '../styles/_Orders.scss'

const mockOrders = [
  {
    id: 'C2025080501',
    shop: '@GAME_1318',
    title: '附搖桿包+玻璃貼+TPU材質透明殼【Switch2主機 NS2主機】',
    price: 999,
    date: '2025-08-05',
    status: '未出貨',
    img: '/switch.png',
  },
  {
    id: 'C2025080502',
    shop: '@GAME_1318',
    title: '附搖桿包+玻璃貼+TPU材質透明殼【Switch2主機 NS2主機】',
    price: 999,
    date: '2025-08-05',
    status: '已完成',
    img: '/switch.png',
  },
]

const tabs = ['訂單摘要','未出貨','已到貨','完成訂單','商品退換']

const Orders= () => {
  const [tab, setTab] = useState('訂單摘要')

  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <nav className="breadcrumbs">首頁  會員中心  購買中心  我的訂單</nav>{/* 待修改 */}

        {/* OrderTabs */}
        <div className="ordertabs">
          {tabs.map(t => (
            <button key={t} className={t === tab ? 'active' : ''} onClick={() => setTab(t)}>
              {t}
            </button>
          ))}
        </div>

        {/* Orders */}
        <div className="orders">
          {mockOrders.map(order => (
            <OrderCard key={order.id} {...order} />
          ))}
        </div>

        {/* Review */}
        <ReviewCard />

        {/* Pagination */}
        <div className="pagination">« ‹ 1 2 3 4 › »</div>
      </main>
    </div>
  )
}

export default Orders