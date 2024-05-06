import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = ({ isMobile }) => {
    const isMobileClass = isMobile ? 'isMobile' : 'isDesk'
    console.log(isMobile)
    return (
        <div className={`navbar ${isMobileClass}`}>
            <div className={`logo-menu-${isMobileClass}`}>
                {isMobile ? <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="72" height="72" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg> : ''}
                <img src={logo} alt="" className='logo' />
            </div>
            <div className={`li-container ${isMobileClass}`}>
                <ul>
                    <li>Proyectos</li>
                    <li>Sobre Mi</li>
                    <li>Contactame</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar