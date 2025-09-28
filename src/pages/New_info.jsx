import '../styles/New_info.scss'
import banner01 from '../images/banner01.webp';
import banner02 from '../images/banner02.webp';
import banner03 from '../images/Newspages/banner.avif'
import Pagination from '../components/Pagination';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const c_data = [
  {
    id: 1,
    img: banner03,
    title: '暑假遊戲入手祭，全館免運開跑！',
    content: '暑假就是要玩遊戲玩到爽！ 即日起至 9/30，只要在本平台購買任一商品（不論是主機、遊戲片，還是周邊配件），通通享有「全館免運費」優惠！不僅讓你輕鬆入手二手好物，還能省下運費成本，買得安心又划算。',
    link: '/Newspages',
  },
  {
    id: 2,
    img: banner02,
    title: '全館免運，安心入手不多花！',
    content: '限時活動開跑！於本平台購買任一商品，即享免運優惠，輕鬆下單、無負擔寄送到家！',
    link: '/Newspages',
  },
  {
    id: 3,
    img: banner01,
    title: '全館免運，安心入手不多花！',
    content: '限時活動開跑！於本平台購買任一商品，即享免運優惠，輕鬆下單、無負擔寄送到家！',
    link: '/Newspages',
  },
  {
    id: 4,
    img: banner02,
    title: '全館免運，安心入手不多花！',
    content: '限時活動開跑！於本平台購買任一商品，即享免運優惠，輕鬆下單、無負擔寄送到家！',
    link: '/Newspages',
  },
  {
    id: 5,
    img: banner01,
    title: '全館免運，安心入手不多花！',
    content: '限時活動開跑！於本平台購買任一商品，即享免運優惠，輕鬆下單、無負擔寄送到家！',
    link: '/Newspages',
  },
  {
    id: 6,
    img: banner02,
    title: '全館免運，安心入手不多花！',
    content: '限時活動開跑！於本平台購買任一商品，即享免運優惠，輕鬆下單、無負擔寄送到家！',
    link: '/Newspages',
  },
  {
    id: 7,
    img: banner01,
    title: '全館免運，安心入手不多花！',
    content: '限時活動開跑！於本平台購買任一商品，即享免運優惠，輕鬆下單、無負擔寄送到家！',
    link: '/Newspages',
  },
  {
    id: 8,
    img: banner02,
    title: '全館免運，安心入手不多花！',
    content: '限時活動開跑！於本平台購買任一商品，即享免運優惠，輕鬆下單、無負擔寄送到家！',
    link: '/Newspages',
  },
  {
    id: 9,
    img: banner01,
    title: '全館免運，安心入手不多花！',
    content: '限時活動開跑！於本平台購買任一商品，即享免運優惠，輕鬆下單、無負擔寄送到家！',
    link: '/Newspages',
  },
  {
    id: 10,
    img: banner02,
    title: '全館免運，安心入手不多花！',
    content: '限時活動開跑！於本平台購買任一商品，即享免運優惠，輕鬆下單、無負擔寄送到家！',
    link: '/Newspages',
  },
  {
    id: 11,
    img: banner01,
    title: '全館免運，安心入手不多花！',
    content: '限時活動開跑！於本平台購買任一商品，即享免運優惠，輕鬆下單、無負擔寄送到家！',
    link: '/Newspages',
  },
  {
    id: 12,
    img: banner02,
    title: '全館免運，安心入手不多花！',
    content: '限時活動開跑！於本平台購買任一商品，即享免運優惠，輕鬆下單、無負擔寄送到家！',
    link: '/Newspages',
  },
];

const CNewCard = ({ img, title, content, link = '#' }) => {
  return (
    <div className="new-card">
      <img src={img} alt={title} />
      <div className="newfont">
        <h4>{title}</h4>
        <p>{content}</p>
        <Link to={link} className='C_readMore'>Read more</Link>
      </div>
    </div>
  );
};

const CNews = ({ items }) => {
  return (
    <div className="c_news">
      {items.map(item => (
        <CNewCard
          key={item.id}
          img={item.img}
          title={item.title}
          content={item.content}
          link={item.link}
        />
      ))}
    </div>
  );
};



const New_info = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(c_data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = c_data.slice(startIndex, startIndex + itemsPerPage);


  const handlePageChange = (page) => {
    if (page === currentPage) return;
    setCurrentPage(page);
  };
  return (
    <>
      <main id='New_info'>
        <header className='c_newHead'>
          <h2>最新消息</h2>
          <p>NEWS</p>
        </header>
        <div className='c_newNewBox'>
          <CNews items={currentItems} />

        </div>
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />

      </main>
    </>
  )
}

export default New_info