import React from 'react'
import "../styles/_ListingGuideline.scss"
import c_list_1 from '../images/Regform_icon/c_list_1.png'
import c_list_2 from '../images/Regform_icon/c_list_2.png'
import c_list_3 from '../images/Regform_icon/c_list_3.png'
import c_list_4 from '../images/Regform_icon/c_list_4.png'
import c_list_5 from '../images/Regform_icon/c_list_5.png'
import c_list_6 from '../images/Regform_icon/c_list_6.png'
import c_list_7 from '../images/Regform_icon/c_list_7.png'
import c_list_8 from '../images/Regform_icon/c_list_8.png'
import c_list_dinosaur from '../images/Regform_icon/c_list_dinosaur.png'
import c_list_tree from '../images/Regform_icon/c_list_tree.png'
import OuterFrame from '../components/OuterFrame'

const ListingGuideline = () => {
    return (
        <>
            <main className='c_listMain'>
                <section className='c_listTop'>
                    <header className='c_listHead'>
                        <div className='c_listMark'>
                            <h2>上架<span>規範</span> </h2>
                            <small>Listing Guidelines</small>
                        </div>
                        <p className='c_listSlogan'>維護交易品質與用戶權益，提升用戶體驗！</p>
                    </header>
                    <div className='c_listPic'>
                        <div className='c_listPicBox'>
                            <img className='c_list_dinosaur' src={c_list_dinosaur} alt="" />
                            <img className='c_list_tree' src={c_list_tree} alt="" />
                            <img className='c_list_tree' src={c_list_tree} alt="" />
                            <img className='c_list_1' src={c_list_1} alt="" />
                        </div>
                        <p className='c_listIntro'>為了讓買賣雙方有更好的交易體驗，只要賣家符合本頁規範，平台便會加強商品推播！<br />不只買家在購物時能安心選購，賣家也更有機會將自己的商品銷售出去！</p>
                    </div>
                </section>
                <div className='c_listA'>
                    <div className='c_list_2'>
                        <img src={c_list_2} alt="" />
                    </div>
                    <div className='c_listOutBox'>
                        <div className='c_listDirebox1'>
                            <p className='c_listTitle'><span className='c_listNum'>01</span><br />放置帳號手寫字條</p>
                            <p className='c_lisrDirections'>請在商品旁放置手寫的帳號名稱字卡（使用紙張書寫賣場帳號），以驗證商品為本人持有。</p>
                            <img className='c_list_6' src={c_list_6} alt="" />
                        </div>
                        <div className='c_listBubble'>
                            <img className='c_list_8' src={c_list_8} alt="" />
                        </div>
                        <div className='c_listDirebox2'>
                            <p className='c_listTitle'><span className='c_listNum'>02</span><br />商品照越詳細越好</p>
                            <p className='c_lisrDirections'>上傳多張詳細的商品照，如各個角度的商品外觀，或清楚的二手商品使用痕跡，方便買家評估同時也避免日後的交易糾紛。 </p>
                            <img className='c_list_7' src={c_list_7} alt="" />
                        </div>
                        <div className='c_listDirebox3'>
                            <p className='c_listTitle'><span className='c_listNum'>03</span><br />名稱精準　分類正確</p>
                            <div className='c_listRun'>
                                <img className='c_list_dinosaur' src={c_list_dinosaur} alt="" />
                                <img className='c_list_tree' src={c_list_tree} alt="" />
                                <img className='c_list_tree' src={c_list_tree} alt="" />
                                <img className='c_list_tree' src={c_list_tree} alt="" />
                                <img className='c_list_tree' src={c_list_tree} alt="" />
                            </div>
                            <OuterFrame textClass="c_listTxt" text="不使用與商品無關的關鍵字，清楚描述商品內容、使用狀況、是否含原包裝...等情況；上架時選擇正確的分類與分級。" />
                        </div>
                    </div>
                    <div className='c_lisrCorrBox'>
                        <div className='c_listCorrect'>
                            <img className='c_listIcon' src={c_list_3} alt="" />
                            <ul>
                                <li><span>標題清楚具體</span>（如「Switch 瑪利歐奧德賽 中文版」）</li>
                                <li><span>描述詳實</span>（保存狀況、語言、是否含原包裝）</li>
                                <li><span>上架時選擇正確的分類</span>（如：Switch / PS5 / Steam 等）</li>
                            </ul>
                        </div>
                        <div className='c_listCorrect'>
                            <img className='c_listIcon' src={c_list_4} alt="" />
                            <ul>
                                <li>標題略模糊（如「瑪利歐遊戲」）</li>
                                <li>描述有部分資訊，但不完整</li>
                                <li>分類可能略有偏差（如：Switch的遊戲，選成配件）</li>
                            </ul>
                        </div>
                        <div className='c_listCorrect'>
                            <img className='c_listIcon' src={c_list_5} alt="" />
                            <ul>
                                <li>標題模糊或誤導（如「好玩遊戲」） </li>
                                <li>描述空白或過於簡短</li>
                                <li>禁止使用誇張詞語（如：限時瘋搶、全網最低、必買等）</li>
                                <li>分類錯誤（如：Switch選成PS5）</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default ListingGuideline