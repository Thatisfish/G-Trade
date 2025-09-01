import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import '../styles/inforcard.scss'
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
		const radius = r.width * 2.2 // 影響半徑（可調 2.0~2.6）
		const p = Math.min(dist / radius, 1) // 0=中心, 1=很遠

		let scale
		if (p >= 0.6) {
			const t = (p - 0.6) / 0.4; scale = MID + (SMALL - MID) * t // 中→小
		} else {
			const t = p / 0.6; scale = MAX + (MID - MAX) * t     // 大→中
		}
		slideEl.style.setProperty('--card-scale', String(scale))
		slideEl.style.zIndex = String(1000 - Math.round(p * 1000))
	})
}

export default function InforcardGSAP() {
	const wrapRef = useRef(null)
	const trackRef = useRef(null)
	const tweenRef = useRef(null)

	// 速度（px/秒）＆ 每張寬（需與 SCSS 對齊）
	const PX_PER_SEC = 120

	useLayoutEffect(() => {
		const wrap = wrapRef.current
		const track = trackRef.current
		if (!wrap || !track) return

		// 1) 初始位置
		gsap.set(track, { x: 0 })

		// 2) 一共渲染了 3 倍內容 → 一段長度 = 總寬的 1/3
		const segment = track.scrollWidth / 5

		// 3) 建立線性連續動畫（ease: 'none'），並用 wrap 無縫循環
		const duration = segment / PX_PER_SEC
		tweenRef.current?.kill()
		tweenRef.current = gsap.to(track, {
			x: -segment,
			duration,
			ease: 'none',
			repeat: -1,
			modifiers: {
				x: (x) => {
					const v = parseFloat(x)
					// 把 x 值包回 [-segment, 0) 範圍內，達到無縫
					const wrapped = ((v + segment) % segment) - segment
					return `${wrapped}px`
				}
			},
			onUpdate: () => scaleByCenter(wrap, Array.from(track.children)),
		})

		// 4) 視窗尺寸變動時重算
		const onR = () => {
			const s = track.scrollWidth / 3
			const d = s / PX_PER_SEC
			tweenRef.current?.kill()
			gsap.set(track, { x: 0 })
			tweenRef.current = gsap.to(track, {
				x: -s, duration: d, ease: 'none', repeat: -1,
				modifiers: { x: (x) => `${(((parseFloat(x) + s) % s) - s)}px` },
				onUpdate: () => scaleByCenter(wrap, Array.from(track.children)),
			})
		}
		window.addEventListener('resize', onR)
		return () => {
			window.removeEventListener('resize', onR)
			tweenRef.current?.kill()
		}
	}, [])

	return (
		<div className="inforcard-wrap">
			<div className="marquee" ref={wrapRef}>
				<div className="marquee__track" ref={trackRef}>
					{[...arrCardinfor, ...arrCardinfor, ...arrCardinfor].map((card, i) => (
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