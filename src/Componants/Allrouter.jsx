import React from 'react'
import { Route,Routes } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Localstorage from './Localstorage'

const Allrouter=()=> {
  return (
    <>
      <Routes>
    <Route path='/Home' element = {<Home/>}></Route>
    <Route path='/About' element = {<About/>}> </Route>
    <Route path='/Contact' element = {<Contact/>}> </Route>
    <Route path='/Localstorage' element = {<Localstorage/>}> </Route>
    </Routes>  

    
    </>
  )
}

export default Allrouter
