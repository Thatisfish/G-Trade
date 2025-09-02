import { useEffect, useRef, useState } from 'react'
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
import c_arrow from "../images/Regform_icon/c_arrow.png"
import OuterFrame from '../components/OuterFrame'

// 自訂Hook：取得前一個值
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

const Package = () => {
    const steps = [
        {
            id: 1,
            image: c_package_5,
            title: "️易碎品先包好，怕水的加強防護",
            subtxt: "將易碎物品先用緩衝材包裹、固定好位置。如果商品怕水，這步驟也建議加上防水層（如塑膠袋、防水膜）。",
        },
        {
            id: 2,
            image: c_package_6,
            title: "️易碎品先包好，怕水的加強防護",
            subtxt: "將易碎物品先用緩衝材包裹、固定好位置。如果商品怕水，這步驟也建議加上防水層（如塑膠袋、防水膜）。",
        },
        {
            id: 3,
            image: c_package_7,
            title: "填滿空隙，穩固更安心",
            subtxt: "物品放入箱中後，請用緩衝材把空隙填滿，避免物品在運送途中晃動、碰撞。",
        },
        {
            id: 4,
            image: c_package_9,
            title: "填滿空隙，穩固更安心",
            subtxt: "物品放入箱中後，請用緩衝材把空隙填滿，避免物品在運送途中晃動、碰撞。",
        },
        {
            id: 5,
            image: c_package_10,
            title: "填滿空隙，穩固更安心",
            subtxt: "物品放入箱中後，請用緩衝材把空隙填滿，避免物品在運送途中晃動、碰撞。",
        },
        {
            id: 6,
            image: c_package_11,
            title: "填滿空隙，穩固更安心",
            subtxt: "物品放入箱中後，請用緩衝材把空隙填滿，避免物品在運送途中晃動、碰撞。",
        },
        {
            id: 7,
            image: c_package_12,
            title: "封箱要確實，膠帶多貼幾條更牢靠",
            subtxt: "建議使用「十字形」、「井字形」或「H字形」的方式封箱，確保所有開口都貼緊、封好。在搬運或多次轉運時，也比較不用擔心會鬆脫。",
        },
        {
            id: 8,
            image: c_package_13,
            title: "外層防水再加一，雙重保護更安心",
            subtxt: "如果寄送的東西怕水，建議外箱再加一層塑膠袋或其他防水包裝，應對不穩定的天氣或潮濕環境。",
        }
    ];

    // 當前哪一個步驟
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    // 步驟的內容
    const currentStep = steps[currentStepIndex];

    // 前一個步驟的資料(用前面的Hook取得)
    const preImage = usePrevious(currentStep.image);
    const preTitle = usePrevious(currentStep.title);
    const preSubtxt = usePrevious(currentStep.subtxt);

    // 控制動畫狀態(是否有變? 初始狀態不觸發所以false)
    const [isImageChange, setIsImageChange] = useState(false);
    const [isTitleChange, setIsTitleChange] = useState(false);
    const [isSubtxtChange, setIsSubtxtChange] = useState(false);

    // 觸發動畫
    useEffect(() => {
        // 判斷前一個步驟 等於不等於 現在的狀態
        const imageChange = preImage !== currentStep.image;
        const titleChange = preTitle !== currentStep.title;
        const subtxtChange = preSubtxt !== currentStep.subtxt;

        // 改變的狀態存進state
        setIsImageChange(imageChange);
        setIsTitleChange(titleChange);
        setIsSubtxtChange(subtxtChange);

        const timer = setTimeout(() => {
            setIsImageChange(false);
            setIsTitleChange(false);
            setIsSubtxtChange(false);
        }, 700)
        return () => clearTimeout(timer);
        // 有變化就再執行一次
    }, [currentStep.image, currentStep.title, currentStep.subtxt]);

    // 監聽滾動
    useEffect(() => {
        const handelScroll = () => {
            // 抓包裝流程主要區塊，設為scrollEl
            const scrollEl = document.querySelector(".c_packScroll");
            // 找不到就跳出
            if (!scrollEl) return;

            // 取得scrollEl的位子資訊
            const rect = scrollEl.getBoundingClientRect();
            // 滾動的頁面高度
            const scrollTop = window.scrollY;
            // 頁面高度(設100vh)
            const stepHeight = window.innerHeight * 0.5;
            // 還沒進入c_packScroll，顯示第一張
            if (rect.top > 0) {
                setCurrentStepIndex(0);
            }
            // 進入c_packScroll，開始計算滾動/高度，判斷顯示哪一步
            else if (rect.top <= 0 && rect.bottom >= 0) {
                // scrollEl到頁面頂顛的距離
                const scrollStart = scrollEl.offsetTop;
                // 在這滾多少
                const relativeScroll = scrollTop - scrollStart;
                const index = Math.floor(relativeScroll / stepHeight);
                // 避免超過陣列長度
                setCurrentStepIndex(Math.min(Math.max(index, 0), steps.length - 1));
            }
        };
        // 滾動時執行事件監聽
        window.addEventListener("scroll", handelScroll);
        // 清除監聽
        return () => window.removeEventListener("scroll", handelScroll);
    }, [])

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
                            <OuterFrame text="堅固耐壓的紙箱" textClass="c_packPhFrame"/>
                            <p className='c_packDirections'>請使用尺寸適中、結構完整的紙箱。如果是回收紙箱，務必確保其未受損，並清除上面的舊標籤與條碼，避免造成物流混淆。</p>
                        </div>
                        <img src={c_package_1} alt="" />
                        <img src={c_package_2} alt="" />
                    </div>
                    <div className='c_packOutBox'>
                        <div className='c_packBox'>
                            <OuterFrame text="內部緩衝包材" textClass="c_packPhFrame"/>
                            <p className='c_packDirections'>您可以使用報紙、氣泡布、保麗龍粒、泡棉或碎紙等作為內襯。重點是物品在箱內不能晃動，四周要有緩衝空間，保護物品不被擠壓損壞。<br />若是易碎品，請單獨仔細包裹，並在外箱明確標示「易碎品」。</p>
                        </div>
                        <img src={c_package_3} alt="" />
                        <img src={c_package_4} alt="" />
                    </div>
                </div>
                <section className='c_packScroll'>
                    <div className='c_packScene'>
                        <div className='c_packLeft'>
                            <div className={`c_packStepImg ${isImageChange ? "fade-in" : ""}`}>
                                <img src={currentStep.image} alt="" />
                            </div>
                        </div>
                        <div className='c_packRight'>
                            <div className='c_packText'>
                                <OuterFrame text={currentStep.title} className={isTitleChange ? "fade-in" : ""} textClass="c_packPhFrame" />
                                <p className={`c_packSubtxt ${isSubtxtChange ? "fade-in" : ""}`}>{currentStep.subtxt}</p>
                                <div className='c_packArrow'>
                                    <img src={c_arrow} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="c_packScrPhone">
                    {steps.map((item, index) => {
                        // 檢查之前是否出現過
                        const isFirst = steps.findIndex((step) => step.title === item.title) === index;
                        return (
                            <div key={item.id} className="c_packStepItem">
                                {isFirst && (
                                    <div className="c_packPhText">
                                        <OuterFrame text={item.title} textClass="c_packPhFrame"/>
                                        <p className="c_packPhSub">{item.subtxt}</p>
                                    </div>
                                )}
                                <div className="c_packPhImg">
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                        );
                    })}
                </section>
            </main >

        </>
    )
}

export default Package