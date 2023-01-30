import React from 'react';
import logo from '../Imagenes/Logo.svg';
import decoracion from '../Imagenes/img-decoracion.svg';
import "./styleNavbar.css";

export const Navbar = () => {
    return (
        <>
            <header>
                <nav className='nav'>
                    <div className='element-navbar'>  
                        <img src={logo} alt='logo' className='logo'></img>
                        <img src={decoracion} alt='decoracion' className='decoracion'></img>
                    </div> 
                </nav>
            </header>
        </>
    )
}
