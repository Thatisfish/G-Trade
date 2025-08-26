import '../styles/_Escrow_Info.scss'
import React from 'react'

const Escrow_Info = () => {
    return (
        <>
            <main className='B_escrowMain'>
                <section className='B_escrowOne'>
                    <div className='B_EStitle'>
                        <div className='B_EStitle01'>
                            <h2>第三方<span>撥款</span> </h2>
                            <small>Third-party payment</small>
                        </div>

                        <p className='B_p'>確保雙方資金安全，避免詐騙或糾紛！</p>
                    </div>

                    <div className='B_esIntro'>
                        <div className='B_div'>
                            <p className='B_EStitle_p1'>為了保障雙方權益，買家在平臺進行交易時，款項不會直接從買家流向賣家，而是先由獨立的第三方支付機構代為保管，確保買家收到商品無誤後，才將款項撥付給賣家，避免交易糾紛與詐騙風險。</p>
                            <br />
                            <p className="B_EStitle_p1">所有款項經平臺保管與紀錄，可透過客服或平臺申訴流程，我們會中立協助處理。</p>
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
            </main>
        </>
    )
}

export default Escrow_Info