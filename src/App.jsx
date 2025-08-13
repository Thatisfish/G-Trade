import Navbar from './components/Navbar'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import New_info from './pages/New_info'
import Hot_commodity from './pages/Hot_commodity'
import Sswitch from './pages/Switch'
import Ps from './pages/Ps'
import Xbox from './pages/Xbox'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/New_info' element={<New_info/>}></Route>
        <Route path='/Hot_commodity' element={<Hot_commodity/>}></Route>
        <Route path='/Switch' element={<Sswitch/>}></Route>
        <Route path='/Ps' element={<Ps/>}></Route>
        <Route path='/Xbox' element={<Xbox/>}></Route>
      </Routes>
      {/* <Home /> */}
      <Footer />
    </>
  )
}

export default App
