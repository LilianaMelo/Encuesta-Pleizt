import React from 'react';
import './Login.css';
import logo from '../Imagenes/Logo.svg';
import logoNarcobollo from '../Imagenes/Narcobollo.svg';
import { Boton } from '../Boton/Boton';

export const Login = () => {
  return (

    <>
      
      <nav className='nav-login'>
        <div className='element-navbar-login' style={{margin: "10px"}}>
          <img src={logo} alt='logo' style={{position:"absolute", left: "39px"}}></img>
          <img src={logoNarcobollo} alt='logo2' style={{position:"absolute", right: "0px" }}></img>
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
