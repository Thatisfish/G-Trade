import '../styles/_Register.scss'
import Regform from '../components/Regform'
import Formdata from '../components/Formdata.jsx'
import { useEffect, useState } from 'react';
import c_success from "../images/Regform_icon/c_success.webp"
import { useLocation, useNavigate } from 'react-router-dom';

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
  const [importError, setImportError] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  // 驗證使用者名稱
  const checkUsername = (username) => {
    if (!username) return "請輸入使用者名稱";
    if (username.length < 8 || username.length > 16) {
      return "使用者名稱長度須為8-16個字元"
    }
    if (/[\s:'"]/.test(username)) {
      return "使用者名稱不可包含空格、冒號或引號"
    }

    const hasLow = /[a-z]/.test(username);
    const hasUpper = /[A-Z]/.test(username);
    const hasNum = /\d/.test(username);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};,.<>/?]/.test(username);

    const typeCount = [hasLow, hasUpper, hasNum, hasSpecial].filter(Boolean).length;

    if (typeCount < 2) {
      return "使用者名稱需包含數字、大寫字母、小寫字母、符號至少兩種"
    }
    return "";
  };
  // 驗證密碼
  const checkPassword = (password) => {
    if (!password) return "請輸入密碼";
    if (password.length < 8 || password.length > 16) {
      return "密碼長度須為8-16個字元"
    }

    const hasLow = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasNum = /\d/.test(password);
    const hasSpecial = /[!@#$%^&*()_+\-=\[\]{};,.<>/?]/.test(password);

    const typeCount = [hasLow, hasUpper, hasNum, hasSpecial].filter(Boolean).length;

    if (typeCount < 2) {
      return "密碼需包含數字、大寫字母、小寫字母、符號至少兩種"
    }
    return "";
  };

  // 欄位驗證
  const checkField = (field, value) => {
    let error = '';
    switch (field) {
      case 'c_regUser':
        error = checkUsername(value);
        break
      case 'c_regPassword':
        error = checkPassword(value);
        break
      case 'c_regPassword_2':
        error = checkPassword(value);
        if (!error && value !== regInput.c_regPassword) {
          error = "兩次輸入的密碼不一致";
        }
        break;
      case 'c_regEmail':
        if (!value) {
          error = "請輸入電子郵件";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "請輸入正確的電子郵件格式";
        }
        break;

      case 'c_regPhone':
        if (!value) {
          error = "請輸入手機號碼";
        } else if (!/^09\d{8}$/.test(value)) {
          error = "請輸入正確的手機號碼格式";
        }
        break;

      case 'c_regCheck':
        if (!value) {
          error = "請輸入驗證碼";
        } else if (value.length !== 6) {
          error = "驗證碼必須為6碼";
        }
        break;
      default:
        break;
    }
    return error;
  };


  useEffect(() => {
    // 每次進入頁面都重置狀態
    setRegSuccess(false);
    setRegErrMsg('');
    setImportError({});
    setRegInput({
      c_regUser: '',
      c_regPassword: '',
      c_regPassword_2: '',
      c_regEmail: '',
      c_regPhone: '',
      c_regCheck: '',
    });
    // location.key會在每次跳轉更新，同一路徑也能觸發
  }, [location.key]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegInput(prev => ({ ...prev, [name]: value }));

    // 即時驗證
    const error = checkField(name, value);
    setImportError(prev => ({ ...prev, [name]: error }));

    // 如果密碼確認欄位變更，重新驗證密碼2
    if (name === 'c_regPassword' && regInput.c_regPassword_2) {
      const confirmError = checkField('c_regPassword_2', regInput.c_regPassword_2);
      setImportError(prev => ({ ...prev, c_regPassword_2: confirmError }));
    }
    // 清除全域錯誤訊息
    if (regErrMsg) setRegErrMsg('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 驗證所有欄位
    const errors = {};
    Object.keys(regInput).forEach(fieldId => {
      const error = checkField(fieldId, regInput[fieldId]);
      if (error) errors[fieldId] = error;
    })

    // 如果有錯顯示第一個錯誤訊息
    const firstError = Object.values(errors)[0];
    if (firstError) {
      setRegErrMsg(firstError);
      return;
    }

    // 驗證都通過
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
              <button
                type='button'
                className='c_regLoginNow'
                onClick={() => navigate("/", { state: { openLogin: true } })}
              >立即登入</button>
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
                        error={importError[field.id]}
                      />
                      {/* 顯示個別欄位錯誤訊息 */}
                      {importError[field.id]
                        && (
                          <p className='c_regErr'>{importError[field.id]}</p>
                        )}
                      {/* 密碼欄位錯誤訊息 */}
                      {field.id === "c_regPassword_2" && regErrMsg && !importError[field.id] && (
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
                  已經加入了！<a href="#" onClick={(e) => {
                    e.preventDefault();
                    navigate("/", { state: { openLogin: true } })
                  }}>登入</a>
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