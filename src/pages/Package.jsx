import React from 'react'
import "../styles/_Package.scss"
import c_package_twopeople from "../images/Regform_icon/c_package_twopeople.png"

const Package = () => {
    return (
        <>
            <main className='c_packMain'>
                <section className='c_packTop'>
                    <header className='c_packHead'>
                        <div className='c_packMark'>
                            <h2>包裝<span>指南</span> </h2>
                            <small>Packaging Guide</small>
                        </div>
                        <p className='c_packSlogan'>確保您的寶物安全送達！</p>
                    </header>
                    <div className='c_packPic'>
                        <p className='c_packIntro'>適當的包裝不只可以保護商品，也是買家體驗的一部分。照著以下步驟操作，就能大幅降低包裹受損的風險，還能讓買家收到時感受到您的用心唷！</p>
                        <img className='c_package_twopeople' src={c_package_twopeople} alt="" />
                    </div>
                </section>

                <div>我是下一段</div>
            </main>

        </>
    )
}

export default Package