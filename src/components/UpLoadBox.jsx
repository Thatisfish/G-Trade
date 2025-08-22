import React from 'react'

const UpLoadBox = ({ label, onError, onPreview }) => {
    const picOnChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const isImg = file.type.startsWith('image/');
        const isUnderFive = file.size <= 5 * 1024 * 1024;
        if (!isImg) {
            onError('請選擇圖片檔案（JPG、PNG 等）');
            return;
        }
        if (!isUnderFive) {
            onError('檔案大小不可超過 5MB');
            return;
        }
        onPreview(file);
    }
    return (
        <>
            <label htmlFor="">{label}</label>
            <input type="file" onChange={picOnChange} accept='image/*' />
        </>
    )
}

export default UpLoadBox