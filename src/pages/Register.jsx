import '../styles/_Register.scss'
import Regform from '../components/Regform'
import Formdata from '../components/Formdata.jsx'
import Login from '../components/Login'
import { useState } from 'react';



const Register = () => {
  // Login彈窗
  return (
    <>
      <main className='c_main'>
        <section className='c_regWin'>
          <header className='c_regTitle'>
            <h2>加入遊玩人間</h2>
          </header>
          <form className='c_regContent'>
            {
              Formdata.map((field, index) => (
                <Regform key={field.id || index}{...field} />
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
        </section>
      </main>

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