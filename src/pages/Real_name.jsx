import React, { useState } from 'react'
import "../styles/_Real_name.scss"
import UpLoadBox from '../components/UpLoadBox';

const Real_name = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [errMsg, setErrMsg] = useState('');
  const picPreview = (file) => {
    setErrMsg('');
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const realErrMsg = (msg) => {
    setPreviewUrl(null); //清除預覽
    setErrMsg(msg);
  }
  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止預設送出
    if (!previewUrl) {
      setErrMsg('請上傳有效的圖片檔案');
      return;
    }
    if (errMsg) {
      return;
    }
  }
  return (
    <>
      <main className='c_realMain'>
        <div className='c_realBox'>
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
                <input className='c_realId' type="text" placeholder='請輸入身分證字號，如：A123456789' pattern='[A-Z][12][0-9]{8}' required />
              </div>
              <div>
                <label htmlFor="">生日</label>
                <input type="date" required />
              </div>
            </div>
            <div className='c_realUpload'>
              <label htmlFor="">上傳證件圖檔</label>
              <div>
                <UpLoadBox onPreview={picPreview} onError={realErrMsg} />
                {errMsg && (<p>{errMsg}</p>)}
                {previewUrl && (<img src={previewUrl} alt="預覽圖片" />)}
                <UpLoadBox onPreview={picPreview} onError={realErrMsg} />
                {errMsg && (<p>{errMsg}</p>)}
                {previewUrl && (<img src={previewUrl} alt="預覽圖片" />)}
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
        </div>
      </main>
    </>
  )
}

export default Real_name