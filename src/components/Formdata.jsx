import c_username_icon from "../images/Regform_icon/c_username_icon.png"
import c_password_icon from "../images/Regform_icon/c_password_icon.png"
import c_email_icon from "../images/Regform_icon/c_email_icon.png"
import c_phone_icon from "../images/Regform_icon/c_phone_icon.png"
import c_check_icon from "../images/Regform_icon/c_check_icon.png"
import c_line_icon from "../images/Regform_icon/c_line_icon.png"


const Formdata = [
    {
        iconSrc: c_username_icon,
        line: c_line_icon,
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
        // 正確的正則表達式：使用前瞻斷言檢查至少包含兩種字符類型
        pattern: "^(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*\\d)|(?=.*[a-z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{}|;,.<>/?])|(?=.*[A-Z])(?=.*\\d)|(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{}|;,.<>/?])|(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{}|;,.<>/?])[^\\s:'\"]{8,16}$",
        minLength: 8,
        maxLength: 16,
    },
    {
        iconSrc: c_password_icon,
        line: c_line_icon,
        type: "password",
        id: "c_regPassword",
        placeholder: "請輸入密碼",
        hint: (
            <ul style={{ paddingLeft: "1em", margin: 0 }}>
                <li>*需包含數字、大寫字母、小寫字母、符號至少兩種</li>
                <li>*長度最少為8個字元，最多可以為16個字元</li>
            </ul>
        ),
        pattern: "^(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*\\d)|(?=.*[a-z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{}|;,.<>/?])|(?=.*[A-Z])(?=.*\\d)|(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{}|;,.<>/?])|(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{}|;,.<>/?])[^\\s:'\"]{8,16}$",
        minLength: 8,
        maxLength: 16,
    },
    {
        iconSrc: c_password_icon,
        line: c_line_icon,
        type: "password",
        id: "c_regPassword_2",
        placeholder: "請再次輸入密碼",
        pattern: "^(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*\\d)|(?=.*[a-z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{}|;,.<>/?])|(?=.*[A-Z])(?=.*\\d)|(?=.*[A-Z])(?=.*[!@#$%^&*()_+\\-=\\[\\]{}|;,.<>/?])|(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=\\[\\]{}|;,.<>/?])[^\\s:'\"]{8,16}$",
        minLength: 8,
        maxLength: 16,
        showErrowBelow: true
    },
    {
        iconSrc: c_email_icon,
        line: c_line_icon,
        type: "email",
        id: "c_regEmail",
        placeholder: "請輸入電子郵件信箱",
    },
    {
        iconSrc: c_phone_icon,
        line: c_line_icon,
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
        line: c_line_icon,
        type: "text",
        id: "c_regCheck",
        placeholder: "請輸入驗證碼",
        suffix: "重發驗證碼",
        maxLength: 6,
    }
]

export default Formdata