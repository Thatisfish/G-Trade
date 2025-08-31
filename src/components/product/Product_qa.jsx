import React, { useState } from 'react';
import CaptchaCanvas from "../../js/CaptchaCanvas.jsx";

const Product_qa = () => {
	// 驗證碼狀態
	const [answer, setAnswer] = useState("");   // 正確答案（由 CaptchaCanvas 傳回）
	const [input, setInput] = useState("");     // 使用者輸入
	const [msg, setMsg] = useState("");         // 顯示驗證訊息

	const handleSubmit = (e) => {
		e.preventDefault();

		// 去除空白與大小寫影響
		if (input.trim().toLowerCase() === answer.trim().toLowerCase()) {
			setMsg("驗證成功 ✅");
			// TODO: 在這裡做表單送出（localStorage 本機儲存 或 後端 API）
			// localStorage.setItem("lastForm", JSON.stringify({ content: ... }));
		} else {
			setMsg("驗證失敗，請再試一次 ❌");
		}
	};

	return (
		<div className='qa'>
			<div className='qa_item'>
				<div className="qa_header">
					<p className="qa_number">問題1</p>
					<p className="qa_user">@fjslk***sgd</p>
					<p className="qa_time">(2025.07.16 23:54:16)</p>
				</div>

				<div className="qa_question">
					<p>您好，請問還有貨嗎？</p>
				</div>

				<div className="qa_answer">
					<span className="qa_answer-label">答覆：</span>
					<p className="qa_answer-content">您好，有需要可以直接下單，謝謝。</p>
				</div>
			</div>

			<form className='qa_ask' onSubmit={handleSubmit}>
				<p className='qa_title'>提出問題</p>
				<span className='qa_policy'>
					為保障會員交易安全，留言請勿填寫個人資料、外部連結或任何導私下交易之內容，否則您送出的內容可能無法正常顯示。
				</span>

				<textarea
					name="askbox"
					className='qa_askbox'
					placeholder="(250個中文字以內)"
					maxLength={250}
				/>

				<div className='allCaptcha'>
					<div className="qa__field qa__captcha">
						{/* 驗證碼畫布元件（CaptchaCanvas component 元件） */}
						<CaptchaCanvas length={5} onChange={setAnswer} />
						<input
							type="text"
							id="captcha"
							name="captcha"
							className="qa__captcha-input"
							inputMode="text"
							autoComplete="off"
							placeholder="請輸入上方驗證碼"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							required
						/>
						{msg && <small className={`qa_msg ${msg.includes("成功") ? "ok" : "err"}`}>{msg}</small>}
					</div>
					<button className='qa_btn btn' type="submit">送出</button>
				</div>
			</form>
		</div>
	);
};

export default Product_qa;
