import '../styles/_Login.scss'

const Login = ({ onClose }) => {

    return (
        <>
            <div className="c_backDrop" onClick={onClose}>
                {/* 阻止點視窗的時候被關閉*/}
                <div className="c_loginBox" onClick={(e) => { e.stopPropagation() }}>
                    <div className="c_close-btn" onClick={onClose} aria-label="關閉" >
                        <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 2L46 46M2 46L46 2" stroke="black" strokeWidth="3" />
                        </svg>
                    </div>
                    <h2>登入</h2>
                    <form className="c_loginForm" action="" method="post" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
                        <input type="text" className="c_username" title="使用者名稱" placeholder="請輸入使用者名稱" required autoFocus />
                        <input type="password" className="c_password" title="密碼欄位" placeholder="請輸入密碼" required />
                        <div className='c_rule'>繼續即表示你同意我們的<a href="#">《服務條款》</a>，<br />並確認你已了解<a href="#">《隱私權政策》</a></div>
                        <button className="c_btn-login" type="submit">登入</button>
                        <div className='c_try'>
                            <div className='c_join'>加入我們！<a href="#">註冊</a></div>
                            <div>
                                <a className='c_forget' href="#">忘記密碼？</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login




/* 在某一頁按出會員登入畫面，但要點旁邊或x關閉的時候要放這段 */
/* 直接放在 App.jsx（或 Layout / _app.js 這種全域容器） */
// import { useState } from 'react';
// import Login from './components/Login'; // 路徑依你專案結構調整

// export default function App() {
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
//       <button onClick={() => setShowLogin(true)}>開啟登入視窗</button>

//       {showLogin && (
//         <Login onClose={() => setShowLogin(false)} />
//       )}
//     </>
//   );
// }