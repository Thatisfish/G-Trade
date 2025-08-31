import React, { useEffect, useRef, useState } from 'react'
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
import c_list_dinosaur2 from '../images/Regform_icon/c_list_dinosaur2.png'
import c_list_tree from '../images/Regform_icon/c_list_tree.png'
import OuterFrame from '../components/OuterFrame'

const ListingGuideline = () => {
    const [dinoX, setDinoX] = useState(0)
    const [dinoFrame, setDinoFrame] = useState(0)
    const [isJump, setIsJump] = useState(false)
    const [isHidden, setIsHidden] = useState(false)
    const dinoRef = useRef(null)
    const obstacleRefs = useRef([])

    const gameWidth = 600
    const dinoWidth = 60

    useEffect(() => {
        const interval = setInterval(() => {
            setDinoFrame(prevFrame => (prevFrame === 0 ? 1 : 0)) // 交換恐龍模式
            setDinoX(prev => {
                const next = prev + 7
                if (next > gameWidth && !isHidden) {
                    setIsHidden(true) // +hidden class
                    setIsJump(false)
                    setTimeout(() => {
                        setDinoX(0)
                        setTimeout(() => {
                            setIsHidden(false) // 移除hidden->淡入
                            setDinoX(0)
                        }, 300)
                    }, 1000)
                    return prev
                }
                if (isHidden) return prev
                return next
            })
            // 碰撞偵測
            obstacleRefs.current.forEach(obstacle => {
                if (!obstacle) return
                const obstacleX = obstacle.offsetLeft
                const obstacleWidth = obstacle.offsetWidth

                if (
                    dinoX + dinoWidth + 10 > obstacleX &&
                    dinoX < obstacleX + obstacleWidth &&
                    !isJump) {
                    setIsJump(true)
                    setTimeout(() => setIsJump(false), 2200)
                }
            })
        }, 100)
        return () => clearInterval(interval)
    }, [dinoX, isJump, isHidden])

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
                            <img
                                ref={dinoRef}
                                className={`c_list_dinosaur ${isJump ? 'jump' : ""} ${isHidden ? 'hidden' : ''}`}
                                src={dinoFrame === 0 ? c_list_dinosaur : c_list_dinosaur2}
                                alt="恐龍"
                                style={{ left: `${dinoX}px` }}
                            />
                            {[150, 400].map((pos, index) => (
                                <img
                                    key={index}
                                    ref={el => (obstacleRefs.current[index] = el)}
                                    className='c_list_tree'
                                    src={c_list_tree}
                                    alt="障礙物"
                                    style={{ left: `${pos}px` }}
                                />
                            ))}
                        </div>
                        <div className='c_listB'>
                            <img className='c_list_1' src={c_list_1} alt="" />
                            <p className='c_listIntro'>為了讓買賣雙方有更好的交易體驗，只要賣家符合本頁規範，平台便會加強商品推播！<br />不只買家在購物時能安心選購，賣家也更有機會將自己的商品銷售出去！</p>
                        </div>
                    </div>
                </section>
                <div className='c_listA'>
                    <div className='c_list_2'>
                        <img src={c_list_2} alt="" />
                        <span className='c_listLine1'></span>
                        <span className='c_listLine2'></span>
                        <span className='c_listLine3'></span>
                    </div>
                    <div className='c_listOutBox'>
                        <div className='c_listDirebox1'>
                            <p className='c_listTitle'><span className='c_listNum'>01</span><br />放置帳號手寫字條 </p>
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
                                <img className='c_list_dinosaur2' src={c_list_dinosaur} alt="" />
                                <img className='c_list_tree1' src={c_list_tree} alt="" />
                                <img className='c_list_tree2' src={c_list_tree} alt="" />
                                <img className='c_list_tree1' src={c_list_tree} alt="" />
                                <img className='c_list_tree3' src={c_list_tree} alt="" />
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