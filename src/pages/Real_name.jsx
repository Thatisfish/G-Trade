import React from 'react'
import "../styles/_Real_name.scss"

const Real_name = () => {
  return (
    <>
      <main className='c_realMain'>
        <div>
          <div>
            <h2>為什麼需要實名認證？</h2>
            <div className='c_realTop'>為了維護交易安全與防止不實帳號，我們將對用戶身分資訊進行實名驗證（如：身分證、健保卡等），確認使用者真實身分。無論您是買家還是賣家，都需要完成驗證，才能使用商品上架與交易等功能唷！</div>
          </div>
          <div>*請輸入與身分證一致的資料</div>
          <form action="">
            <label htmlFor="">姓名</label>
            <input className='c_realName' type="text" />
            <label htmlFor="">身分證字號</label>
            <input className='c_realId' type="text" />
            <label htmlFor="">生日</label>
            <input type="date" />
            <label htmlFor="">上傳證件圖檔</label>
            <input type="file" accept="image/jpeg, image/png" />
            <input type="file" accept="image/jpeg, image/png" />

          </form>
        </div>
      </main>
    </>
  )
}

export default Real_name