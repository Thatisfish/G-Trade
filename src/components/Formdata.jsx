import c_username_icon from "../images/Regform_icon/c_username_icon.png"
import c_password_icon from "../images/Regform_icon/c_password_icon.png"
import c_email_icon from "../images/Regform_icon/c_email_icon.png"
import c_phone_icon from "../images/Regform_icon/c_phone_icon.png"
import c_check_icon from "../images/Regform_icon/c_check_icon.png"

const Formdata = [
    {
        iconSrc: c_username_icon,
        type: "text",
        id: "c_regUser",
        placeholder: "請輸入使用者名稱",
        hint: (
            <ul style={{ paddingLeft: "1em", margin: 0 }}>
                <li>*需包含數字、大寫字母、小寫字母、符號至少兩種</li>
                <li>*不可包含空格、冒號或引號</li>
                <li>*不可保留空白</li>
                <li>*長度最少為8個字元，最多可以為16個字元</li>
            </ul>
        ),
        minLength: 8,
        maxLength: 16
    },
    {
        iconSrc: c_password_icon,
        type: "password",
        id: "c_regPassword",
        placeholder: "請輸入密碼",
        hint: (
            <ul style={{ paddingLeft: "1em", margin: 0 }}>
                <li>*需包含數字、大寫字母、小寫字母、符號至少兩種</li>
                <li>*長度最少為8個字元，最多可以為16個字元</li>
            </ul>
        ),
        minLength: 8,
        maxLength: 16,
    },
    {
        iconSrc: c_password_icon,
        type: "password",
        id: "c_regPassword_2",
        placeholder: "請再次輸入密碼",
        minLength: 8,
        maxLength: 16,
    },
    {
        iconSrc: c_email_icon,
        type: "email",
        id: "c_regEmail",
        placeholder: "請輸入電子郵件信箱",
    },
    {
        iconSrc: c_phone_icon,
        type: "tel",
        id: "c_regPhone",
        placeholder: "請輸入手機號碼",
        suffix: "獲取驗證碼",
        pattern: "^09\\d{8}$",
        minLength: 10,
        maxLength: 10,
    },
    {
        iconSrc: c_check_icon,
        type: "text",
        id: "c_regCheck",
        placeholder: "請輸入驗證碼",
        suffix: "重發驗證碼",
    }
]




export default Formdata