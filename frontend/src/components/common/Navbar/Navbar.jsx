import { useState } from 'react'
import './Navbar.scss'
import { assets } from '../../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false);

  return (
    <>
    <div className="container navbar-wrapper py-2">
        <div className="row align-items-center justify-content-between">
            <div className="col-6 col-md-3">
                <img src={assets.logo} alt="logo" className='header-logo' />
            </div>
            <div className="col-md-6 d-none d-lg-block">
                <ul className='list-style-none menus d-flex justify-content-center my-0'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#what-we-do">What we do?</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
            <div className="col-6 col-md-3 text-end">
                <Link to="/login" className='primary-btn'>Login</Link>
                <img src={assets.menuIcon} onClick={() => setShowMenu(true)} className='menu-event d-lg-none' alt="" />
            </div>
        </div>
    </div>
    {showMenu && (
        <div className="mobile_menu_wrapper">
        <div className="menu-panel-header">
            <h3>Menus</h3>
            <img src={assets.closeIcon} alt="close" onClick={() => setShowMenu(false)} />
        </div>
        <ul className='list-style-none menus d-flex flex-columns justify-content-center my-0'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Our Services</a></li>
                    <li><a href="#what-we-do">What we do?</a></li>
                    <li><a href="#contact">Contact Us</a></li>
        </ul>
    </div>
    ) }
    
    </>

  )
}

export default Navbar