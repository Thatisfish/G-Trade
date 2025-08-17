import '../styles/_Card.scss'
import Banner from '../images/banner_pokemon.avif'
import Cards from '../components/Card.jsx'
import Footer from '../components/Footer.jsx'
import Nav from '../components/Navbar.jsx'

const Alltype = () => {
  return (
    <>
      <Nav />
      <div>
        <img src={Banner} alt="banner" />
      </div>

      <div className='B_category'>
        <h2>switch</h2><br/>
        <button className='B_Console' type='button'>主機</button>
        <button className='B_Game' type='button'>遊戲</button>
        <button className='B_Accessories' type='button'>配件</button>
      </div>

      <div className='B_item'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      <Footer />
    </>
  )
}

export default Alltype