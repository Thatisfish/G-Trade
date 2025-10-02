// src/pages/Inforcard.jsx
import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/inforcard.scss';

import Card from '../components/Card';

// ✅ 改為使用你的資料庫
import { PRODUCTS } from '../data/products';

// == 內部：依商品類型給卡片大小（你原本 Card 有 small/medium/large）
const sizeByCategory = (category) => {
	// 遊戲 → small、配件 → medium、主機 → large
	if (category === '主機') return 'large';
	if (category === '配件') return 'medium';
	return 'small';
};

// == 內部：產卡片 tag（有特價就顯示「限時優惠」，不然顯示狀態或空）
const tagOf = (p) => {
	if (p?.salePrice != null && Number(p.salePrice) < Number(p.originalPrice || 0)) return '限時優惠';
	return p?.st?.status || '';
};

// == 內部：取首圖，沒有就退回 thumb
const firstImage = (p) => {
	const arr = Array.isArray(p?.mainImage) ? p.mainImage : [];
	return arr[0] || p?.thumb || '';
};

/* =========================
   👉 你原本的位移/縮放邏輯（保留）
   ========================= */
function scaleByCenter(containerEl, slides) {
	const box = containerEl.getBoundingClientRect();
	const cx = box.left + box.width / 2;
	const SMALL = 0.86, MID = 0.94, MAX = 1.00;

	slides.forEach((slideEl) => {
		const r = slideEl.getBoundingClientRect();
		const sx = r.left + r.width / 2;
		const dist = Math.abs(cx - sx);
		const radius = r.width * 2.2;
		const p = Math.min(dist / radius, 1);

		let scale;
		if (p >= 0.6) {
			const t = (p - 0.6) / 0.4;
			scale = MID + (SMALL - MID) * t;
		} else {
			const t = p / 0.6;
			scale = MAX + (MID - MAX) * t;
		}
		slideEl.style.setProperty('--card-scale', String(scale));
		slideEl.style.zIndex = String(1000 - Math.round(p * 1000));
	});
}

function shuffleArray(array) {
	const arr = [...array];
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

export default function InforcardGSAP() {
	const wrapRef = useRef(null);
	const trackRef = useRef(null);
	const segRef = useRef(0);
	const xRef = useRef(0);
	const timerRef = useRef(null);

	// 自動滑速度（px/sec）
	const SPEED_PX_PER_SEC = 80;
	const TICK_MS = 16;
	const SPEED_PX_PER_TICK = (SPEED_PX_PER_SEC * TICK_MS) / 1000;

	// 滑鼠移動靈敏度
	const HOVER_SPEED_MULTIPLIER = 1.0;

	// 追蹤滑鼠移動
	const isHoveringRef = useRef(false);
	const lastXRef = useRef(0);

	/* =========================
	   1) 用 PRODUCTS 組資料
	   ========================= */
	const data = useMemo(() => {
		const shuffled = shuffleArray(PRODUCTS);
		// 決定要抓幾筆
		const pick = shuffled.slice(0, 12);

		return pick.map((p) => ({
			id: p.id,
			tag: tagOf(p),
			image: firstImage(p),
			title: p.productTitle,
			seller: p.sellerName,
			priceNow: p.salePrice ?? p.originalPrice ?? 0,
			priceOld: p.salePrice != null ? p.originalPrice : null,
			size: sizeByCategory(p.category)
		}));
	}, []);

	// 跑馬燈需要三段同內容串接
	const triple = useMemo(() => [...data, ...data, ...data], [data]);

	const wrapX = (x, seg) => {
		if (!seg) return x;
		const mod = ((x % seg) + seg) % seg;
		return mod - seg;
	};

	const applyTransformAndScale = () => {
		const wrap = wrapRef.current;
		const track = trackRef.current;
		if (!wrap || !track) return;
		track.style.transform = `translate3d(${xRef.current}px, 0, 0)`;
		scaleByCenter(wrap, Array.from(track.children));
	};

	const stopAuto = () => {
		if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}
	};
	const startAuto = () => {
		stopAuto();
		timerRef.current = setInterval(() => {
			const seg = segRef.current || 0;
			xRef.current = wrapX(xRef.current - SPEED_PX_PER_TICK, seg);
			applyTransformAndScale();
		}, TICK_MS);
	};

	useLayoutEffect(() => {
		const track = trackRef.current;
		if (!track) return;
		segRef.current = track.scrollWidth / 3;
		xRef.current = 0;
		track.style.transform = `translate3d(0px, 0, 0)`;
		const wrap = wrapRef.current;
		if (wrap) scaleByCenter(wrap, Array.from(track.children));
	}, []);

	useEffect(() => {
		const wrap = wrapRef.current;
		const track = trackRef.current;
		if (!wrap || !track) return;

		startAuto();

		const onPointerEnter = (e) => {
			isHoveringRef.current = true;
			lastXRef.current = e.clientX;
			stopAuto();
			wrap.classList.add('is-hovering');
		};

		const onPointerMove = (e) => {
			if (!isHoveringRef.current) return;
			const dx = (e.clientX - lastXRef.current) * HOVER_SPEED_MULTIPLIER;
			lastXRef.current = e.clientX;
			const seg = segRef.current || 0;
			// 滑鼠往右移 → 內容往右移（直覺同步）
			xRef.current = wrapX(xRef.current + dx, seg);
			applyTransformAndScale();
		};

		const onPointerLeave = () => {
			isHoveringRef.current = false;
			wrap.classList.remove('is-hovering');
			startAuto();
		};

		wrap.addEventListener('pointerenter', onPointerEnter);
		wrap.addEventListener('pointermove', onPointerMove);
		wrap.addEventListener('pointerleave', onPointerLeave);

		const onResize = () => {
			stopAuto();
			const newSeg = track.scrollWidth / 3;
			segRef.current = newSeg;
			xRef.current = wrapX(xRef.current, newSeg);
			applyTransformAndScale();
			startAuto();
		};
		window.addEventListener('resize', onResize);

		return () => {
			wrap.removeEventListener('pointerenter', onPointerEnter);
			wrap.removeEventListener('pointermove', onPointerMove);
			wrap.removeEventListener('pointerleave', onPointerLeave);
			window.removeEventListener('resize', onResize);
			stopAuto();
		};
	}, []);

	return (
		<div className="inforcard-wrap">
			<div className="marquee" ref={wrapRef}>
				<div className="marquee__track" ref={trackRef}>
					{triple.map((card, i) => (
						<div className="marquee__slide" key={`${card.id}-${i}`}>
							{/* ✅ 可點擊：導到 /product/:id（你 data/products.js 已提供 getProductById 對應） */}
							<Link to={`/product/${encodeURIComponent(card.id)}`} className="marquee__link" aria-label={card.title}>
								<Card
									tag={card.tag}
									image={card.image}
									title={card.title}
									seller={card.seller}
									priceNow={card.priceNow}
									priceOld={card.priceOld}
									size={card.size}
								/>
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
