import React from 'react'

import logo from "../assets/logo technopartner.png"

const Header = () => {
  return (
    <header className='fixed-nav-bar w-nav'>
        <div className="max-w-screen-2xl mx-auto px-4 flex justify-between items-left">
            <img
                src={logo}
                alt="Logo"
                className="w-24 h-12"
            />
        </div>
    </header>
    
   
  )
}

export default Header