import React from 'react'

const Product_qa = () => {
	return (
		<div className='qa'>
			<div className='qa_item'>
				<div class="qa_header">
					<p class="qa_number">問題1</p>
					<p class="qa_user">@fjslk***sgd</p>
					<p class="qa_time">(2025.07.16 23:54:16)</p>
				</div>
				<div class="qa_question">
					<p>您好，請問還有貨嗎？</p>
				</div>

				<div class="qa_answer">
					<span class="qa_answer-label">答覆：</span>
					<p class="qa_answer-content">您好，有需要可以直接下單，謝謝。</p>
				</div>
			</div>
			<div className='qa_ask'>
				<p className='qa_title'>提出問題</p>
				<span className='qa_policy'>為保障會員交易安全，留言請勿填寫個人資料、外部連結或任何導私下交易之內容，否則您送出的內容可能無法正常顯示。</span>
				<textarea name="" className='qa_askbox' placeholder="(250個中文字以內)" maxlength="250"></textarea>
				<div className='allCaptcha'>
					<div className="qa__field qa__captcha">
						<div className='captcha'>這裡是還沒放的驗證碼插件</div>
						<input
							type="text"
							id="captcha"
							name="captcha"
							className="qa__captcha-input"
							inputMode="numeric"
							autoComplete="off"
							placeholder="請輸入上方驗證碼"
							required
						/>
					</div>
					<button className='qa_btn btn'>送出</button>
				</div>
			</div>
		</div>
	)
}

export default Product_qa