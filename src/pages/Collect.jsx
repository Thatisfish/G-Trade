import '../styles/Collect.scss'
import Sidebar from '../components/Sidebar'
import Pagination from '../components/Pagination'
import DKB from '../images/Card_Image/DKB.webp'
import DS2CE from '../images/Card_Image/DS2CE.webp'
import SWP2 from '../images/Card_Image/switch_pro2.webp'
import SW2 from '../images/Card_Image/switch2.webp'
import SWB from '../images/Card_Image/item_switch01.avif'
import CollectCard from '../components/CollectCard.jsx'
import { useState, useEffect } from 'react';




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
    },
    {
      id: 6,
      tag: '限時優惠',
      category: '配件',
      image: SWP2,
      title: 'switch 手把 公司貨 九成新 可面交',
      seller: 'fun31**56',
      priceNow: '5000',
      priceOld: '5500',
      size: 'medium'
    },
    {
      id: 7,
      tag: '限時優惠',
      image: SW2,
      category: '主機',
      title: '全新紅藍switch主機 附明星大亂鬥遊戲片全新紅藍switch主機 附明星大亂鬥遊戲片',
      seller: 'fun31**56',
      priceNow: '5000',
      priceOld: '5500',
      size: 'small'
    },
    {
      id: 8,
      tag: '全新上架',
      category: '遊戲',
      image: DS2CE,
      title: '死亡擱淺典藏版',
      seller: 'Ds2CE**250626',
      priceNow: '1100',
      size: 'medium'
    },
    {
      id: 9,
      image: DKB,
      category: '遊戲',
      title: '咚奇剛蕉力全開+咚奇剛amiibo',
      seller: 'paly**56',
      priceNow: '800',
      size: 'small'
    },
    {
      id: 10,
      image: DKB,
      category: '遊戲',
      title: '咚奇剛蕉力全開+咚奇剛amiibo',
      seller: 'paly**56',
      priceNow: '800',
      size: 'small'
    },
    {
      id: 11,
      image: DS2CE,
      category: '遊戲',
      title: '惡靈古堡2 重製版',
      seller: 'game**88',
      priceNow: '1200',
      size: 'small'
    },
    {
      id: 12,
      image: SWP2,
      category: '配件',
      title: 'Switch Pro 控制器',
      seller: 'shop**11',
      priceNow: '1800',
      size: 'small'
    },
    {
      id: 13,
      image: SW2,
      category: '主機',
      title: 'Nintendo Switch 主機 (新版)',
      seller: 'sell**99',
      priceNow: '7500',
      size: 'large'
    },
    {
      id: 14,
      image: SWB,
      category: '配件',
      title: 'Switch 保護殼組合',
      seller: 'fun**01',
      priceNow: '999',
      size: 'small'
    },
    {
      id: 15,
      tag: '限時優惠',
      category: '配件',
      image: SWP2,
      title: 'switch 手把 公司貨 九成新 可面交',
      seller: 'fun31**56',
      priceNow: '5000',
      priceOld: '5500',
      size: 'medium'
    },
    {
      id: 16,
      tag: '限時優惠',
      image: SW2,
      category: '主機',
      title: '全新紅藍switch主機 附明星大亂鬥遊戲片全新紅藍switch主機 附明星大亂鬥遊戲片',
      seller: 'fun31**56',
      priceNow: '5000',
      priceOld: '5500',
      size: 'small'
    },
  ];

  const [products, setProducts] = useState(y_products);
  const [selectedIds, setSelectedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;


  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  // 換頁（直接切換）
  const handlePageChange = (page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
  };

  // 勾選 / 取消勾選
  const toggleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
    );
  };

  // 刪除選取
  const handleRemoveSelected = () => {
    if (selectedIds.length === 0) {
      alert("請先選擇要刪除的商品");
      return;
    }
    if (window.confirm(`確定要刪除 ${selectedIds.length} 個收藏嗎？`)) {
      setProducts(prev => prev.filter(item => !selectedIds.includes(item.id)));
      setSelectedIds([]);
    }
  };

  return (
    <main className="y_Collect">
      <Sidebar />
      <div>
        {/* 麵包屑 */}
        <div >
          {/* <a href="/">首頁</a>
          <span className="divider">›</span>
          <a href="/member">會員中心</a>
          <span className="divider">›</span>
          <a href="/shop">購買中心</a>
          <span className="divider">›</span>
          <span className="current">收藏清單</span> */}
        </div>

        {/* 標題 + 批量刪除 */}
        <div className="collect_header">
          <h2>我的收藏</h2>
          <button className="remove_all_btn" onClick={handleRemoveSelected}>
            刪除選取
          </button>
        </div>

        {/* 商品清單 */}
        <div className="y_cardbox">
          {currentProducts.map(item => (
            <div key={item.id} className="selectable_card">
              <input
                type="checkbox"
                className="select_checkbox"
                checked={selectedIds.includes(item.id)}
                onChange={() => toggleSelect(item.id)}
              />
              <CollectCard {...item} />
            </div>
          ))}
        </div>

        {/* 分頁 */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </main>
  );
};

export default Collect;
