import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from '../../data/products.js'

export default function BellPopover() {
	/* 計算未讀數 */
	const [notices, setNotices] = useState(() => {
		const stored = sessionStorage.getItem("notices");
		if (stored) return JSON.parse(stored);

		// fallback：初始化 10 筆，並儲存一次
		const initial = PRODUCTS.slice(0, 10).map((p, i) => {
			const isShopNotice = i % 3 === 0;
			return {
				id: p.id || i,
				text: isShopNotice
					? `您所收藏的商品「${p.productTitle}」有價格更新！`
					: `您追蹤的賣場「${p.sellerName}」有新商品上架！`,
				date: new Date().toISOString().split("T")[0],
				unread: true,
				disabled: false,
				linkTo: `/product/${encodeURIComponent(p.id || i)}`
			};
		});
		sessionStorage.setItem("notices", JSON.stringify(initial));
		return initial; // 只顯示前 3 筆
	});

	const unreadCount = notices.filter(n => n.unread).length;

	const [open, setOpen] = useState(false);
	const btnRef = useRef(null);
	const panelRef = useRef(null);
	const navigate = useNavigate();

	// 訊息強迫症福音
	const readed = (id) => {
		const full = JSON.parse(sessionStorage.getItem("notices") || "[]");
		const updated = full.map(n =>
			n.id === id && n.unread && !n.disabled
				? { ...n, unread: false, disabled: true }
				: n
		);
		sessionStorage.setItem("notices", JSON.stringify(updated));
		setNotices(updated);
		window.dispatchEvent(new Event("storage")); // 通知同步
	};
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
	
	// 監聽 storage 事件 → 其他地方修改 sessionStorage 時同步
	useEffect(() => {
		function syncNotices() {
			const updated = JSON.parse(sessionStorage.getItem("notices") || "[]");
			setNotices(updated);
		}
		window.addEventListener("storage", syncNotices);
		return () => window.removeEventListener("storage", syncNotices);
	}, []);

	// 觸發li連結
	const handleItemClick = (n) => {
		readed(n.id);  // 更新通知狀態
		setTimeout(() => {
			navigate(n.linkTo);  // 手動導航到通知的連結
		}, 100);
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
					{notices.slice(0, 3).map(n => (
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
