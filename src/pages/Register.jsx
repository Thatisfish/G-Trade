import '../styles/_Register.scss'
import Regform from '../components/Regform'
import Formdata from '../components/Formdata.jsx'
import { useState } from 'react';
import { DiVim } from 'react-icons/di';
import c_success from "../images/Regform_icon/c_success.webp"

const Register = () => {
  const [regInput, setRegInput] = useState({
    c_regUser: '',
    c_regPassword: '',
    c_regPassword_2: '',
    c_regEmail: '',
    c_regPhone: '',
    c_regCheck: '',
  });
  const [regErrMsg, setRegErrMsg] = useState("");
  const [regSuccess, setRegSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegInput(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (regInput.c_regPassword !== regInput.c_regPassword_2) {
      setRegErrMsg("兩次輸入的密碼不一致，請重新輸入");
      return;
    }
    setRegErrMsg('');
    setRegSuccess(true);
  }
  return (
    <>
      <main className='c_main'>
        <section className='c_regWin'>
          {regSuccess ? (
            <div className='c_successBox'>
              <h2>註冊成功！</h2>
              <p>歡迎加入遊玩人間！</p>
              <img src={c_success} alt="" />
              <button type='button' className='c_regLoginNow'>立即登入</button>
            </div>
          ) : (
            <>
              <header className='c_regTitle'>
                <h2>加入遊玩人間</h2>
              </header>
              <form className='c_regContent' onSubmit={handleSubmit}>
                {
                  Formdata.map((field, index) => (
                    <div key={field.id || index}>
                      <Regform
                        {...field}
                        value={regInput[field.id] || ''}
                        onChange={handleChange}
                      />
                      {field.id === "c_regPassword_2" && regErrMsg && (
                        <p className='c_regErr'>{regErrMsg}</p>
                      )}
                    </div>
                  ))
                }
                <div className='c_ruleCheck'>
                  <input type="checkbox" required />
                  <span>
                    我<span className='c_eighteen'>已年滿18歲</span>，且仔細閱讀並明瞭<a href="#">「服務條款」</a>、<a href="#">「免責聲明」</a>、<a href="#">「隱私權聲明」</a>等內容，同意相關規定並願遵守網站規則
                  </span>
                </div>
                <button className="c_btn-register" type="submit">註冊</button>
                <div className='c_regLogin'>
                  已經加入了！<a href="#">登入</a>
                </div>
              </form>
            </>
          )}
        </section>
      </main >
    </>
  )
}
export default Register


// 要重新觸發的時候用的
// const [showLogin, setShowLogin] = useState(false);

// return (
//   <>
//     <Icon onClick={() => setShowLogin(true)} />
//     {showLogin && <Login onClose={() => setShowLogin(false)} />}
//   </>
// );