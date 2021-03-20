import React, { useState } from 'react'
import { Button } from './Button'
import {Link} from 'react-router-dom'
import './Navbar.css'
import './MobileMenu.css'

const Navbar = () => {

    const [click, setClick] = useState(false);
    const [mobileopen, setMobileOpen] = useState(false);

    const handleClick = () =>{
        setMobileOpen(!mobileopen)
        setClick(!click)
    }
    const closeMobileMenu = () =>{
        setMobileOpen(!mobileopen)
    }
    

    return ( 
        <div>
            {/* mobile screens menu */}
            <div className={mobileopen?'mobile-div open-menu':'mobile-div close-menu'}>
                <div className='close' onClick={closeMobileMenu}>
                    <div><i className='fas fa-times'/></div>
                </div>
                <div className='mobile-links'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu} >
                        Home
                    </Link>
                </div>
                <div className='mobile-links'>
                    <Link to='/services' className='nav-links' onClick={closeMobileMenu} >
                        Services
                        
                    </Link>
                    
                </div>
                <div className='mobile-links'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu} >
                        Products
                    </Link>
                    
                </div>
                <div className='mobile-links'>
                    <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu} >
                        Contact&nbsp;Us
                    </Link>
                </div>
                <div className='mobile-btn'>
                    <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>
                        <Button className='nav-links ' />
                    </Link>     
                </div>
            </div>
            
            
            <nav className="navbar">
                {/* mobile screens nav */}
                <div className='nav-mobile'>
                    <div>
                        <Link to='./'>
                            Epic <i className='fab fa-firstdraft'/>
                        </Link>
                    </div>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className='fas fa-bars'/>
                    </div>
                </div>
                <div className='nav-lg'>
                    <div>
                        <Link to='./'>
                            Epic <i className='fab fa-firstdraft'/>
                        </Link>
                    </div>
                    <div className='nav-lg-right'>
                        <div className='nav-lg-div'>
                            <Link to='/' className='nav-links' >
                                Home
                            </Link>
                        </div>
                        <div className='nav-lg-div'>
                            <Link to='/services' className='nav-links' >
                                Services
                            </Link>
                        </div>
                        <div className='nav-lg-div'>
                            <Link to='/products' className='nav-links' >
                                Products
                            </Link>
                        </div>
                        <div className='nav-lg-div'>
                            <Link to='/contact' className='nav-links' >
                                Contact&nbsp;Us
                            </Link>
                        </div>
                        <div className='btn-lg'>
                            <Link to='/sign-up' className='nav-links' >
                                <Button className='nav-links ' />
                            </Link>
                        </div>
                    </div>

                </div>
                
            </nav>
        </div>
     );
}
 
export default Navbar;