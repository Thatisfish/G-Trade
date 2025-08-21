import React from 'react'
import banner01 from '../images/banner01.webp'
import banner02 from '../images/banner02.webp'
const NewsCard = () => {
    return (
        <a href="">
            <img src={banner01} alt="" />
            <div className='newfont'>
                <h4>全館免運，安心入手不多花！</h4>
                <p>限時活動開跑！於本平台購買任一商品，即享免運優惠，輕鬆下單、無負擔寄送到家！</p>
            </div>
        </a>
    )
}

export default NewsCard