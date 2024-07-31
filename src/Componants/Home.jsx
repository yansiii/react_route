import React from 'react'
import image from './img/img1.jpg';

function Home() {
  return (
    <div style={{textAlign:"center", marginTop:"40px", fontFamily:"cursive"}}>
      {/* <h1>welcome to my home page</h1> */}
      <img src={image} alt="pic" style={{height:"500px", width:"100%"}}/>
    </div>
  )
}

export default Home
