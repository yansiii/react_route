import React from 'react'
import { Link } from 'react-router-dom'

const Navbar=()=> {
  return (
    <div id='a'>
    < div id='b' >
      <Link to = '/Home' >Home</Link>
      <Link to = '/About' >About</Link>

      <Link to = '/Localstorage' > Localstorage</Link>
      <Link to = '/contact' >Contact</Link>
    </div>
    </div>
  )
}

export default Navbar

