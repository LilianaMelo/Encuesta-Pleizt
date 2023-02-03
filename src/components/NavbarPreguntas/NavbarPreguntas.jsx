import React from 'react';
import logo from '../Imagenes/Logo.svg';
import decoracion from '../Imagenes/img-decoracion.svg';
import "./styleNavbarPreguntas.css";

export const NavbarPreguntas = () => {
    return (
        <>
            <header>
                <nav className='nav-preguntas'>
                    <nav className='element-navbar-preguntas'>  
                        <img src={logo} alt='logo' className='logo'></img>
                        <img src={decoracion} alt='decoracion' className='decoracion'></img>
                    </nav> 
                </nav>
            </header>
        </>
    )
}
