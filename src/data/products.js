// src/data/products.js
import USG from '../images/ProductPage/user.jpg'
import G1 from '../images/ProductPage/G1.avif'
import S8 from '../images/ProductPage/S8.avif'
import SP from '../images/ProductPage/SP.avif'
import WB from '../images/ProductPage/WB.avif'

import SidePicture1 from '../images/ProductPage/SidePicture1.webp'
import SidePicture2 from '../images/ProductPage/SidePicture2.jpg'

// 狀態圖（status images 圖片）
import ST01 from '../images/ProductPage/01.png'
import ST02 from '../images/ProductPage/02.png'
import ST03 from '../images/ProductPage/03.png'
import ST04 from '../images/ProductPage/04.png'
import ST05 from '../images/ProductPage/05.png'

// 狀態對照表（status map 對照）
// 全新 brand_new、近全新 like_new、良好 very_good、尚可 good、正常 acceptable
export const PRODUCT_STATUS_MAP = {
	brand_new: { label: "全新", image: ST01 },
	like_new: { label: "近全新", image: ST02 },
	very_good: { label: "良好", image: ST03 },
	good: { label: "尚可", image: ST04 },
	acceptable: { label: "正常", image: ST05 }
};

/**
 * 欄位對照
 * - main-image (商品圖片)        -> mainImage (string[]，最多 4 張)
 * - product-title (商品名)       -> productTitle (string)
 * - product-meta (上架日期)      -> productMeta (string, YYYY-MM-DD)
 * - original-price (原始價格)    -> originalPrice (number)
 * - sale-price (特價價格)        -> salePrice (number | null)
 * - product-status (商品狀態標示) -> productStatus (string key, 對應後端/圖片)
 * - st (狀態、備註、位置、運送、付款) -> st (object)
 *
 * 賣家欄位（seller__*）
 * - seller__avatar -> sellerAvatar (string: 圖片路徑)
 * - seller__name   -> sellerName (string)
 * - seller__score  -> sellerScore (number, 0-5)
 * - seller__count  -> sellerCount (number)
 * - seller__location -> sellerLocation (string)
 * - seller__tags   -> sellerTags (string[] 圖片檔名或路徑, e.g. ["check","fastShip","quickReply"])
 * - seller__desc   -> sellerDesc (string)
 *
 * 其他：
 * - detail_content -> detailContent (string)
 * - qa -> qa (初始問答陣列，實際操作以 localStorage: `qa:<productId>` 為主)
 */
export const PRODUCTS = [
	{
		id: "nsw-oled-red",
		category: "主機",
		platform: "Switch",
		thumb: SidePicture1,
		mainImage: [SidePicture1, SidePicture1, SidePicture1],
		productTitle: "任天堂 Switch OLED 紅藍主機組",
		productMeta: "2025-08-01",
		originalPrice: 11990,
		salePrice: 10990,
		productStatus: "like_new", // 近全新 (Like New 近全新)
		st: {
			status: "近全新", // 顯示文字
			note: "主機外觀良好，無重大使用痕跡",
			location: "台北市 萬華區",
			shipping: "宅配 / 超商取貨",
			payment: "信用卡 / LINE Pay / 貨到付款"
		},
		sellerAvatar: USG,
		sellerName: "玩家小店",
		sellerScore: 4.9,
		sellerCount: 5188,
		sellerLocation: "台北市 / 萬華區",
		sellerTags: ["check", "fastShip", "quickReply"], // 會對應到你的圖示
		sellerDesc: "個人賣場，商品多為保養良好的電玩主機，回覆快速。",
		detailContent: "盒裝含主機、底座、Joy-Con 控制器與原廠充電線，已測試運作正常，保固 7 天。",
		qa: []
	},
	{
		id: "ps5-slim",
		category: "主機",
		platform: "PS",
		thumb: SidePicture2,
		mainImage: [SidePicture2, SidePicture2, SidePicture2],
		productTitle: "PS5 Slim 光碟版（白）",
		productMeta: "2025-07-10",
		originalPrice: 14990,
		salePrice: null,
		productStatus: "brand_new", // 全新 (Brand New 全新)
		st: {
			status: "全新",
			note: "公司貨，全新未拆",
			location: "新北市 板橋區",
			shipping: "宅配（含運費）",
			payment: "信用卡 / ATM 轉帳"
		},
		sellerAvatar: G1,
		sellerName: "極速電玩",
		sellerScore: 4.8,
		sellerCount: 3210,
		sellerLocation: "新北市 / 板橋區",
		sellerTags: ["check", "fastShip"],
		sellerDesc: "大型電玩通路，提供 14 天鑑賞期（非人為損壞）。",
		detailContent: "PS5 Slim 光碟版，全新公司貨，含原廠保固與發票。",
		qa: []
	},
	{
		id: "nsw-lite-blue",
		category: "主機",
		platform: "Switch",
		thumb: SidePicture1,
		mainImage: [SidePicture1, SidePicture1, SidePicture1],
		productTitle: "任天堂 Switch Lite 藍色",
		productMeta: "2025-06-05",
		originalPrice: 6990,
		salePrice: 6490,
		productStatus: "very_good", // 良好 (Very Good 良好)
		st: {
			status: "良好",
			note: "螢幕有輕微刮痕，不影響使用",
			location: "台中市 西區",
			shipping: "面交 / 宅配",
			payment: "面交現金 / 匯款"
		},
		sellerAvatar: S8,
		sellerName: "遊戲小C",
		sellerScore: 4.5,
		sellerCount: 412,
		sellerLocation: "台中市 / 西區",
		sellerTags: ["fastShip", "quickReply"],
		sellerDesc: "喜歡整理遊戲主機，保養良好，支援面交自取。",
		detailContent: "Switch Lite 藍色，手把與按鍵運作正常，附原廠充電線。",
		qa: []
	},
	{
		id: "switch-accessory-pack",
		category: "配件",
		platform: "Switch",
		thumb: SidePicture2,
		mainImage: [SidePicture2, SidePicture2, SidePicture2],
		productTitle: "Switch 配件組（收納包 + Pro 手把）",
		productMeta: "2025-05-20",
		originalPrice: 2590,
		salePrice: 1990,
		productStatus: "good", // 尚可 (Good 尚可)
		st: {
			status: "尚可",
			note: "手把已翻新、收納包為全新",
			location: "高雄市 三民區",
			shipping: "黑貓宅配 / 超商取貨",
			payment: "信用卡 / ATM"
		},
		sellerAvatar: SP,
		sellerName: "配件專賣店",
		sellerScore: 4.7,
		sellerCount: 980,
		sellerLocation: "高雄市 / 三民區",
		sellerTags: ["check"],
		sellerDesc: "專售遊戲配件，提供 7 天退換貨（非人為損壞）。",
		detailContent: "包含 Pro 手把（翻新、含 30 天保固）、官方收納包、充電線。",
		qa: []
	},
	{
		id: "nsw-for-parts",
		thumb: SidePicture1,
		category: "主機",
		platform: "Switch",
		mainImage: [SidePicture1, SidePicture1, SidePicture1],
		productTitle: "任天堂 Switch（故障待修／拆件）",
		productMeta: "2025-04-12",
		originalPrice: 2990,
		salePrice: null,
		productStatus: "acceptable", // 正常 (Acceptable 正常)
		st: {
			status: "正常",
			note: "有主機電源問題，適合拆件或維修",
			location: "彰化縣 員林鎮",
			shipping: "面交優先 / 宅配可談",
			payment: "面交現金"
		},
		sellerAvatar: WB,
		sellerName: "維修小王",
		sellerScore: 4.2,
		sellerCount: 156,
		sellerLocation: "彰化縣 / 員林鎮",
		sellerTags: ["quickReply"],
		sellerDesc: "以修理與拆件為主，出售零件與故障機。",
		detailContent: "機體可開機但會自動重啟，螢幕正常，建議當作零件機處理。",
		qa: []
	}
];

// 更穩健的查找（lookup 查找）
export const getProductById = (rawId) => {
	const id = decodeURIComponent(String(rawId ?? '')).trim();
	return PRODUCTS.find(p => String(p.id ?? '').trim() === id);
};
