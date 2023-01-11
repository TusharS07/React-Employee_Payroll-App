import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../src/Assets/mainHeader.PNG"

function Header() {
  return (
    <div>
        <header className="header-content header">
            <div className="logo-content">
                <img src={logo} alt="Logo" />
            </div>
        </header>
    </div>
  )
}

export default Header