import '../styles/_Card.scss'
import Banner from '../images/banner_pokemon.avif'
import Cards from '../components/Card.jsx'


const Alltype = () => {
  return (
    <>

      {/* <Nav /> */}
      <div className='B_content'>
        <div className='B_banner'>
          <img src={Banner} alt="banner" />
        </div>

        <p className='B_name'>switch</p>
        <div className='B_category'>
          <button className='B_Categories' type='button'>主機 ()</button>
          <button className='B_Categories' type='button'>遊戲 ()</button>
          <button className='B_Categories' type='button'>配件 ()</button>
        </div>

        <div className='B_item'>
          <Cards id='' />
          <Cards id='' />
          <Cards id='' />
          <Cards id='' />
          <Cards id='' />
          <Cards id='' />
          <Cards id='' />
          <Cards id='' />
          <Cards id='' />
        </div>

        <div>

        </div>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Alltype