import { useState, useRef, useEffect } from "react";

export default function BellPopover() {
	/* 計算未讀數 */
	const notices = [
		{ id: 1, text: "您所收藏的商品特價中！", date: "2025-08-06", unread: true },
		{ id: 2, text: "您追蹤的賣場已更新！", date: "2025-08-06", unread: true },
		{ id: 3, text: "您所收藏的商品特價中！", date: "2025-05-16", unread: false, disabled: true }
	];
	const unreadCount = notices.filter(n => n.unread).length;

	const [open, setOpen] = useState(false);
	const btnRef = useRef(null);
	const panelRef = useRef(null);

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
				<div className="bell__panelHeader" />
				<ul className="bell__list">
					{notices.map(n => (
						<li
							key={n.id}
							className={`bell__item ${n.unread ? "is-unread" : ""} ${n.disabled ? "is-disabled" : ""}`}
						>
							<div className="bell__dot" />
							<p className="bell__text">{n.text}</p>
							<time className="bell__date">{n.date}</time>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
