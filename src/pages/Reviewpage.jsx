import '../styles/Reviewpage.scss'
import Card from "../components/Card"
import check from '../images/ProductPage/check.svg'
import fastShip from '../images/ProductPage/fastShip.svg'
import quickReply from '../images/ProductPage/quickReply.svg'
import user from '../images/ProductPage/user.jpg'
import star from '../images/ProductPage/star.svg'

import DKB from '../images/Card_Image/DKB.webp'
import DS2CE from '../images/Card_Image/DS2CE.webp'
import SWP2 from '../images/Card_Image/switch_pro2.webp'
import SWB from '../images/Card_Image/item_switch01.avif'

export default function Reviewpage() {

  const y_newproducts = [
    {
      id: 1,
      image: DKB,
      category: '遊戲',
      title: '咚奇剛蕉力全開+咚奇剛amiibo',
      seller: 'paly**56',
      priceNow: '800',
      size: 'small'
    },
    {
      id: 2,
      image: DS2CE,
      category: '遊戲',
      title: '惡靈古堡2 重製版',
      seller: 'game**88',
      priceNow: '1200',
      size: 'small'
    },
    {
      id: 3,
      image: SWP2,
      category: '配件',
      title: 'Switch Pro 控制器',
      seller: 'shop**11',
      priceNow: '1800',
      size: 'small'
    },
    {
      id: 4,
      image: SWB,
      category: '配件',
      title: 'Switch 保護殼組合',
      seller: 'fun**01',
      priceNow: '999',
      size: 'small'
    },
  ]

  return (
    <div className="y_Reviewpage">
      {/* 個人資料區塊 */}
      <div className="y_seller">
        <div className="y_seller__profile">
          <img src={user} alt="賣家頭像" className="y_seller__avatar" />
          <p className="y_seller__name">@fun31**56</p>
        </div>

        <div className="y_seller__stats">
          <div className="y_seller__rating">
            <span className="y_seller__score">4.8</span>
            <img src={star} alt="" />
            <span className="y_seller__count">(518則評價)</span>
            <p className="y_seller__location">台北市/萬華區</p>
          </div>
          <div className="y_seller__desc">
            <p>
              個人賣場，商品多九成新，基本上24小時內回覆，歡迎使用留言提問及聊聊^^
            </p>
          </div>
          <div className="y_seller__tags">
            <img src={check} alt="" />
            <img src={fastShip} alt="" />
            <img src={quickReply} alt="" />
          </div>
        </div>
        <div className="y_seller__actions">
          <button className="btn">追蹤+</button>
          <button className="btn">聊聊</button>
        </div>
      </div>

      {/* 按鈕區塊 */}
      <div className="y_categories">
        <button className="y_btn y_btn--red">主機 (3)</button>
        <button className="y_btn y_btn--red">遊戲 (8)</button>
        <button className="y_btn y_btn--red">配件 (0)</button>
      </div>


      {/* 最新商品區塊 */}
      <div className="latest_products">
        <div className='section_header'>
          <h3 className="section_title">最新商品</h3>
          <button
            className="view_more"
            onClick={() => console.log('跳轉到商品列表')}
          >
            查看更多商品▶︎
          </button>

        </div>
        <div className="y_newproducts">
          {y_newproducts.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              priceNow={item.priceNow}
              seller={item.seller}
              image={item.image}
              category={item.category}
              size={item.size}
              onClick={() => console.log(`查看 ${item.title}`)}
            />
          ))}
        </div>
      </div>

      {/* 過去交易區塊 */}
      <div className="past_transactions">
        <div className='past_header'>
          <h3 className="past_title">過去交易</h3>
          <button
            className="past_view_more"
            onClick={() => console.log('跳轉到評價列表')}
          >
            查看更多評價▶︎
          </button>
        </div>

        {[1, 2, 3].map((i) => (
          <div key={i} className="transaction">
            <p>2025.06.14 18:12:18 hell**38 商品與圖片相符...</p>
            <div className="rating_bar">
              <div className="bar" />
              <span>5.0 ★</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}