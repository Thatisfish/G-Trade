import '../styles/_HamburgerMenu.scss'

const HamburgerMenu = () => {
    return (
        <>
            {/* 彈窗遮罩 */}
            <div class="modalOverlay" id="modalOverlay"></div>

            {/* <彈窗選單 */}
            <div class="modal" id="modal">
                <button class="closeBtn" id="closeBtn">&times;</button>

                <div class="menuContent">

                    <ul class="menu">
                        <li class="menuItem">
                            <a href="#" class="menuLink">TOP</a><img class="arrow" src="" alt="" />
                        </li>
                        <li class="menuItem">
                            <a href="#" class="menuLink">最新消息</a>
                        </li>
                        <li class="menuItem">
                            <a href="#" class="menuLink">熱門商品</a>
                        </li>
                        <li class="menuItem">
                            <a href="#" class="menuLink">會員中心</a>
                        </li>
                        <li class="menuItem">
                            <a class="menuLink">平台特色</a>
                            <div>
                                <a href="#" class="menu_item_item">包裝宣導</a>
                                <a href="#" class="menu_item_item">第三方撥款</a>
                                <a href="#" class="menu_item_item">賣家實名制</a>
                                <a href="#" class="menu_item_item">商品狀態標示</a>
                            </div>
                        </li>
                    </ul>

                    <ul class="menu">
                        <li class="menuItem">
                            <a class="menuLink">Switch</a>
                            <div class="">
                                <a href="#" class="menu_item_item">主機</a>
                                <a href="#" class="menu_item_item">遊戲</a>
                                <a href="#" class="menu_item_item">配件</a>
                            </div>
                        </li>
                        <li class="menuItem">
                            <a class="menuLink">PS系列</a>
                            <div class="">
                                <a href="#" class="menu_item_item">主機</a>
                                <a href="#" class="menu_item_item">遊戲</a>
                                <a href="#" class="menu_item_item">配件</a>
                            </div>
                        </li>
                        <li class="menuItem">
                            <a class="menuLink">Xbox</a>
                            <div class="">
                                <a href="#" class="menu_item_item">主機</a>
                                <a href="#" class="menu_item_item">遊戲</a>
                                <a href="#" class="menu_item_item">配件</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default HamburgerMenu