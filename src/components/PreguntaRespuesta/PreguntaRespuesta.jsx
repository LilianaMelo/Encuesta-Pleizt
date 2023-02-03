import React from 'react'
import { Boton } from '../Boton/Boton'
import { NavbarPreguntas } from '../NavbarPreguntas/NavbarPreguntas'

export const PreguntaRespuesta = () => {
    return (
        
        <>
            <NavbarPreguntas />
            
            <header className='header'>
                <h1>Título de la encuesta</h1>
                <h4>Descripción de la encuesta</h4>
            </header> 

            <form className='container-textarea'>
                <textarea   
                    className='cajaTexto'
                    style={{width: "300px", height: "120px", padding: "6px", borderRadius: "5px", border: "2px solid hotpink"}}
                ></textarea>                
            </form>

            <Boton className="boton"/>
            
        </>
    )
}
