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
		thumb: "./Card_Image/sw6.avif",
		mainImage: ["./Card_Image/sw6.avif", "./Card_Image/sw6.avif", "./Card_Image/sw6.avif"],
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
		thumb: "./Card_Image/sw5.avif",
		mainImage: ["./Card_Image/sw5.avif", "./Card_Image/sw5.avif", "./Card_Image/sw5.avif"],
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
		thumb: "./Card_Image/sw4.avif",
		mainImage: ["./Card_Image/sw4.avif", "./Card_Image/sw4.avif", "./Card_Image/sw4.avif"],
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
		thumb: "./Card_Image/sw3.avif",
		category: "主機",
		platform: "Switch",
		mainImage: ["./Card_Image/sw3.avif", "./Card_Image/sw3.avif", "./Card_Image/sw6.avif"],
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
		thumb: "./Card_Image/sw1.avif",                         // thumb（縮圖）
		category: "遊戲",                           // category（分類）
		platform: "Switch",                        // platform（平台）
		mainImage: ["./Card_Image/sw1.avif", "./Card_Image/sw1.avif"],       // mainImage（主要圖片陣列）
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
		thumb: "./Card_Image/sw2.avif",                            // thumb（縮圖）
		category: "配件",                           // category（分類）
		platform: "Switch",                        // platform（平台）
		mainImage: ["./Card_Image/sw2.avif", "./Card_Image/sw2.avif"],             // mainImage（主要圖片陣列）
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
		thumb: "./Card_Image/xbox10.avif",
		category: "配件",
		platform: "Xbox",
		mainImage: ["./Card_Image/xbox10.avif", "./Card_Image/xbox10.avif"],
		productTitle: "Xbox 無線耳機（含充電座）",
		productMeta: "2025-08-10",
		originalPrice: 2990,
		salePrice: 2390,
		productStatus: "like_new",
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
	},
	{
		id: "pokemon-za",
		category: "遊戲",
		platform: "Switch",
		thumb: "./Card_Image/za.avif",
		mainImage: [
			"./Card_Image/za.avif",
			"./Card_Image/za.avif",
			"./Card_Image/za.avif"
		],
		productTitle: "寶可夢傳說 Z-A（繁體中文）",
		productMeta: "2025-09-10",
		originalPrice: 1890,
		salePrice: 1790,
		productStatus: "brand_new", // 全新 (Brand New 全新)
		st: {
			status: "全新",
			note: "未拆封，繁體中文版，內含特典下載序號",
			location: "台中市 西屯區",
			shipping: "宅配 / 超商取貨",
			payment: "信用卡 / ATM 轉帳 / 超商付款"
		},
		sellerAvatar: G1,
		sellerName: "poke_master99",
		sellerScore: 4.8,
		sellerCount: 2390,
		sellerLocation: "台中市 / 西屯區",
		sellerTags: ["fastShip", "bundle"],
		sellerDesc: "專賣寶可夢系列遊戲與周邊，均為正版公司貨。",
		detailContent: "全新未拆封，保證原廠正版，支援繁體中文，附贈特典服裝下載碼（數量有限）。",
		qa: []
	},
	{
		id: "nsw-2",
		category: "主機",
		platform: "Switch",
		thumb: "./Card_Image/sww2.avif",
		mainImage: [
			"./Card_Image/sww2.avif",
			"./Card_Image/sww2.avif",
			"./Card_Image/sww2.avif"
		],
		productTitle: "任天堂 Switch 2 主機（新世代）",
		productMeta: "2025-09-15",
		originalPrice: 14990,
		salePrice: 14500,
		productStatus: "brand_new", // 全新 (Brand New 全新)
		st: {
			status: "全新",
			note: "最新一代 Switch 2 主機，性能升級，支援 4K 輸出",
			location: "高雄市 左營區",
			shipping: "宅配 / 面交",
			payment: "信用卡 / Apple Pay / 面交付款"
		},
		sellerAvatar: S8,
		sellerName: "nextgen_game",
		sellerScore: 5.0,
		sellerCount: 312,
		sellerLocation: "高雄市 / 左營區",
		sellerTags: ["check", "fastShip"],
		sellerDesc: "專營新世代遊戲主機，保證原廠公司貨，支援面交驗貨。",
		detailContent: "全新公司貨，內含主機、底座、Joy-Con Pro 控制器、HDMI 2.1 線，享有一年保固。",
		qa: []
	},
	{
		id: "sw-1",
		thumb: "./Card_Image/DKB.webp",
		category: "遊戲",
		platform: "Switch",
		mainImage: ["./Card_Image/DKB.webp"],
		productTitle: "咚奇剛蕉力全開 + 咚奇剛 amiibo",
		productMeta: "2025-09-01",
		originalPrice: 800,
		salePrice: null,
		productStatus: "like_new", // like_new（近全新）
		st: {
			status: "近全新",
			note: "【二手】遊戲與 amiibo 都有保存，遊玩痕跡極少；包裝輕微磨損，無任何數位兌換碼。",
			location: "台北市 大安區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: USG,
		sellerName: "paly**56",
		sellerScore: 4.7,
		sellerCount: 28,
		sellerLocation: "台北市 / 大安區",
		sellerTags: ["fastShip"],
		sellerDesc: "二手遊戲與周邊售出，出貨前會做功能檢測與簡易包裝。",
		detailContent: "【二手】遊戲片運作正常、amiibo 可成功辨識；含紙盒與卡匣。",
		qa: []
	},
	{
		id: "sw-2",
		thumb: "./Card_Image/DS2CE.webp",
		category: "遊戲",
		platform: "Switch",
		mainImage: ["./Card_Image/DS2CE.webp"],
		productTitle: "死亡擱淺：典藏版（二手）",
		productMeta: "2025-08-15",
		originalPrice: 1100,
		salePrice: null,
		productStatus: "very_good", // very_good（良好）
		st: {
			status: "良好",
			note: "【二手】典藏版盒況良好，內含小物件完整（依照片為準）；碟盒無明顯刮傷。",
			location: "新北市 板橋區",
			shipping: "宅配 / 面交",
			payment: "轉帳 / 面交"
		},
		sellerAvatar: G1,
		sellerName: "Ds2CE**250626",
		sellerScore: 4.6,
		sellerCount: 19,
		sellerLocation: "新北市 / 板橋區",
		sellerTags: ["collector"],
		sellerDesc: "主要販售收藏級實體遊戲，二手品皆如實拍照說明。",
		detailContent: "【二手】含典藏版外盒與內袋，附件請參考商品圖；出貨前會再次確認包裝完整。",
		qa: []
	},
	{
		id: "sw-3",
		thumb: "./Card_Image/item_switch01.avif",
		category: "主機",
		platform: "Switch",
		mainImage: ["./Card_Image/item_switch01.avif"],
		productTitle: "九成新 Switch 主機（黑色版） — 二手",
		productMeta: "2025-07-20",
		originalPrice: 9999,
		salePrice: 8999,
		productStatus: "very_good",
		st: {
			status: "良好",
			note: "【二手】機況九成新，極少遊玩痕跡；含充電座與一組 Joy-Con（無盒）。",
			location: "台中市 北區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: S8,
		sellerName: "Ssp**5",
		sellerScore: 4.9,
		sellerCount: 86,
		sellerLocation: "台中市 / 北區",
		sellerTags: ["mintCondition", "fastShip"],
		sellerDesc: "個人私藏主機釋出，皆經基本測試後才上架。",
		detailContent: "【二手】螢幕無刮痕、按鍵回饋正常；電池健康度良好。",
		qa: []
	},
	{
		id: "sw-4",
		thumb: "./Card_Image/switch_pro2.webp",
		category: "配件",
		platform: "Switch",
		mainImage: ["./Card_Image/switch_pro2.webp"],
		productTitle: "Switch 手把（公司貨，九成新）",
		productMeta: "2025-06-10",
		originalPrice: 5000,
		salePrice: 4500,
		productStatus: "very_good",
		st: {
			status: "良好",
			note: "【二手】手把功能正常，按鍵與搖桿靈敏；外觀僅有極輕微使用痕跡，附原廠盒（盒況 8/10）。",
			location: "高雄市 苓雅區",
			shipping: "宅配 / 面交",
			payment: "轉帳 / 面交"
		},
		sellerAvatar: SP,
		sellerName: "fun31**56",
		sellerScore: 4.4,
		sellerCount: 142,
		sellerLocation: "高雄市 / 苓雅區",
		sellerTags: ["companyImport"],
		sellerDesc: "販售二手/良品配件，會提供試用前檢測。",
		detailContent: "【二手】公司貨來源，可面交試機；含充電線但不含延長握把。",
		qa: []
	},
	{
		id: "sw-5",
		thumb: "./Card_Image/switch2.webp",
		category: "主機",
		platform: "Switch",
		mainImage: ["./Card_Image/switch2.webp"],
		productTitle: "紅藍 Switch 主機（含明星大亂鬥遊戲片）",
		productMeta: "2025-05-22",
		originalPrice: 5000,
		salePrice: 4800,
		productStatus: "very_good",
		st: {
			status: "良好",
			note: "【二手】稱作二手近全新，遊玩痕跡少；隨機含大亂鬥遊戲片一片（片況良好）。",
			location: "台南市 東區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: WB,
		sellerName: "fun31**56",
		sellerScore: 4.4,
		sellerCount: 142,
		sellerLocation: "台南市 / 東區",
		sellerTags: ["bundle"],
		sellerDesc: "個人二手平台賣家，喜歡打包銷售。",
		detailContent: "【二手】含主機與遊戲片；外盒與配件以實物為準。",
		qa: []
	},
	{
		id: "sw-6",
		thumb: "./Card_Image/switch_pro2.webp",
		category: "配件",
		platform: "Switch",
		mainImage: ["./Card_Image/switch_pro2.webp"],
		productTitle: "Switch 手把（公司貨，九成新）— 重複上架",
		productMeta: "2025-06-10",
		originalPrice: 5000,
		salePrice: 4500,
		productStatus: "very_good",
		st: {
			status: "良好",
			note: "【二手】功能正常，外觀近全新；同款多件，隨機出貨。",
			location: "高雄市 苓雅區",
			shipping: "宅配 / 面交",
			payment: "轉帳 / 面交"
		},
		sellerAvatar: USG,
		sellerName: "fun31**56",
		sellerScore: 4.4,
		sellerCount: 142,
		sellerLocation: "高雄市 / 苓雅區",
		sellerTags: ["bulk"],
		sellerDesc: "二手配件多件可供選購，歡迎詢問。",
		detailContent: "【二手】功能測試正常；含基本包材。",
		qa: []
	},
	{
		id: "sw-7",
		thumb: "./Card_Image/switch2.webp",
		category: "主機",
		platform: "Switch",
		mainImage: ["./Card_Image/switch2.webp"],
		productTitle: "紅藍 Switch 主機（含明星大亂鬥）— 重複上架",
		productMeta: "2025-05-22",
		originalPrice: 5000,
		salePrice: 4800,
		productStatus: "very_good",
		st: {
			status: "良好",
			note: "【二手】同批次上架，盒況與配件以實物為準。",
			location: "台南市 東區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: G1,
		sellerName: "fun31**56",
		sellerScore: 4.4,
		sellerCount: 142,
		sellerLocation: "台南市 / 東區",
		sellerTags: ["bundle"],
		sellerDesc: "個人二手平台賣家，商品如實描述。",
		detailContent: "【二手】含主機與遊戲片；小量使用痕跡。",
		qa: []
	},
	{
		id: "sw-8",
		thumb: "./Card_Image/DS2CE.webp",
		category: "遊戲",
		platform: "Switch",
		mainImage: ["./Card_Image/DS2CE.webp"],
		productTitle: "死亡擱淺：典藏版（二手）— 重複上架",
		productMeta: "2025-08-15",
		originalPrice: 1100,
		salePrice: null,
		productStatus: "very_good",
		st: {
			status: "良好",
			note: "【二手】典藏版盒況良好，內含小物完整；如有缺件會在商品描述中註明。",
			location: "新北市 板橋區",
			shipping: "宅配 / 面交",
			payment: "轉帳 / 面交"
		},
		sellerAvatar: S8,
		sellerName: "Ds2CE**250626",
		sellerScore: 4.6,
		sellerCount: 19,
		sellerLocation: "新北市 / 板橋區",
		sellerTags: ["collector"],
		sellerDesc: "專售收藏級實體遊戲，皆如實拍照說明。",
		detailContent: "【二手】盒況良好，內含典藏配件（依實際照片為準）。",
		qa: []
	},
	{
		id: "sw-9",
		thumb: "./Card_Image/DKB.webp",
		category: "遊戲",
		platform: "Switch",
		mainImage: ["./Card_Image/DKB.webp"],
		productTitle: "咚奇剛蕉力全開 + 咚奇剛 amiibo（多件上架）",
		productMeta: "2025-09-02",
		originalPrice: 800,
		salePrice: null,
		productStatus: "like_new",
		st: {
			status: "近全新",
			note: "【二手】同款多件，保存良好；如有小差異以圖為主。",
			location: "台北市 大安區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: SP,
		sellerName: "paly**56",
		sellerScore: 4.7,
		sellerCount: 28,
		sellerLocation: "台北市 / 大安區",
		sellerTags: ["fastShip"],
		sellerDesc: "二手遊戲與周邊銷售，出貨前會做功能檢測。",
		detailContent: "【二手】卡帶與 amiibo 均能辨識與遊玩；含簡易包裝。",
		qa: []
	},
	{
		id: "sw-10",
		thumb: "./Card_Image/DKB.webp",
		category: "遊戲",
		platform: "Switch",
		mainImage: ["./Card_Image/DKB.webp"],
		productTitle: "咚奇剛蕉力全開 + 咚奇剛 amiibo（多件上架）",
		productMeta: "2025-09-03",
		originalPrice: 800,
		salePrice: null,
		productStatus: "like_new",
		st: {
			status: "近全新",
			note: "【二手】同款多件，保存良好；如有小差異以圖為主。",
			location: "台北市 大安區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: WB,
		sellerName: "paly**56",
		sellerScore: 4.7,
		sellerCount: 28,
		sellerLocation: "台北市 / 大安區",
		sellerTags: ["fastShip"],
		sellerDesc: "二手遊戲與周邊銷售，出貨前會做功能檢測。",
		detailContent: "【二手】卡帶與 amiibo 均能辨識與遊玩；含簡易包裝。",
		qa: []
	},
	{
		id: "sw-11",
		thumb: "./Card_Image/DKB.webp",
		category: "遊戲",
		platform: "Switch",
		mainImage: ["./Card_Image/DKB.webp"],
		productTitle: "咚奇剛蕉力全開 + 咚奇剛 amiibo（多件上架）",
		productMeta: "2025-09-04",
		originalPrice: 800,
		salePrice: null,
		productStatus: "like_new",
		st: {
			status: "近全新",
			note: "【二手】同款多件，保存良好；如有小差異以圖為主。",
			location: "台北市 大安區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: USG,
		sellerName: "paly**56",
		sellerScore: 4.7,
		sellerCount: 28,
		sellerLocation: "台北市 / 大安區",
		sellerTags: ["fastShip"],
		sellerDesc: "二手遊戲與周邊銷售，出貨前會做功能檢測。",
		detailContent: "【二手】卡帶與 amiibo 均能辨識與遊玩；含簡易包裝。",
		qa: []
	},
	{
		id: "sw-12",
		thumb: "./Card_Image/DS2CE.webp",
		category: "遊戲",
		platform: "Switch",
		mainImage: ["./Card_Image/DS2CE.webp"],
		productTitle: "死亡擱淺：典藏版（二手）— 再次上架",
		productMeta: "2025-08-16",
		originalPrice: 1100,
		salePrice: null,
		productStatus: "very_good",
		st: {
			status: "良好",
			note: "【二手】盒況良好，內含典藏物件；出貨前會再次確認配件完整性。",
			location: "新北市 板橋區",
			shipping: "宅配 / 面交",
			payment: "轉帳 / 面交"
		},
		sellerAvatar: G1,
		sellerName: "Ds2CE**250626",
		sellerScore: 4.6,
		sellerCount: 19,
		sellerLocation: "新北市 / 板橋區",
		sellerTags: ["collector"],
		sellerDesc: "專售收藏級實體遊戲，圖文詳述實際狀況。",
		detailContent: "【二手】保存良好，內含典藏小物（依圖為準）。",
		qa: []
	},
	{
		id: "sw-13",
		thumb: "./Card_Image/switch2.webp",
		category: "主機",
		platform: "Switch",
		mainImage: ["./Card_Image/switch2.webp"],
		productTitle: "紅藍 Switch 主機（含明星大亂鬥）— 限時優惠（二手）",
		productMeta: "2025-05-22",
		originalPrice: 5000,
		salePrice: 4500,
		productStatus: "very_good",
		st: {
			status: "良好",
			note: "【二手】限時優惠價；機況良好，附遊戲片一片，外盒與配件以實物為準。",
			location: "台南市 東區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: S8,
		sellerName: "fun31**56",
		sellerScore: 4.4,
		sellerCount: 142,
		sellerLocation: "台南市 / 東區",
		sellerTags: ["bundle", "limitedOffer"],
		sellerDesc: "二手主機釋出，均如實描述商品狀況。",
		detailContent: "【二手】外觀有使用痕跡；遊戲片運作正常，含基本配件。",
		qa: []
	},
	{
		id: "ps-2",
		thumb: "./Card_Image/item02.avif",
		category: "遊戲",
		platform: "PS",
		mainImage: ["./Card_Image/item02.avif"],
		productTitle: "《Demon's Souls》重製版",
		productMeta: "2025-04-18",
		originalPrice: 1400,
		salePrice: 1100,
		productStatus: "brand_new",
		st: {
			status: "全新",
			note: "未拆封，含原廠包裝。",
			location: "台北市 大安區",
			shipping: "宅配 / 超商取貨",
			payment: "信用卡 / 匯款"
		},
		sellerAvatar: USG,
		sellerName: "Ds2CE**250626",
		sellerScore: 4.7,
		sellerCount: 328,
		sellerLocation: "台北市 / 大安區",
		sellerTags: ["首發版"],
		sellerDesc: "專賣 PS 遊戲片，快速出貨。",
		detailContent: "重製版高畫質、全新封面。無使用紀錄。",
		qa: []
	},
	{
		id: "ps-3",
		thumb: "./Card_Image/item03.avif",
		category: "主機",
		platform: "PS",
		mainImage: ["./Card_Image/item03.avif"],
		productTitle: "PS4 Slim 500GB (二手良品)",
		productMeta: "2025-04-25",
		originalPrice: 5200,
		salePrice: 4600,
		productStatus: "very_good",
		st: {
			status: "良好",
			note: "主機表面輕微刮痕，不影響功能。",
			location: "新北市 板橋區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: G1,
		sellerName: "psslim**723158",
		sellerScore: 4.5,
		sellerCount: 210,
		sellerLocation: "新北市 / 板橋區",
		sellerTags: ["二手"],
		sellerDesc: "出清個人收藏，附電源線。",
		detailContent: "500GB 儲存，支援多數遊戲正常運作。",
		qa: []
	},
	{
		id: "ps-4",
		thumb: "./Card_Image/item04.avif",
		category: "主機",
		platform: "PS",
		mainImage: ["./Card_Image/item04.avif"],
		productTitle: "九成新 PS5 附地平線西域禁地",
		productMeta: "2025-05-02",
		originalPrice: 15880,
		salePrice: 13980,
		productStatus: "like_new",
		st: {
			status: "近全新",
			note: "使用不到 3 個月，附遊戲片。",
			location: "桃園市 中壢區",
			shipping: "宅配",
			payment: "匯款 / 信用卡"
		},
		sellerAvatar: S8,
		sellerName: "joelTLOU**188812",
		sellerScore: 4.9,
		sellerCount: 88,
		sellerLocation: "桃園市 / 中壢區",
		sellerTags: ["主機組"],
		sellerDesc: "PS 玩家誠信出售。",
		detailContent: "主機九成新，含原裝手把與地平線遊戲片。",
		qa: []
	},
	{
		id: "ps-5",
		thumb: "./Card_Image/item05.avif",
		category: "配件",
		platform: "PS",
		mainImage: ["./Card_Image/item05.avif"],
		productTitle: "DualShock 4 二手手把 (紅色)",
		productMeta: "2025-05-04",
		originalPrice: 1200,
		salePrice: 950,
		productStatus: "good",
		st: {
			status: "尚可",
			note: "按鍵靈敏，外觀有些許掉漆。",
			location: "高雄市 三民區",
			shipping: "宅配 / 超商取貨",
			payment: "匯款"
		},
		sellerAvatar: SP,
		sellerName: "redpad**914551",
		sellerScore: 4.2,
		sellerCount: 64,
		sellerLocation: "高雄市 / 三民區",
		sellerTags: ["配件"],
		sellerDesc: "二手配件專區，價格實惠。",
		detailContent: "手把功能正常，震動無異常。",
		qa: []
	},
	{
		id: "ps-6",
		thumb: "./Card_Image/item06.avif",
		category: "配件",
		platform: "PS",
		mainImage: ["./Card_Image/item06.avif"],
		productTitle: "PS VR 全套組（含攝影機）",
		productMeta: "2025-05-06",
		originalPrice: 4200,
		salePrice: 3200,
		productStatus: "acceptable",
		st: {
			status: "正常",
			note: "部分外盒受損，功能完全正常。",
			location: "台中市 西屯區",
			shipping: "宅配",
			payment: "匯款"
		},
		sellerAvatar: WB,
		sellerName: "vrbox**330912",
		sellerScore: 3.9,
		sellerCount: 52,
		sellerLocation: "台中市 / 西屯區",
		sellerTags: ["VR"],
		sellerDesc: "販售 VR 與相關設備。",
		detailContent: "全套組，含原廠攝影機與線材。",
		qa: []
	},
	{
		id: "ps-7",
		thumb: "./Card_Image/item07.avif",
		category: "遊戲",
		platform: "PS",
		mainImage: ["./Card_Image/item07.avif"],
		productTitle: "女神異聞錄 5 皇家版",
		productMeta: "2025-05-10",
		originalPrice: 1090,
		salePrice: 880,
		productStatus: "very_good",
		st: {
			status: "良好",
			note: "光碟無刮痕，盒況佳。",
			location: "新竹市 東區",
			shipping: "超商取貨",
			payment: "匯款"
		},
		sellerAvatar: USG,
		sellerName: "p5r**008833",
		sellerScore: 4.8,
		sellerCount: 155,
		sellerLocation: "新竹市 / 東區",
		sellerTags: ["JRPG"],
		sellerDesc: "遊戲收藏家，整理庫存。",
		detailContent: "含特典 DLC 序號已使用。",
		qa: []
	},
	{
		id: "ps-8",
		thumb: "./Card_Image/item08.avif",
		category: "主機",
		platform: "PS",
		mainImage: ["./Card_Image/item08.avif"],
		productTitle: "九成新 PlayStation 5 光碟版（全配）",
		productMeta: "2025-05-15",
		originalPrice: 15980,
		salePrice: 13980,
		productStatus: "like_new",
		st: {
			status: "近全新",
			note: "配件齊全，含原裝手把。",
			location: "台北市 信義區",
			shipping: "宅配",
			payment: "信用卡 / 匯款"
		},
		sellerAvatar: G1,
		sellerName: "ps5deal**992244",
		sellerScore: 4.6,
		sellerCount: 99,
		sellerLocation: "台北市 / 信義區",
		sellerTags: ["主機組"],
		sellerDesc: "短期使用，幾乎全新。",
		detailContent: "無任何維修紀錄，盒況完整。",
		qa: []
	},
	{
		id: "ps-9",
		thumb: "./Card_Image/item09.avif",
		category: "配件",
		platform: "PS",
		mainImage: ["./Card_Image/item09.avif"],
		productTitle: "九成新 PS4 手把",
		productMeta: "2025-05-17",
		originalPrice: 850,
		salePrice: 680,
		productStatus: "good",
		st: {
			status: "尚可",
			note: "輕微使用痕跡。",
			location: "台南市 北區",
			shipping: "超商取貨",
			payment: "匯款"
		},
		sellerAvatar: S8,
		sellerName: "charge**217600",
		sellerScore: 4.1,
		sellerCount: 41,
		sellerLocation: "台南市 / 北區",
		sellerTags: ["配件"],
		sellerDesc: "專營二手手把，保證正常。",
		detailContent: "原廠配件，按鍵靈敏。",
		qa: []
	},
	{
		id: "ps-10",
		thumb: "./Card_Image/item10.avif",
		category: "遊戲",
		platform: "PS",
		mainImage: ["./Card_Image/item10.avif"],
		productTitle: "戰神：諸神黃昏（中文版）",
		productMeta: "2025-05-20",
		originalPrice: 1290,
		salePrice: 990,
		productStatus: "brand_new",
		st: {
			status: "全新",
			note: "未拆封，中文版。",
			location: "嘉義市 西區",
			shipping: "宅配 / 超商取貨",
			payment: "信用卡 / 匯款"
		},
		sellerAvatar: SP,
		sellerName: "godkratos**554421",
		sellerScore: 4.9,
		sellerCount: 233,
		sellerLocation: "嘉義市 / 西區",
		sellerTags: ["動作"],
		sellerDesc: "God of War 忠實粉絲出清。",
		detailContent: "未開封，適合收藏。",
		qa: []
	},
	{
		id: "ps-11",
		thumb: "./Card_Image/item10.avif",
		category: "遊戲",
		platform: "PS",
		mainImage: ["./Card_Image/item10.avif"],
		productTitle: "戰神：諸神黃昏（限量貼紙版）",
		productMeta: "2025-05-22",
		originalPrice: 1380,
		salePrice: 1080,
		productStatus: "brand_new",
		st: {
			status: "全新",
			note: "含特典貼紙，限量販售。",
			location: "台北市 士林區",
			shipping: "宅配",
			payment: "匯款"
		},
		sellerAvatar: WB,
		sellerName: "valkyrie**442210",
		sellerScore: 4.4,
		sellerCount: 78,
		sellerLocation: "台北市 / 士林區",
		sellerTags: ["限量"],
		sellerDesc: "限量商品收購轉售。",
		detailContent: "全新盒裝，含特典貼紙。",
		qa: []
	},
	{
		id: "ps-12",
		thumb: "./Card_Image/item10.avif",
		category: "遊戲",
		platform: "PS",
		mainImage: ["./Card_Image/item10.avif"],
		productTitle: "戰神：諸神黃昏（含原聲帶序號）",
		productMeta: "2025-05-25",
		originalPrice: 1290,
		salePrice: 950,
		productStatus: "brand_new",
		st: {
			status: "全新",
			note: "含數位原聲帶序號。",
			location: "基隆市 中正區",
			shipping: "宅配",
			payment: "匯款 / 超商付款"
		},
		sellerAvatar: USG,
		sellerName: "atreus**667700",
		sellerScore: 4.6,
		sellerCount: 132,
		sellerLocation: "基隆市 / 中正區",
		sellerTags: ["特典"],
		sellerDesc: "God of War 周邊收藏家。",
		detailContent: "未拆封，含原聲帶下載序號。",
		qa: []
	},
	{
		id: "ps-13",
		thumb: "./Card_Image/item10.avif",
		category: "遊戲",
		platform: "PS",
		mainImage: ["./Card_Image/item10.avif"],
		productTitle: "戰神：諸神黃昏（外盒受損）",
		productMeta: "2025-05-28",
		originalPrice: 1190,
		salePrice: 870,
		productStatus: "good",
		st: {
			status: "尚可",
			note: "外盒邊角受損，不影響光碟。",
			location: "花蓮縣 花蓮市",
			shipping: "宅配",
			payment: "匯款"
		},
		sellerAvatar: G1,
		sellerName: "odin**009911",
		sellerScore: 4.0,
		sellerCount: 25,
		sellerLocation: "花蓮縣 / 花蓮市",
		sellerTags: ["瑕疵出清"],
		sellerDesc: "便宜出售瑕疵品。",
		detailContent: "光碟可正常使用，外盒有摺痕。",
		qa: []
	},
	{
		id: "xbox-1",
		thumb: "./Card_Image/xbox1.avif",
		category: "遊戲",
		platform: "Xbox",
		mainImage: ["./Card_Image/xbox1.avif"],
		productTitle: "《Halo Infinite》 中文版",
		productMeta: "2025-06-12",
		originalPrice: 890,
		salePrice: 790,
		productStatus: "like_new",
		st: {
			status: "近全新",
			note: "片況佳，僅拆封一次。",
			location: "台北市 中山區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: USG,
		sellerName: "halo117**000911",
		sellerScore: 4.7,
		sellerCount: 268,
		sellerLocation: "台北市 / 中山區",
		sellerTags: ["hot", "popular"],
		sellerDesc: "遊戲收藏玩家釋出，均為正版來源。",
		detailContent: "【二手】中文版本，光碟正常讀取。",
		qa: []
	},
	{
		id: "xbox-2",
		thumb: "./Card_Image/xbox2.avif",
		category: "主機",
		platform: "Xbox",
		mainImage: ["./Card_Image/xbox2.avif"],
		productTitle: "Xbox Series X（1TB）含原廠手把",
		productMeta: "2025-05-05",
		originalPrice: 14900,
		salePrice: 11900,
		productStatus: "very_good",
		st: {
			status: "良好",
			note: "附原廠配件，盒況輕微磨損。",
			location: "新北市 板橋區",
			shipping: "宅配",
			payment: "匯款 / 貨到付款"
		},
		sellerAvatar: G1,
		sellerName: "xseries**882712",
		sellerScore: 4.6,
		sellerCount: 95,
		sellerLocation: "新北市 / 板橋區",
		sellerTags: ["console", "bundle"],
		sellerDesc: "專營二手主機交易，附贈原廠保固卡影本。",
		detailContent: "【二手】九成新，1TB容量，含手把。",
		qa: []
	},
	{
		id: "xbox-3",
		thumb: "./Card_Image/xbox3.avif",
		category: "遊戲",
		platform: "Xbox",
		mainImage: ["./Card_Image/xbox3.avif"],
		productTitle: "極限競速 地平線5（Forza Horizon 5）",
		productMeta: "2025-04-22",
		originalPrice: 1350,
		salePrice: 950,
		productStatus: "good",
		st: {
			status: "尚可",
			note: "外盒有使用痕跡，光碟正常。",
			location: "高雄市 三民區",
			shipping: "宅配",
			payment: "匯款"
		},
		sellerAvatar: SP,
		sellerName: "forzah5**991122",
		sellerScore: 4.3,
		sellerCount: 65,
		sellerLocation: "高雄市 / 三民區",
		sellerTags: ["racing"],
		sellerDesc: "熱愛競速遊戲的玩家轉售。",
		detailContent: "【二手】繁體中文版，片況良好。",
		qa: []
	},
	{
		id: "xbox-4",
		thumb: "./Card_Image/xbox4.avif",
		category: "配件",
		platform: "Xbox",
		mainImage: ["./Card_Image/xbox4.avif"],
		productTitle: "二手 Xbox 無線控制器（碳黑）",
		productMeta: "2025-06-01",
		originalPrice: 1200,
		salePrice: 780,
		productStatus: "acceptable",
		st: {
			status: "正常",
			note: "按鍵有輕微磨損，但功能正常。",
			location: "台中市 北區",
			shipping: "面交",
			payment: "面交"
		},
		sellerAvatar: WB,
		sellerName: "xpad**553309",
		sellerScore: 4.2,
		sellerCount: 48,
		sellerLocation: "台中市 / 北區",
		sellerTags: ["controller"],
		sellerDesc: "釋出多餘控制器，維護良好。",
		detailContent: "【二手】原廠控制器，碳黑色。",
		qa: []
	},
	{
		id: "xbox-5",
		thumb: "./Card_Image/xbox5.avif",
		category: "配件",
		platform: "Xbox",
		mainImage: ["./Card_Image/xbox5.avif"],
		productTitle: "Xbox 官方充電組 + 電池組",
		productMeta: "2025-05-11",
		originalPrice: 750,
		salePrice: 550,
		productStatus: "like_new",
		st: {
			status: "近全新",
			note: "使用次數極少，功能正常。",
			location: "桃園市 中壢區",
			shipping: "宅配",
			payment: "匯款"
		},
		sellerAvatar: S8,
		sellerName: "xcharge**340981",
		sellerScore: 4.8,
		sellerCount: 180,
		sellerLocation: "桃園市 / 中壢區",
		sellerTags: ["battery", "accessory"],
		sellerDesc: "家用少用，現釋出。",
		detailContent: "【二手】原廠充電套組，含電池。",
		qa: []
	},
	{
		id: "xbox-6",
		thumb: "./Card_Image/xbox6.avif",
		category: "遊戲",
		platform: "Xbox",
		mainImage: ["./Card_Image/xbox6.avif"],
		productTitle: "惡靈古堡 4 重製版（Xbox版）",
		productMeta: "2025-06-15",
		originalPrice: 1250,
		salePrice: 980,
		productStatus: "very_good",
		st: {
			status: "良好",
			note: "幾乎無刮痕，光碟正常。",
			location: "台南市 永康區",
			shipping: "宅配 / 面交",
			payment: "匯款 / 面交"
		},
		sellerAvatar: G1,
		sellerName: "re4x**778812",
		sellerScore: 4.9,
		sellerCount: 305,
		sellerLocation: "台南市 / 永康區",
		sellerTags: ["horror"],
		sellerDesc: "恐怖遊戲愛好者釋出，保證正版。",
		detailContent: "【二手】最新重製版，遊戲內容完整。",
		qa: []
	},
	{
		id: "xbox-7",
		thumb: "./Card_Image/xbox7.avif",
		category: "主機",
		platform: "Xbox",
		mainImage: ["./Card_Image/xbox7.avif"],
		productTitle: "Xbox Series S 數位版主機",
		productMeta: "2025-05-28",
		originalPrice: 9990,
		salePrice: 7990,
		productStatus: "brand_new",
		st: {
			status: "全新",
			note: "公司貨未拆封，保固一年。",
			location: "台北市 信義區",
			shipping: "宅配",
			payment: "匯款 / 信用卡"
		},
		sellerAvatar: WB,
		sellerName: "xss**245566",
		sellerScore: 4.5,
		sellerCount: 132,
		sellerLocation: "台北市 / 信義區",
		sellerTags: ["console", "new"],
		sellerDesc: "數位版主機釋出，附原廠保固。",
		detailContent: "【全新】未拆封，公司貨，數位版專用。",
		qa: []
	},
	{
		id: "xbox-8",
		thumb: "./Card_Image/xbox8.avif",
		category: "配件",
		platform: "Xbox",
		mainImage: ["./Card_Image/xbox8.avif"],
		productTitle: "Elite Series 2 專業手把（盒裝）",
		productMeta: "2025-06-02",
		originalPrice: 3990,
		salePrice: 3450,
		productStatus: "like_new",
		st: {
			status: "近全新",
			note: "保存完整，附盒裝。",
			location: "台中市 西屯區",
			shipping: "宅配",
			payment: "匯款"
		},
		sellerAvatar: USG,
		sellerName: "elite2**093232",
		sellerScore: 4.8,
		sellerCount: 222,
		sellerLocation: "台中市 / 西屯區",
		sellerTags: ["controller", "pro"],
		sellerDesc: "高階玩家愛用手把，成色佳。",
		detailContent: "【二手】專業級手把，含原廠盒裝。",
		qa: []
	},
	{
		id: "xbox-9",
		thumb: "./Card_Image/xbox9.avif",
		category: "遊戲",
		platform: "Xbox",
		mainImage: ["./Card_Image/xbox9.avif"],
		productTitle: "決勝時刻：現代戰爭II",
		productMeta: "2025-04-18",
		originalPrice: 1350,
		salePrice: 890,
		productStatus: "good",
		st: {
			status: "尚可",
			note: "外盒有折痕，光碟讀取正常。",
			location: "新竹市 東區",
			shipping: "宅配",
			payment: "匯款"
		},
		sellerAvatar: S8,
		sellerName: "codmw2**651019",
		sellerScore: 4.4,
		sellerCount: 88,
		sellerLocation: "新竹市 / 東區",
		sellerTags: ["fps"],
		sellerDesc: "射擊遊戲玩家出售，附中文手冊。",
		detailContent: "【二手】完整遊戲片與外盒，支援中文。",
		qa: []
	}
];

// 更穩健的查找（lookup 查找）
export const getProductById = (rawId) => {
	const id = decodeURIComponent(String(rawId ?? '')).trim();
	return PRODUCTS.find(p => String(p.id ?? '').trim() === id);
};
