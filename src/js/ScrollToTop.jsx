// src/js/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * 等到頁面根可滾（scrollable 可滾動）再執行 callback（回呼）
 * - 不修改任何 style（樣式）
 * - 避免殘留 element.style（行內樣式）
 */
function waitUntilScrollable({ lockSelectors = [".modal-open", ".is-lock-scroll"], timeoutMs = 1500 } = {}, cb) {
	let done = false;
	const body = document.body;

	// 條件：不是 hidden/clip，且沒有鎖捲類別
	const isScrollableNow = () => {
		const cs = getComputedStyle(body);
		const lockedByStyle = cs.overflowY === "hidden" || cs.overflowY === "clip";
		const lockedByClass = lockSelectors.some((sel) => body.matches?.(sel) || body.classList.contains(sel.replace(/^[.#]/, "")));
		return !lockedByStyle && !lockedByClass;
	};

	// 先試一次
	if (isScrollableNow()) {
		done = true;
		cb();
		return () => { };
	}

	// 監聽 body 屬性與 class（類別）變化
	const mo = new MutationObserver(() => {
		if (done) return;
		if (isScrollableNow()) {
			done = true;
			mo.disconnect();
			cb();
		}
	});
	mo.observe(body, { attributes: true, attributeFilter: ["class", "style"] });

	// 同時用 rAF（requestAnimationFrame 螢幕重繪前回呼）保險輪詢幾次
	let rafId = 0;
	const start = performance.now();
	const loop = () => {
		if (done) return;
		if (isScrollableNow()) {
			done = true;
			cancelAnimationFrame(rafId);
			mo.disconnect();
			cb();
			return;
		}
		if (performance.now() - start < timeoutMs) {
			rafId = requestAnimationFrame(loop);
		} else {
			// 超時就直接執行（即使還鎖捲，盡力一試）
			done = true;
			cancelAnimationFrame(rafId);
			mo.disconnect();
			cb();
		}
	};
	rafId = requestAnimationFrame(loop);

	// 清理（cleanup 清理）
	return () => {
		done = true;
		cancelAnimationFrame(rafId);
		mo.disconnect();
	};
}

export default function ScrollToTop({
	selector,                 // 自訂滾動容器（container 容器）選擇器
	behavior = "auto",        // "auto（自動）" | "smooth（平滑）"
	lockSelectors = [".modal-open", ".is-lock-scroll"], // 你的專案中用來鎖捲的 class（類別）
	maxAttempts = 3           // 最多重試次數（requestAnimationFrame 次數）
}) {
	const { pathname, search, hash, key, state } = useLocation();

	useEffect(() => {
		// 每次導航若帶 state.noScroll（不要自動回頂），就跳過
		if (state?.noScroll) return;

		// 有 #hash（錨點）交給瀏覽器默認行為
		if (hash) return;

		// 找實際滾動容器（container 容器）
		const target =
			(selector && document.querySelector(selector)) ||
			document.scrollingElement ||
			document.documentElement;

		if (!target) return;

		let attempts = 0;
		let cleanup = null;

		const doScroll = () => {
			attempts += 1;

			// 多路徑設置（maximize compatibility 提高相容性）
			if (typeof target.scrollTo === "function") {
				target.scrollTo({ top: 0, left: 0, behavior });
			}
			target.scrollTop = 0;
			document.documentElement.scrollTop = 0;
			document.body.scrollTop = 0;

			// 若內容尚未就緒，短期重試
			if (attempts < maxAttempts) {
				requestAnimationFrame(doScroll);
			}
		};

		// 等待「可滾」再捲回頂（不中途改任何 style）
		cleanup = waitUntilScrollable({ lockSelectors }, () => {
			// 等一個 frame（frame 影格）確保新內容掛上去
			requestAnimationFrame(doScroll);
		});

		// 清理
		return () => {
			if (typeof cleanup === "function") cleanup();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [key, pathname, search, hash, selector, behavior, state]);

	return null;
}
