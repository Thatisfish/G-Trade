import Navbar_Light from './components/Navbar-Light'
import Footer_Light from './components/Footer_Light'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import New_info from './pages/New_info'
import Hot_commodity from './pages/Hot_commodity'
import Alltype from './pages/Alltype'
import Register from './pages/Register'
import Shopping_cart from './pages/Shopping_cart'
import Collect from './pages/Collect'

function App() {
  return (
    <>
      <Navbar_Light />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/New_info' element={<New_info/>}></Route>
        <Route path='/Hot_commodity' element={<Hot_commodity/>}></Route>
        <Route path='/Alltype' element={<Alltype/>}></Route>
        <Route path='/Shopping_cart' element={<Shopping_cart/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Collect' element={<Collect/>}></Route>
      </Routes>
      {/* <Home /> */}
      <Footer_Light />
    </>
  )
}

export default App
