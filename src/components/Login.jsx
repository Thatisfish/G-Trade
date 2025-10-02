import { Link, useNavigate } from 'react-router-dom';
import '../styles/_Login.scss'
import { useState } from 'react';

const Login = ({ onClose }) => {
	const navigate = useNavigate();
	const [showForget, setShowForget] = useState(false);
	const [pwErr, setPwErr] = useState(false);
	const [phone, setPhone] = useState("");  // 控制電話欄位值
	const [userName, setUserName] = useState("12345678"); // ✅ 預填帳號
	const [password, setPassword] = useState("12345678"); // ✅ 預填密碼（改為受控）

	const handleSubmit = (e) => {
		e.preventDefault();      // 阻止表單刷新（refresh 重新整理）

		if (showForget) {
			const form = e.target;
			const pw1 = form.querySelector('input[placeholder="請輸入新密碼"]').value;
			const pw2 = form.querySelector('input[placeholder="請再次輸入新密碼"]').value;
			if (pw1 !== pw2) {
				setPwErr(true); // 顯示錯誤訊息
				return;
			}
			// 重設完回登入
			setPwErr(false);
			alert('密碼已更新，請重新登入')
			setPhone('');
			setUserName(''); // demo 若想保留帳號可改成 setUserName("12345678")
			setShowForget(false);
			return;
		}

		// 登入（login 登入）
		setPwErr(false); // 清除錯誤訊息
		onClose();               // 關閉彈窗（modal 模態窗）
		navigate("/Collect");    // 跳轉（navigate 導向）到 /Collect
	};

	return (
		<>
			<div className="c_backDrop" onClick={onClose}>
				{/* 阻止點擊視窗的時候被關閉 */}
				<div className="c_loginBox" onClick={(e) => { e.stopPropagation() }}>
					<div className="c_close-btn" onClick={onClose} aria-label="關閉">
						<svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M2 2L46 46M2 46L46 2" stroke="black" strokeWidth="3" />
						</svg>
					</div>

					{
						showForget ? (
							<>
								<h2>重設密碼</h2>
								<form className="c_loginForm" method="post" onSubmit={handleSubmit}>
									<input
										type="tel"
										className="c_userPhone2"
										title="手機號碼"
										placeholder="請輸入手機號碼"
										pattern="09[0-9]{8}"
										maxLength={10}
										value={phone}
										onChange={(e) => setPhone(e.target.value)}
										required autoFocus />
									<button type="button" className='c_suffixIn'>獲取驗證碼</button>
									<input
										type="text"
										className="c_username"
										title="驗證碼"
										placeholder="請輸入驗證碼"
										maxLength={6}
										required />
									<button type="button" className='c_suffixIn2'>重發驗證碼</button>
									<input
										type="password"
										className="c_password"
										title="密碼欄位"
										placeholder="請輸入新密碼"
										minLength={8}
										maxLength={16}
										required />
									<input
										type="password"
										className="c_password"
										title="密碼欄位"
										placeholder="請再次輸入新密碼"
										minLength={8}
										maxLength={16}
										required />
									{pwErr && <p className='c_realErr'>兩次輸入的密碼不一致，請重新輸入</p>}
									<button className="c_btn-login" type="submit" >修改密碼</button>

									<div className='c_try'>
										<div className="c_join">加入我們！
											<Link to="/Register" onClick={onClose}>註冊</Link>
										</div>
										<div>
											<a className='c_forget' onClick={() => setShowForget(false)}>登入</a>
										</div>
									</div>
								</form>
							</>
						) : (
							<>
								<h2>登入</h2>
								<form className="c_loginForm" method="post" onSubmit={handleSubmit}>
									<input
										type="text"
										className="c_username"
										title="使用者名稱"
										placeholder="請輸入使用者名稱"
										minLength={8}
										maxLength={16}
										value={userName}                 // ✅ 帶入帳號
										onChange={(e) => setUserName(e.target.value)}
										required autoFocus />
									<input
										type="password"
										className="c_password"
										title="密碼欄位"
										placeholder="請輸入密碼"
										minLength={8}
										maxLength={16}
										value={password}                 // ✅ 帶入密碼
										onChange={(e) => setPassword(e.target.value)}
										required />

									<div className='c_rule'>
										繼續即表示你同意我們的<a href="#">《服務條款》</a>，<br />
										並確認你已了解<a href="#">《隱私權政策》</a>
									</div>

									<button className="c_btn-login" type="submit">登入</button>

									<div className='c_try'>
										<div className="c_join">加入我們！
											<Link to="/Register" onClick={onClose}>註冊</Link>
										</div>
										<div>
											<a className='c_forget' onClick={() => setShowForget(true)}>忘記密碼？</a>
										</div>
									</div>
								</form>
							</>
						)
					}
				</div>
			</div>
		</>
	)
}

export default Login;
