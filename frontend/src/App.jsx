import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import About from './pages/About'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <NavBar/>

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