import '../styles/_RealN_Info.scss'
import OuterFrame from '../components/OuterFrame'
import B_Img1 from '../images/RealName/realN_img1.avif'
import B_Img2 from '../images/RealName/realN_img2.avif'
import B_Img3 from '../images/RealName/realN_img3.avif'
import B_Img4 from '../images/RealName/realN_img4.avif'
import B_Img5 from '../images/RealName/realN_img5.avif'
import B_Img6 from '../images/RealName/realN_img6.avif'
import B_Img7 from '../images/RealName/realN_img7.avif'
import B_Img8 from '../images/RealName/realN_img8.avif'
import B_Img9 from '../images/RealName/realN_img9.webp'
import B_Img10 from '../images/RealName/realN_img10.avif'
import B_Img11 from '../images/RealName/realN_img11.webp'
import B_Img12 from '../images/RealName/realN_img12.avif'
import B_Img13 from '../images/RealName/realN_img13.avif'

const RealN_Info = () => {
    return (
        <>
            <main className='B_main'>
                <section className='B_one'>
                    <div className='B_RNtitle'>
                        <div className='B_RNtitle01'>
                            <h2>實名<span>登錄</span> </h2>
                            <small>Real Name Login</small>
                        </div>

                        <p className='B_p'>更可靠的資訊，更安心的交易，更友善的環境</p>
                    </div>

                    <div className='B_intro'>
                        <div className='B_div'>
                            <p className='B_RNtitle_p1'>為了維護交易安全與防止不實帳號，我們將對用戶身分資訊進行實名驗證（如：身分證），確認使用者真實身分。</p>
                            <br />
                            <p className="B_RNtitle_p1">無論您是買家還是賣家，都需要完成驗證，才能使用商品上架與交易等功能唷！</p>
                        </div>
                        <div className='B_div2'>
                            <img className='B_img1' src={B_Img1} alt="實名制圖片1" />
                            <div className='B_div2_div'>
                                <span className='B_sp'>降低詐騙風險</span>
                                <img className='B_img2' src={B_Img2} alt="實名制圖片2" />
                            </div>
                            <div className='B_div2_div'>
                                <span className='B_sp'>使用更多功能</span>
                                <img className='B_img2' src={B_Img3} alt="實名制圖片3" />
                            </div>
                        </div>
                    </div>
                </section>


                <section className="B_two">
                    <img className='B_img3' src={B_Img4} alt="" />
                    <h2 className='B_h2'>為什麼要實名認證呢？</h2>

                    <div className="B_why">
                        <div className='B_why1'>
                            <img className='B_img4' src={B_Img5} alt="" />
                            <OuterFrame text="提升帳號安全性" textClass="c_packPhFrame" />
                        </div>
                        <div className='B_why1'>
                            <OuterFrame text="降低詐騙風險" textClass="c_packPhFrame" />
                            <img className='B_img5' src={B_Img6} alt="" />
                        </div>
                        <div className='B_why1'>
                            <img className='B_img4' src={B_Img7} alt="" />
                            <OuterFrame text="建立可信用戶群體" textClass="c_packPhFrame" />
                        </div>
                        <div className='B_why1'>
                            <OuterFrame text="減少網路騷擾和惡意評價" textClass="c_packPhFrame" />
                            <img className='B_img5' src={B_Img8} alt="" />
                        </div>
                    </div>

                    <div className='B_div3'>
                        <p className='B_p2'>確保每一筆交易背後，都是「真實玩家」!</p>
                        <img className='B_img6' src={B_Img9} alt="" />
                    </div>
                </section>

                <section className='B_three'>
                    <div className='B_div4'>
                        <img className='B_img7' src={B_Img10} alt="" />
                        <h2 className='B_h2'>我需要準備什麼資料？</h2>
                    </div>
                    <div className='B_how'>
                        <img className='B_img6' src={B_Img11} alt="" />
                        <OuterFrame textClass='B_how_p' text="只需要準備「身分證」！就可以完成遊玩人間的實名驗證囉！" />
                    </div>

                    <div className='B_div5'>
                        <div className='B_divImg'>
                            <img className='B_img7' src={B_Img12} alt="" />
                            <img className='B_img7' src={B_Img13} alt="" />
                        </div>
                        <button className='RNbtn'>立即認證 </button>
                    </div>
                </section>
            </main>
        </>

    )
}

export default RealN_Info