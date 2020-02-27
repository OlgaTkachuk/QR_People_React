import React from 'react'

import './HomePage.css'
import '../../index.css'


function HomePage() {
  return (
    <div className='main-div'>
        <div className='image-content'>
            <img src={require("../../assets/Parent.jpg")} alt="Home page photo"/>
        </div>

        <div className='content'>
            <span>Welcome to QR People website</span>
        </div>
    </div>
  )
}

export default HomePage;
