import React from 'react';
import './Login.css';
import logo from './img/Logo.png';
import logo2 from './img/Logo2.png';

export const Login = () => {
  return (

    <>
      
      <nav className='nav'>
        <div className='container-navbar'>
          <img src={logo} alt='logo'></img>
          <img src={logo2} alt='logo2'></img>
        </div>
          
      </nav>
      
      <header>
        <h1>Titulo de la encuesta</h1>
        <h4>Descripción de la encuesta</h4>
      </header>  

        <form className='container-form'>

            <input className='input' type="text" placeholder="Nombre"></input>
            <input className='input' type="text" placeholder='Correo Electrónico'></input>
            <input className='input' type="text" placeholder='Teléfono'></input>

            <button className='button' >Preguntas o Siguiente</button>
        </form>

    </>
    
  )
}
