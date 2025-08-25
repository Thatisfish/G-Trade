import React, { useState } from 'react'
// import '../styles/Collect.scss'
import "../styles/_Real_name.scss"
import Sidebar from '../components/Sidebar'
import c_plus from "../images/Regform_icon/c_plus.png"
import verify from "../images/Regform_icon/c_verify.png"


const Real_name = () => {
  const [frontPreview, setFrontPreview] = useState(null);
  const [frontErrMsg, setFrontErrMsg] = useState('');
  const [backPreview, setBackPreview] = useState(null);
  const [backErrMsg, setBackErrMsg] = useState('');
  const [verifying, setVerifying] = useState(false)

  // 檢查圖片
  const picPreview = (file, side) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (side === 'front') {
        setFrontPreview(reader.result);
        setFrontErrMsg('');
      } else {
        setBackPreview(reader.result);
        setBackErrMsg('');
      }
    };
    reader.readAsDataURL(file);
  };

  // 檢查錯誤訊息
  const handleErr = (msg, side) => {
    if (side === 'front') {
      setFrontPreview(null);
      setFrontErrMsg(msg);
    } else {
      setBackPreview(null);
      setBackErrMsg(msg);
    }
  }

  // 送出後的錯誤訊息
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止預設送出
    // 重置錯誤訊息
    setFrontErrMsg('');
    setBackErrMsg('');
    if (!frontPreview || !backPreview) {
      if (!frontPreview) setFrontErrMsg('請上傳身分證正面圖檔');
      if (!backPreview) setBackErrMsg('請上傳身分證反面圖檔');
    }
    if (frontErrMsg || backErrMsg) return;
    setVerifying(true);
  }

  // 圖片上傳設定
  const UpLoadBox = ({ side, imgPreview, onError, label }) => {
    const picOnChange = (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const isImg = file.type.startsWith('image/');
      const isUnderFive = file.size <= 5 * 1024 * 1024;
      if (!isImg) {
        onError('請選擇圖片檔案（JPG、PNG 等）', side);
        return;
      }
      if (!isUnderFive) {
        onError('檔案大小不可超過 5MB', side);
        return;
      }
      picPreview(file, side);
    }
    return (
      <>
        <div className='c_uploadCase'>
          <div className={`c_upLoadFrame ${imgPreview ? 'hasImgPreview' : ''}`}>
            {imgPreview ? (
              <img src={imgPreview} alt="預覽" className='c_realPreview' />
            ) : (<span className='c_plus'> <img src={c_plus} alt="上傳" /> </span>)
            }
            <input type="file" className='c_upLoadInput' onChange={picOnChange} accept='image/*' required />
          </div>
          <div className='c_upLoadLabel'>{label}</div>
        </div>
      </>
    )
  }

  return (
    <>
      <main className='c_realMain'>
        <Sidebar className="c_sidebar" />
        <div className='c_realOutside'>
          <div className='y_breadcrumb'>
            <a href="/">首頁</a>
            <span className="divider">›</span>
            <a href="/member">會員中心</a>
            <span className="divider">›</span>
            <a href="/shop">購買中心</a>
            <span className="divider">›</span>
            <span className="current">實名認證</span>
          </div>

          <div className='c_realBox'>
            {verifying ? (
              <div className='c_verifyBox'>
                <h2>實名認證成功！</h2>
                <p>您已完成實名認證，可以更完整地遊玩人間</p>
                <img src={verify} alt="" />
              </div>
            ) : (
              <>
                <header className='c_realHead'>
                  <h2>為什麼需要實名認證？</h2>
                  <div className='c_realTop'>為了維護交易安全與防止不實帳號，我們將對用戶身分資訊進行實名驗證（如：身分證、健保卡等），確認使用者真實身分。無論您是買家還是賣家，都需要完成驗證，才能使用商品上架與交易等功能唷！</div>
                </header>
                <div className='c_realAlert'>*請輸入與身分證一致的資料</div>
                <form action="" className='c_realForm' onSubmit={handleSubmit}>
                  <div className='c_realTopThree'>
                    <div>
                      <label htmlFor="">姓名</label>
                      <input className='c_realName' type="text" placeholder='請輸入真實姓名' required />
                    </div>
                    <div>
                      <label htmlFor="">身分證字號</label>
                      <input className='c_realId' type="text" placeholder='請輸入身分證字號，如：A123456789' pattern='[A-Z][12][0-9]{8}' maxLength={10} required />
                    </div>
                    <div>
                      <label htmlFor="">生日</label>
                      <input type="date" required />
                    </div>
                  </div>
                  <div className='c_realUpload'>
                    <label htmlFor="">上傳證件圖檔</label>
                    <div className='c_upLoadGroup'>
                      <UpLoadBox side="front" imgPreview={frontPreview} onError={handleErr} label={"身分證正面"} />
                      {frontErrMsg && <p className='c_realErr'>{frontErrMsg}</p>}
                      <UpLoadBox side="back" imgPreview={backPreview} onError={handleErr} label={"身分證反面"} />
                      {backErrMsg && <p className='c_realErr'>{backErrMsg}</p>}

                    </div>
                  </div>
                  <div className='c_realOnly'>*為保障您的個資安全，請於空白處註明「僅供遊玩人間市集確認身分使用」</div>
                  <div className='c_realCheck'>
                    <input type="checkbox" required />
                    <span>
                      我<span className='c_realEighteen'>已年滿18歲</span>，且仔細閱讀並明瞭<a href="#">「實名驗證說明與個資蒐集聲明」</a>、<a href="#">「使用者條款」</a>、<a href="#">「隱私權聲明」</a>等及其修改後之內容，同意相關規定並願遵守網站規則 ，方可（繼續）使用本網站。
                    </span>
                  </div>
                  <button className="c_btn-realName" type="submit">確認送出</button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default Real_name