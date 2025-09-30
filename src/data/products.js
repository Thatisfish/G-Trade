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
	},
	{
		id: "nsw-game-zelda",                      // id（識別碼）
		thumb: SidePicture2,                         // thumb（縮圖）
		category: "遊戲",                           // category（分類）
		platform: "Switch",                        // platform（平台）
		mainImage: [SidePicture2, SidePicture2],       // mainImage（主要圖片陣列）
		productTitle: "薩爾達：王國之淚（繁體中文）", // productTitle（商品名稱）
		productMeta: "2025-06-01",                 // productMeta（上架日期）
		originalPrice: 1590,                       // originalPrice（原價）
		salePrice: 1290,                           // salePrice（特價）
		productStatus: "very_good",                // productStatus（商品狀態） // very_good（良好）
		st: {
			status: "良好",
			note: "【二手】卡帶讀取正常，外盒輕微磨痕；無序號卡，無任何 DLC（可下載內容）。",
			location: "台北市 大同區",
			shipping: "宅配 / 面交可",
			payment: "匯款 / 面交現金"
		},
		sellerAvatar: USG,
		sellerName: "遊玩人間小賣家",
		sellerScore: 4.8,
		sellerCount: 42,
		sellerLocation: "台北市 / 大同區",
		sellerTags: ["fastShip", "wellPacked"],
		sellerDesc: "二手實體片收藏轉售，清潔後出貨，附簡易防撞包材。",
		detailContent: "【二手】已測試遊玩 30 分鐘以上，無讀取異常；盒況 8/10，無紙本說明書。",
		qa: []
	},

	{
		id: "nsw-joycon-left",                     // id（識別碼）
		thumb: SidePicture1,                            // thumb（縮圖）
		category: "配件",                           // category（分類）
		platform: "Switch",                        // platform（平台）
		mainImage: [SidePicture1, SidePicture1],             // mainImage（主要圖片陣列）
		productTitle: "Joy-Con 左手（輕微漂移）",    // productTitle（商品名稱）
		productMeta: "2025-03-20",
		originalPrice: 1200,
		salePrice: 800,
		productStatus: "good",                     // good（尚可）
		st: {
			status: "尚可",
			note: "【二手】類比搖桿有輕微漂移，已做酒精清潔但未更換套件；外觀 7/10。",
			location: "新北市 三重區",
			shipping: "宅配 / 面交",
			payment: "轉帳 / 面交"
		},
		sellerAvatar: G1,
		sellerName: "配件達人",
		sellerScore: 4.5,
		sellerCount: 210,
		sellerLocation: "新北市 / 三重區",
		sellerTags: ["warranty"],
		sellerDesc: "二手主機與配件為主，提供 3 日鑑賞（不含人為損壞）。",
		detailContent: "【二手】功能正常，偶有微幅飄移；隨機出貨同色系腕帶一條，無原盒。",
		qa: []
	},

	{
		id: "ps-for-parts",
		thumb: SidePicture2,
		category: "主機",
		platform: "PS",
		mainImage: [SidePicture2, SidePicture2],
		productTitle: "PS4 Slim（光碟機讀取異常）",
		productMeta: "2024-12-05",
		originalPrice: 2490,
		salePrice: null,
		productStatus: "acceptable",               // acceptable（正常）
		st: {
			status: "正常",
			note: "【二手】可進系統，光碟機偶發無法吸入／讀不到；外觀掉漆處散見。",
			location: "台中市 北區",
			shipping: "面交優先 / 宅配可談",
			payment: "面交現金"
		},
		sellerAvatar: S8,
		sellerName: "主機倉庫",
		sellerScore: 3.9,
		sellerCount: 88,
		sellerLocation: "台中市 / 北區",
		sellerTags: ["partsOnly"],
		sellerDesc: "專營二手主機與故障機，售出不退；歡迎現場驗機。",
		detailContent: "【二手】機身螺絲少一；USB、HDMI 輸出正常；建議當拆件機處理。",
		qa: []
	},

	{
		id: "ps-game-fifa",
		thumb: SidePicture1,
		category: "遊戲",
		platform: "PS",
		mainImage: [SidePicture1],
		productTitle: "FIFA 24（亞區片）",
		productMeta: "2025-01-18",
		originalPrice: 1290,
		salePrice: 990,
		productStatus: "like_new",                 // like_new（近全新）
		st: {
			status: "近全新",
			note: "【二手】僅試玩一次；碟片無刮，盒況 9/10；不含任何數位兌換碼。",
			location: "高雄市 鼓山區",
			shipping: "宅配 / 面交",
			payment: "轉帳 / 面交"
		},
		sellerAvatar: SP,
		sellerName: "運動遊戲迷",
		sellerScore: 4.9,
		sellerCount: 64,
		sellerLocation: "高雄市 / 鼓山區",
		sellerTags: ["mintCondition"],
		sellerDesc: "二手實體片轉售，保存良好，出貨前再檢查一次。",
		detailContent: "【二手】光碟讀取正常；封面紙卡完整無潮；無 DLC（可下載內容）。",
		qa: []
	},

	{
		id: "ps-dualsense-case",
		thumb: SidePicture2,
		category: "配件",
		platform: "PS",
		mainImage: [SidePicture2, SidePicture2],
		productTitle: "DualSense 搖桿（白）附矽膠套",
		productMeta: "2025-07-05",
		originalPrice: 1290,
		salePrice: 990,
		productStatus: "very_good",                // very_good（良好）
		st: {
			status: "良好",
			note: "【二手】使用時數約 50 小時；按鍵回饋正常；附二手矽膠保護套與 Type-C（傳輸線）。",
			location: "台南市 中西區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: WB,
		sellerName: "配件小鋪",
		sellerScore: 5.0,
		sellerCount: 320,
		sellerLocation: "台南市 / 中西區",
		sellerTags: ["tested", "fastShip"],
		sellerDesc: "二手周邊清倉；皆完成基本功能測試，無店保。",
		detailContent: "【二手】外殼細紋、無裂；震動與自適應板機正常；無原盒與說明書。",
		qa: []
	},

	{
		id: "xb-for-parts",
		thumb: SidePicture1,
		category: "主機",
		platform: "Xbox",
		mainImage: [SidePicture1, SidePicture1],
		productTitle: "Xbox One（散熱風扇異常）",
		productMeta: "2024-11-02",
		originalPrice: 1990,
		salePrice: null,
		productStatus: "acceptable",               // acceptable（正常）
		st: {
			status: "正常",
			note: "【二手】上電可進系統；風扇異音且溫度偏高；建議維修後使用。",
			location: "桃園市 中壢區",
			shipping: "面交 / 宅配可談",
			payment: "面交現金"
		},
		sellerAvatar: USG,
		sellerName: "老玩家拆機",
		sellerScore: 4.0,
		sellerCount: 98,
		sellerLocation: "桃園市 / 中壢區",
		sellerTags: ["partsOnly"],
		sellerDesc: "二手主機拆機件供應；售出不退，歡迎行前問答。",
		detailContent: "【二手】外殼多處磨痕；USB/HDMI 正常；Wi-Fi（無線網路）可連。",
		qa: []
	},

	{
		id: "xb-game-halo",
		thumb: SidePicture2,
		category: "遊戲",
		platform: "Xbox",
		mainImage: [SidePicture2],
		productTitle: "Halo Infinite（光碟版）",
		productMeta: "2025-02-14",
		originalPrice: 1390,
		salePrice: 1090,
		productStatus: "very_good",                // very_good（良好）
		st: {
			status: "良好",
			note: "【二手】碟片無刮；外盒角落小凹痕；不含任何數位權利（如首發特典）。",
			location: "台中市 西屯區",
			shipping: "宅配 / 面交",
			payment: "轉帳 / 面交"
		},
		sellerAvatar: G1,
		sellerName: "光碟收藏家",
		sellerScore: 4.7,
		sellerCount: 77,
		sellerLocation: "台中市 / 西屯區",
		sellerTags: ["collector"],
		sellerDesc: "收藏輪替釋出，皆為二手實體片，清潔拭鏡布處理後寄送。",
		detailContent: "【二手】已全破；封面紙卡無泛黃；不含 DLC（可下載內容）。",
		qa: []
	},

	{
		id: "xb-headset-wireless",
		thumb: SidePicture1,
		category: "配件",
		platform: "Xbox",
		mainImage: [SidePicture1, SidePicture1],
		productTitle: "Xbox 無線耳機（含充電座）",
		productMeta: "2025-08-10",
		originalPrice: 2990,
		salePrice: 2390,
		productStatus: "like_new",                 // like_new（近全新）
		st: {
			status: "近全新",
			note: "【二手】實際使用不到 10 小時；耳罩無脫皮；含二手充電座與 USB-C（傳輸線）。",
			location: "基隆市 仁愛區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: S8,
		sellerName: "耳機控",
		sellerScore: 4.6,
		sellerCount: 140,
		sellerLocation: "基隆市 / 仁愛區",
		sellerTags: ["boxed", "fastShip"],
		sellerDesc: "音訊周邊二手整理出售，皆已完成配對測試。",
		detailContent: "【二手】藍牙（Bluetooth 藍牙）連線穩定；電池健康 95%（系統顯示）；外盒邊角磨痕。",
		qa: []
	}
];

// 更穩健的查找（lookup 查找）
export const getProductById = (rawId) => {
	const id = decodeURIComponent(String(rawId ?? '')).trim();
	return PRODUCTS.find(p => String(p.id ?? '').trim() === id);
};
