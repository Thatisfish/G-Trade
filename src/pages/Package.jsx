import React from 'react'
import "../styles/_Package.scss"
import c_package_twopeople from "../images/Regform_icon/c_package_twopeople.png"
import c_package_00 from "../images/Regform_icon/c_package_00.png"
import c_package_1 from "../images/Regform_icon/c_package_1.png"
import c_package_2 from "../images/Regform_icon/c_package_2.png"
import c_package_3 from "../images/Regform_icon/c_package_3.png"
import c_package_4 from "../images/Regform_icon/c_package_4.png"
import c_package_5 from "../images/Regform_icon/c_package_5.png"
import c_package_6 from "../images/Regform_icon/c_package_6.png"
import c_package_7 from "../images/Regform_icon/c_package_7.png"
import c_package_8 from "../images/Regform_icon/c_package_8.png"
import c_package_9 from "../images/Regform_icon/c_package_9.png"
import c_package_10 from "../images/Regform_icon/c_package_10.png"
import c_package_11 from "../images/Regform_icon/c_package_11.png"
import c_package_12 from "../images/Regform_icon/c_package_12.png"
import c_package_13 from "../images/Regform_icon/c_package_13.png"

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

                <div className='c_packPrepare'>
                    <p className='c_packA'>開始包裝前，請先準備好這些材料！</p>
                    <div className='c_packOutBox'>
                        <div className='c_packBox'>
                            <div className='c_packContainer'>
                                <div className='c_packTilBoxShadow'></div>
                                <div className='c_packTilBox'>
                                    <p className='c_packTitle'>堅固耐壓的紙箱</p>
                                </div>
                            </div>
                            <p className='c_packDirections'>請使用尺寸適中、結構完整的紙箱。如果是回收紙箱，務必確保其未受損，並清除上面的舊標籤與條碼，避免造成物流混淆。</p>
                        </div>
                        <img src={c_package_1} alt="" />
                        <img src={c_package_2} alt="" />
                    </div>
                    <div className='c_packOutBox'>
                        <div className='c_packBox'>
                            <div className='c_packContainer'>
                                <div className='c_packTilBoxShadow'></div>
                                <div className='c_packTilBox'>
                                    <p className='c_packTitle'>內部緩衝包材</p>
                                </div>
                            </div>
                            <p className='c_packDirections'>您可以使用報紙、氣泡布、保麗龍粒、泡棉或碎紙等作為內襯。重點是物品在箱內不能晃動，四周要有緩衝空間，保護物品不被擠壓損壞。<br />若是易碎品，請單獨仔細包裹，並在外箱明確標示「易碎品」。</p>
                        </div>
                        <img src={c_package_3} alt="" />
                        <img src={c_package_4} alt="" />
                    </div>
                </div>

            </main>

        </>
    )
}

export default Package