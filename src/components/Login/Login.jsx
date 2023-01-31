import React from 'react';
import './Login.css';
import logo from '../Imagenes/Logo.svg';
import logo2 from '../Imagenes/Narcobollo.svg';
import { Boton } from '../Boton/Boton';

export const Login = () => {
  return (

    <>
      
      <nav className='nav'>
        <div className='element-navbar'>
          <img src={logo} alt='logo'></img>
          <img src={logo2} alt='logo2'></img>
        </div>
      </nav>
      
      <header className='header'>
        <h1>Título de la encuesta</h1>
        <h4>Descripción de la encuesta</h4>
      </header>  

        <form className='container-form'>

            <input className='input' type="text" placeholder="Nombre"></input>
            <input className='input' type="text" placeholder='Correo Electrónico'></input>
            <input className='input' type="text" placeholder='Teléfono'></input>

            {/* <button className='button' >Preguntas o Siguiente</button> */}
            <Boton />
        </form>

    </>
    
  )
}
