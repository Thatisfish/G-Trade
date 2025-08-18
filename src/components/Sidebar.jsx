import React from 'react'

import "../styles/_Sidebar.scss"

const Sidebar = () => {
  return (
    <aside className='sidebar'>
        <ul>
            <li>收藏清單</li>
            <li>訂單管理</li>
            <li>優惠劵夾</li>
            <li>實名認證</li>
            <li>客服中心</li>
        </ul>

    </aside>
  )
}

export default Sidebar