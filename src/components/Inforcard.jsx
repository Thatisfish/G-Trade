import { useEffect, useLayoutEffect, useRef } from 'react'
import '../styles/inforcard.scss'

import Card from '../components/Card'
import DKB from '../images/Card_Image/DKB.webp'
import DS2CE from '../images/Card_Image/DS2CE.webp'
import ps5_pro from '../images/Card_Image/ps5_pro.webp'
import SWP2 from '../images/Card_Image/switch_pro2.webp'
import SW2 from '../images/Card_Image/switch2.webp'
import Hollow from '../images/Card_Image/Hollow.webp'
import flower from '../images/Card_Image/flower.webp'

const arrCardinfor = [
	{ id: 1, image: DKB, title: '咚奇剛蕉力全開+咚奇剛amiibo', seller: 'paly**56', priceNow: '800', size: 'small' },
	{ id: 2, tag: '全新上架', image: DS2CE, title: '死亡擱淺典藏版', seller: 'Ds2CE**250626', priceNow: '1100', size: 'medium' },
	{ id: 3, tag: '限時優惠', image: ps5_pro, title: 'PS5 PRO主機 1TB 極致黑', seller: 'Ssp**5', priceNow: '9999', priceOld: '15000', size: 'large' },
	{ id: 4, tag: '', image: SWP2, title: 'PS5 PRO主機 1TB 極致黑', seller: 'fun31**56', priceNow: '5000', priceOld: '5500', size: 'medium' },
	{ id: 5, tag: '限時優惠', image: SW2, title: 'PS5 PRO主機 1TB 極致黑', seller: 'fun31**56', priceNow: '5000', priceOld: '5500', size: 'small' },
	{ id: 6, tag: '', image: Hollow, title: 'PS5 PRO主機 1TB 極致黑', seller: 'fun31**56', priceNow: '5000', priceOld: '5500', size: 'small' },
	{ id: 7, tag: '限時優惠', image: flower, title: 'PS5 PRO主機 1TB 極致黑', seller: 'fun31**56', priceNow: '5000', priceOld: '5500', size: 'small' },
]

function scaleByCenter(containerEl, slides) {
	const box = containerEl.getBoundingClientRect()
	const cx = box.left + box.width / 2
	const SMALL = 0.86, MID = 0.94, MAX = 1.00

	slides.forEach((slideEl) => {
		const r = slideEl.getBoundingClientRect()
		const sx = r.left + r.width / 2
		const dist = Math.abs(cx - sx)
		const radius = r.width * 2.2
		const p = Math.min(dist / radius, 1)

		let scale
		if (p >= 0.6) {
			const t = (p - 0.6) / 0.4
			scale = MID + (SMALL - MID) * t
		} else {
			const t = p / 0.6
			scale = MAX + (MID - MAX) * t
		}
		slideEl.style.setProperty('--card-scale', String(scale))
		slideEl.style.zIndex = String(1000 - Math.round(p * 1000))
	})
}

export default function InforcardGSAP() {
	const wrapRef = useRef(null)
	const trackRef = useRef(null)
	const segRef = useRef(0)          // 一段長度（px）
	const xRef = useRef(0)            // 目前位移（px）
	const timerRef = useRef(null)     // 自動滑 interval

	// 自動滑速度（px/sec）
	const SPEED_PX_PER_SEC = 80
	const TICK_MS = 16
	const SPEED_PX_PER_TICK = (SPEED_PX_PER_SEC * TICK_MS) / 1000

	// 滑鼠移動靈敏度（>1 代表滑鼠移 1px，軌道就移更多 px）
	const HOVER_SPEED_MULTIPLIER = 1.0

	// 追蹤滑鼠移動
	const isHoveringRef = useRef(false)
	const lastXRef = useRef(0)

	const triple = [...arrCardinfor, ...arrCardinfor, ...arrCardinfor]

	const wrapX = (x, seg) => {
		if (!seg) return x
		const mod = ((x % seg) + seg) % seg
		return mod - seg
	}

	const applyTransformAndScale = () => {
		const wrap = wrapRef.current
		const track = trackRef.current
		if (!wrap || !track) return
		track.style.transform = `translate3d(${xRef.current}px, 0, 0)`
		scaleByCenter(wrap, Array.from(track.children))
	}

	const stopAuto = () => {
		if (timerRef.current) {
			clearInterval(timerRef.current)
			timerRef.current = null
		}
	}
	const startAuto = () => {
		stopAuto()
		timerRef.current = setInterval(() => {
			const seg = segRef.current || 0
			xRef.current = wrapX(xRef.current - SPEED_PX_PER_TICK, seg)
			applyTransformAndScale()
		}, TICK_MS)
	}

	useLayoutEffect(() => {
		const track = trackRef.current
		if (!track) return
		segRef.current = track.scrollWidth / 3
		xRef.current = 0
		track.style.transform = `translate3d(0px, 0, 0)`
		const wrap = wrapRef.current
		if (wrap) scaleByCenter(wrap, Array.from(track.children))
	}, [])

	useEffect(() => {
		const wrap = wrapRef.current
		const track = trackRef.current
		if (!wrap || !track) return

		startAuto()

		const onPointerEnter = (e) => {
			isHoveringRef.current = true
			lastXRef.current = e.clientX
			stopAuto()
			wrap.classList.add('is-hovering')
		}

		const onPointerMove = (e) => {
			if (!isHoveringRef.current) return
			const dx = (e.clientX - lastXRef.current) * HOVER_SPEED_MULTIPLIER
			lastXRef.current = e.clientX
			const seg = segRef.current || 0
			// 滑鼠往右移 → 內容往右移（直覺同步）
			xRef.current = wrapX(xRef.current + dx, seg)
			applyTransformAndScale()
		}

		const onPointerLeave = () => {
			isHoveringRef.current = false
			wrap.classList.remove('is-hovering')
			startAuto()
		}

		wrap.addEventListener('pointerenter', onPointerEnter)
		wrap.addEventListener('pointermove', onPointerMove)
		wrap.addEventListener('pointerleave', onPointerLeave)

		const onResize = () => {
			stopAuto()
			const newSeg = track.scrollWidth / 3
			segRef.current = newSeg
			xRef.current = wrapX(xRef.current, newSeg)
			applyTransformAndScale()
			startAuto()
		}
		window.addEventListener('resize', onResize)

		return () => {
			wrap.removeEventListener('pointerenter', onPointerEnter)
			wrap.removeEventListener('pointermove', onPointerMove)
			wrap.removeEventListener('pointerleave', onPointerLeave)
			window.removeEventListener('resize', onResize)
			stopAuto()
		}
	}, [])

	return (
		<div className="inforcard-wrap">
			<div className="marquee" ref={wrapRef}>
				<div className="marquee__track" ref={trackRef}>
					{triple.map((card, i) => (
						<div className="marquee__slide" key={`${card.id}-${i}`}>
							<Card
								tag={card.tag}
								image={card.image}
								title={card.title}
								seller={card.seller}
								priceNow={card.priceNow}
								priceOld={card.priceOld}
								size={card.size}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
