// ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ selector, behavior = "auto" }) {
	const { pathname, search, hash, key } = useLocation();

	useEffect(() => {
		// 若有 #hash，讓瀏覽器處理錨點，不強制回頂
		if (hash) return;

		// 找真正在滾動的容器：優先 selector，其次 scrollingElement，再來 body/html
		const target =
			(selector && document.querySelector(selector)) ||
			document.scrollingElement ||
			document.body ||
			document.documentElement;

		if (!target) return;

		// 如果被鎖捲（overflow hidden），暫時解鎖
		const bodyStyle = window.getComputedStyle(document.body);
		const wasLocked = bodyStyle.overflowY === "hidden";
		if (wasLocked) {
			document.body.style.overflowY = "auto";
		}

		// 多次嘗試：避免在內容尚未完成渲染時就捲動失敗
		let attempts = 0;
		const maxAttempts = 3;

		const tick = () => {
			attempts += 1;

			// 同時設置多個來源，最大化相容性
			if (typeof target.scrollTo === "function") {
				target.scrollTo({ top: 0, left: 0, behavior });
			}
			target.scrollTop = 0;
			document.documentElement.scrollTop = 0; // 兼容某些瀏覽器
			document.body.scrollTop = 0;

			if (attempts < maxAttempts) {
				requestAnimationFrame(tick);
			} else if (wasLocked) {
				// 還原原本的鎖捲狀態（如果需要）
				document.body.style.overflowY = "hidden";
			}
		};

		// 等一個 frame 再執行，讓路由切換後的內容先掛上去
		requestAnimationFrame(tick);

		// 不需要清理；這是一次性行為
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [key, pathname, search, hash, selector, behavior]); // 監聽 key，可捕捉同路徑切換

	return null;
}
