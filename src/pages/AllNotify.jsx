import React, { useEffect, useState } from 'react'
import "../styles/AllNotify.scss"
import Sidebar from '../components/Sidebar'
import { PRODUCTS } from '../data/products.js'
import { useNavigate } from 'react-router-dom'

const AllNotify = () => {
    const navigate = useNavigate();
    const [notices, setNotices] = useState(() => {
        const stored = sessionStorage.getItem("notices");
        if (stored) return JSON.parse(stored);

        return PRODUCTS.slice(0, 10).map((p, i) => {
            const isShopNotice = i % 3 === 0; // 偶數筆資料換成賣場通知
            return {
                id: p.id || i,
                text: isShopNotice ? `您所收藏的商品「${p.productTitle}」有價格更新！` : `您追蹤的賣場「${p.sellerName}」有新商品上架！`,
                date: new Date().toISOString().split("T")[0],
                unread: true,
                disabled: false,
                linkTo: `/product/${encodeURIComponent(p.id || i)}`
            };
        });
    });

    // 每次通知更新都同步到 sessionStorage
    useEffect(() => {
        sessionStorage.setItem("notices", JSON.stringify(notices));
    }, [notices]);

    useEffect(() => {
        function syncNotices() {
            const updated = JSON.parse(sessionStorage.getItem("notices") || "[]");
            setNotices(updated);
        }
        window.addEventListener("notice-update", syncNotices); // 監聽自訂事件
        return () => window.removeEventListener("notice-update", syncNotices);
    }, []);

    // 單筆已讀
    const readed = (id) => {
        const updated = notices.map(n =>  // 檢查每筆通知 未讀&可點
            n.id === id && n.unread && !n.disabled    // disabled不等false的時候可以用
                ? { ...n, unread: false, disabled: true }  // 已讀灰階
                : n
        );
        setNotices(updated);
        sessionStorage.setItem("notices", JSON.stringify(updated));
        window.dispatchEvent(new Event("notice-update")); // 通知 BellPopover
    };
    // 全部已讀
    const markAllAsRead = () => {
        const updated = notices.map(n =>
            n.unread && !n.disabled
                ? { ...n, unread: false, disabled: true }
                : n
        );
        setNotices(updated);
        sessionStorage.setItem("notices", JSON.stringify(updated));
        window.dispatchEvent(new Event("notice-update")); // 通知 BellPopover
    };

    const handleItemClick = (n) => {
        readed(n.id);  // 更新通知狀態
        setTimeout(() => {
            navigate(n.linkTo);  // 手動導航到通知的連結
        }, 100);
    };

    return (
        <>
            <main className='c_onMain'>
                <Sidebar />
                <div className='c_noOutside'>
                    <div className='c_noBox'>
                        <div className='c_btnBox'>
                            <h2>所有通知</h2>
                            <button className="c_allReadBtn" onClick={markAllAsRead}>
                                全部標示為已讀
                            </button>
                        </div>
                        <ul className="bell__list">
                            {notices.map(n => (
                                <li
                                    key={n.id}
                                    className={`bell__item ${n.unread ? "is-unread" : ""} ${n.disabled ? "is-disabled" : ""}`}
                                    onClick={() => handleItemClick(n)}
                                >
                                    <div className="bdt">
                                        <div className="bell__dot" />
                                        <p className="bell__text">{n.text}</p>
                                    </div>
                                    <div className="bd">
                                        <time className="bell__date">{n.date}</time>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </main>
        </>
    )
}

export default AllNotify