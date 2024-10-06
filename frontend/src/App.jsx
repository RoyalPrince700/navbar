import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import SearchBox from './components/SearchBox'
import MobileNaBar from './components/MobileNaBar'
import JumiaNavBar from './components/JumiaNavBar'
import NavDropDown from './components/NavDropDown'
import NavDropDownSecond from './components/NavSecondDd'
import Hambugger from './components/Hambugger'
import AppleNavBar from './components/Apple/AppleNavBar'
import MacDrop from './components/Apple/MacDrop'
import IpadDrop from './components/Apple/IpadDrop'
import IphoneDrop from './components/Apple/IphoneDrop'
import SupportDrop from './components/Apple/SupportDrop'
import BuyDrop from './components/Apple/BuyDrop'


const App = () => {
  return (
    <div className=' '>
      {/* <NavBar/> */}
      {/* <MobileNaBar/> */}
      <SearchBox/>
      {/* ---------jumia--------- */}
      {/* <JumiaNavBar/> */}
      {/* <NavDropDown/> */}
      {/* <NavDropDownSecond/> */}
      {/* <Hambugger/> */}

      {/*------------------- apple---------------------- */}
      <AppleNavBar/>
      <MacDrop/>
      <IpadDrop/>
      <IphoneDrop/>
      <SupportDrop/>
      <BuyDrop/>
     


      <Routes>  

         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />

         <Route path='/collection' element={<Collection/>} />

         <Route path='/contact' element={<Contact/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='/login' element={<Login/>} />
      




      </Routes> 

    </div>
  )
}

export default App