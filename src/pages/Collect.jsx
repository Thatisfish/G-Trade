import '../styles/Collect.scss'
import Card from "../components/Card"
import Sidebar from '../components/Sidebar'
import DKB from '../images/Card_Image/DKB.webp'
import DS2CE from '../images/Card_Image/DS2CE.webp'
import SWP2 from '../images/Card_Image/switch_pro2.webp'
import SW2 from '../images/Card_Image/switch2.webp'
import SWB from '../images/Card_Image/item_switch01.avif'



const Collect = () => {
  // 商品資料陣列
  const y_products = [
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
      image: SW2,
      category: '主機',
      title: 'Nintendo Switch 主機 (新版)',
      seller: 'sell**99',
      priceNow: '7500',
      size: 'large'
    },
    {
      id: 5,
      image: SWB,
      category: '配件',
      title: 'Switch 保護殼組合',
      seller: 'fun**01',
      priceNow: '999',
      size: 'small'
    }
  ];

  return (

    <main id="y_Collect" className="flex gap-6">
      {/* 側邊欄 */}
      <Sidebar />

      {/* 商品清單 */}
      <div className="grid grid-cols-3 gap-6 flex-1">
        {y_products.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </main>
  );
};

export default Collect;