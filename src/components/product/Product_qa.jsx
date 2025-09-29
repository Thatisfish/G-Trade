import React, { useEffect, useMemo, useState } from "react";
import CaptchaCanvas from "../../js/CaptchaCanvas.jsx";

/**
 * props:
 * - productId (字串string)：用來做 localStorage（本機儲存） key
 * - initialQa (陣列array)：初始問答列表 [{ user, time, content, answer?, answerTime? }]
 */
const Product_qa = ({ productId, initialQa = [] }) => {
	// 驗證碼狀態
	const [answer, setAnswer] = useState("");   // 正確答案（由 CaptchaCanvas 傳回）
	const [input, setInput] = useState("");     // 使用者輸入（captcha）
	const [msg, setMsg] = useState("");         // 顯示驗證訊息

	// 表單狀態
	const [question, setQuestion] = useState(""); // 提問文字框
	const storageKey = useMemo(() => `qa:${productId || "default"}`, [productId]);

	// 問答列表
	const [qaList, setQaList] = useState(() => {
		try {
			const raw = localStorage.getItem(storageKey);
			return raw ? JSON.parse(raw) : initialQa;
		} catch {
			return initialQa;
		}
	});

	// 同步到 localStorage（本機儲存）
	useEffect(() => {
		try {
			localStorage.setItem(storageKey, JSON.stringify(qaList));
		} catch { }
	}, [qaList, storageKey]);

	// 產生時間字串：YYYY.MM.DD HH:mm:ss
	const nowStr = () => {
		const d = new Date();
		const pad = (n) => String(n).padStart(2, "0");
		return `${d.getFullYear()}.${pad(d.getMonth() + 1)}.${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!question.trim()) {
			setMsg("請先輸入提問內容 ❌");
			return;
		}

		// 驗證碼（captcha）比對（不分大小寫；忽略空白）
		if (input.trim().toLowerCase() !== answer.trim().toLowerCase()) {
			setMsg("驗證失敗，請再試一次 ❌");
			return;
		}

		// 建立新的提問
		const newItem = {
			user: "@guest****",          // 你日後可改成登入使用者名稱
			time: nowStr(),
			content: question.trim()
			// 可選：若賣家稍後回覆，可加上 answer / answerTime 欄位
		};

		setQaList((prev) => [newItem, ...prev]);
		setQuestion("");
		setInput("");
		setMsg("驗證成功 ✅ 已送出提問");
	};

	return (
		<div className="qa">
			{/* 列表 */}
			{qaList.length > 0 ? (
				qaList.map((item, idx) => (
					<div className="qa_item" key={idx}>
						<div className="qa_header">
							<p className="qa_number">問題{qaList.length - idx}</p>
							<p className="qa_user">{item.user}</p>
							<p className="qa_time">({item.time})</p>
						</div>

						<div className="qa_question">
							<p>{item.content}</p>
						</div>

						{item.answer && (
							<div className="qa_answer">
								<div className="qa_ans">
									<span className="qa_answer-label">答覆：</span>
									<p className="qa_answer-content">{item.answer}</p>
								</div>
								<p className="qa_time">({item.answerTime})</p>
							</div>
						)}
					</div>
				))
			) : (
				<p className="qa_empty">目前還沒有提問，成為第一個提問的人吧！</p>
			)}

			{/* 表單 */}
			<form className="qa_ask" onSubmit={handleSubmit}>
				<p className="qa_title">提出問題</p>
				<span className="qa_policy">
					為保障會員交易安全，留言請勿填寫個人資料、外部連結或任何導私下交易之內容，否則您送出的內容可能無法正常顯示。
				</span>

				<textarea
					name="askbox"
					className="qa_askbox"
					placeholder="(250個中文字以內)"
					maxLength={250}
					value={question}
					onChange={(e) => setQuestion(e.target.value)}
					required
				/>

				<div className="allCaptcha">
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
						{msg && (
							<small className={`qa_msg ${msg.includes("成功") ? "ok" : "err"}`}>
								{msg}
							</small>
						)}
					</div>
					<button className="qa_btn btn" type="submit">送出</button>
				</div>
			</form>
		</div>
	);
};

export default Product_qa;
