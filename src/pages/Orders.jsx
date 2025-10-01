import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import OrderCard from '../components/OrderCard'
import ReviewCard from '../components/ReviewCard'
import Pagination from '../components/Pagination'
import '../styles/_Orders.scss'

// 圖片兩張
import ordersImg from '../images/orderImg1.svg'
import sellerImg from '../images/orderImg2.webp'
import { Helmet } from '@dr.pogodin/react-helmet'

const mockOrders = [
	{
		id: "C2025080501",
		shop: '@GAME_1318',
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

	{
		id: "C2025080501",
		shop: '@GAME_1318',
		title: "附硬殼包+玻璃貼+TPU材質透明殼【Switch2主機 NS2主機】",
		date: "2025-08-05",
		price: 999,
		status: "未出貨",
		img: ordersImg,
	},

	{
		id: "C2025080501",
		shop: '@GAME_1318',
		title: "附硬殼包+玻璃貼+TPU材質透明殼【Switch2主機 NS2主機】",
		date: "2025-08-05",
		price: 999,
		status: "未出貨",
		img: ordersImg,
	},
]

const tabs = ['訂單摘要', '未出貨', '已到貨', '完成訂單', '商品退換']

const Orders = () => {
	const [tab, setTab] = useState('訂單摘要')

	// pagination state
	const [currentPage, setCurrentPage] = useState(1)
	const perPage = 3
	const totalPages = Math.max(1, Math.ceil(mockOrders.length / perPage))

	const handlePageChange = (page) => {
		setCurrentPage(page)
	}

	const start = (currentPage - 1) * perPage
	const pagedOrders = mockOrders.slice(start, start + perPage)

	return (
		<>
			<Helmet>
				<title>{`遊玩人間市集 ｜ 我的訂單`}</title>
				<meta name="description" content="歡迎來到遊玩人間市集，探索各式二手遊戲商品。" />
			</Helmet>
			<main className="J_content">
				<Sidebar />
				<div className="J_layout">


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
						{pagedOrders.map((order, idx) => (
							<OrderCard key={`${order.id}-${start + idx}`} {...order} />
						))}
					</div>

					{/* Review */}
					{/* <ReviewCard /> */}

					{/* Pagination (use component) */}
					<div className="J_pagination">
						<Pagination totalPages={totalPages} onPageChange={handlePageChange} />
					</div>
				</div>
			</main>
		</>
	)
}

export default Orders