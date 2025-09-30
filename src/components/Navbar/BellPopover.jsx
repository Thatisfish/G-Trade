import { useState, useRef, useEffect } from "react";
import { data, Link, Navigate, useNavigate } from "react-router-dom";
import { PRODUCTS } from '../../data/products.js'

export default function BellPopover() {
	/* 計算未讀數 */
	// const [notices, setNotices] = useState([
	// 	{ id: 1, text: "您所收藏的商品「九成新 Switch主機 黑色版」有價格更新！", date: "2025-08-06", unread: true, disabled: false },
	// 	{ id: 2, text: "您追蹤的賣場「Ssp**5」有新商品上架！", date: "2025-08-06", unread: true, disabled: false },
	// 	{ id: 3, text: "您所收藏的商品「咚奇剛蕉力全開+咚奇剛amiibo」有價格更新", date: "2025-05-16", unread: false, disabled: true }
	// ]);
	const [notices, setNotices] = useState(() => {
		return PRODUCTS.slice(0, 3).map((p, i) => {
			const isShopNotice = i % 2 === 0; // 偶數筆資料換成賣場通知
			return {
				id: p.id || i,
				text: isShopNotice ? `您所收藏的商品「${p.productTitle}」有價格更新！` : `您追蹤的賣場「${p.sellerName}」有新商品上架！`,
				date: new Date().toISOString().split("T")[0],
				unread: true,
				disabled: false,
				linkTo: `/product/${encodeURIComponent(p.id || i)}`
			};
		});
	}, []);

	const unreadCount = notices.filter(n => n.unread).length;

	const [open, setOpen] = useState(false);
	const btnRef = useRef(null);
	const panelRef = useRef(null);
	const navigate = useNavigate();

	// 訊息強迫症福音
	const readed = (id) => {
		setNotices(prev =>
			prev.map(n =>   // 檢查每筆通知 未讀&可點
				n.id === id && n.unread && !n.disabled    // disabled不等false的時候可以用
					? { ...n, unread: false, disabled: true }  // 已讀灰階
					: n
			)
		)
	}

	// 點擊外部關閉（click outside／點外關閉）
	useEffect(() => {
		function onDocClick(e) {
			if (!open) return;
			if (
				panelRef.current &&
				!panelRef.current.contains(e.target) &&
				btnRef.current &&
				!btnRef.current.contains(e.target)
			) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", onDocClick);
		return () => document.removeEventListener("mousedown", onDocClick);
	}, [open]);

	// 觸發li連結
	const handleItemClick = (n) => {
		readed(n.id);  // 更新通知狀態
		navigate(n.linkTo);  // 手動導航到通知的連結
	};

	return (
		<div className="bell">
			<button
				ref={btnRef}
				type="button"
				className="icon-bell" /* ← 保留你原本的樣式（all: unset; …） */
				onClick={() => setOpen(o => !o)}
				aria-label={`通知（未讀 ${unreadCount} 筆）`}
			>
				{unreadCount > 0 && (
					<span className="bell__badge">{unreadCount > 99 ? '99+' : unreadCount}</span>
				)}
			</button>

			<div
				ref={panelRef}
				className={`bell__panel ${open ? "is-open" : ""}`}
				role="dialog"
				aria-label="通知列表"
			>
				<div className="bell__panelHeader">
					<p>通知</p>
					<span onClick={() => navigate("/AllNotify")}>查看所有通知</span>
				</div>
				<ul className="bell__list">
					{notices.map(n => (
						<li
							key={n.id}
							className={`bell__item ${n.unread ? "is-unread" : ""} ${n.disabled ? "is-disabled" : ""}`}
							onClick={() => handleItemClick(n)}
						>
							<div className="bdt">
								<div className="bell__dot" />
								<p className="bell__text">{n.text}</p>
							</div>
							<div className="bd">
								<time className="bell__date">{n.date}</time>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
