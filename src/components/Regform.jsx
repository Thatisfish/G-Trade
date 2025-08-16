import '../styles/_Regform.scss'

const Regform = ({ iconSrc, type, id, placeholder, suffix, hint, pattern, minLength, maxLength }) => {
    return (
        <>
            <div className='c_inputOut'>
                <div className='c_inputPlace'>
                    {/* 左邊icon */}
                    {iconSrc && <img src={iconSrc} className='c_inputIcon' alt={`${placeholder}圖示`} />}
                    {/* 輸入欄位 */}
                    <input className='c_inputBox'
                        type={type}
                        id={id}
                        name={id}
                        placeholder={placeholder}
                        pattern={pattern}  /* 格式限制 */
                        minLength={minLength}
                        maxLength={maxLength}
                        required
                    />
                    {/* 右邊小提示 suffix後綴*/}
                    {suffix && <button type="button" className='c_suffixIn'>{suffix}</button>}
                </div>
                {/* 提示 hint */}
                {hint && <div className='c_hintIn'>{hint}</div>}
            </div>
        </>
    )
}

export default Regform