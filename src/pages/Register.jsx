import Regform from '../components/Regform'
import Formdata from '../components/Formdata.jsx'
import Login from '../components/Login'
import { useState } from 'react';



const Register = () => {
  // Login彈窗
  const [showLogin, setShowLogin] = useState(true);
  return (
    <>
      {/* Login彈窗 */}
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )
      }
      <main>
        <section className='c_regWin'>
          <header className='c_regTitle'>
            <h2>加入遊玩人間</h2>
          </header>
          <form className='c_regContent'>
            {/* <input type="text" className="c_regUser" title="使用者名稱" placeholder="請輸入使用者名稱" required autoFocus /> */}
            {
              Formdata.map((field, index) => (
                <Regform key={field.id || index}{...field} />
              ))
            }
            <div>
              <input className='c_ruleCheck' type="checkbox" />
              <span>
                我<span className='c_eighteen'>已年滿18歲</span>，且仔細閱讀並明瞭<a href="#">「服務條款」</a>、<a href="#">「免責聲明」</a>、<a href="#">「隱私權聲明」</a>等內容，同意相關規定並願遵守網站規則
              </span>
            </div>
            <button className="c_btn-register" type="submit">註冊</button>
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