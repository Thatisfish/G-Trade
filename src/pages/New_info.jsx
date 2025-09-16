import HomeNews from '../components/HomeNewsSection'

import '../styles/New_info.scss'
const New_info = () => {
  return (
    <>
      <main id='New_info'>
        <header className='c_newHead'>
          <h2>最新消息</h2>
          <p>NEWS</p>
        </header>
        <div className='c_newNewBox'>
          <HomeNews />
        </div>
      </main>
    </>
  )
}

export default New_info