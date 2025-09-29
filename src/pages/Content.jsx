import React from 'react'
import '../styles/_Content.scss'
import Sidebar from '../components/Sidebar'

function Content() {
    return (
        <main className="J_ContentPage">
            <h1 className="J_ContentTitle">聯絡我們</h1>

            <div className="J_ContentContainer">

                <Sidebar />

                <div className="J_ContentForm">
                    <form
                        name="contactform"
                        id="contactform"
                        action=""
                        method="post"
                        acceptCharset="UTF-8"
                    >
                        <label htmlFor="username">*姓名：</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            title="姓名欄位"
                            placeholder="請輸入您的姓名"
                            required
                            autoFocus
                        />

                        <label htmlFor="tel">聯絡電話：</label>
                        <input
                            type="tel"
                            name="tel"
                            id="tel"
                            maxLength={10}
                            title="聯絡電話欄位"
                            placeholder="例如：0987654321"
                        />

                        <label htmlFor="email">*Email：</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            title="Email欄位"
                            placeholder="請輸入Email"
                            required
                        />

                        <label htmlFor="message">留言：</label>
                        <textarea
                            name="message"
                            id="message"
                            rows={6}
                            placeholder="請輸入您的意見"
                        />

                        <button className="btn-animat" type="submit">
                            <span>送出</span>
                        </button>
                    </form>
                </div>

            </div>
        </main>
    )
}

export default Content