import React from 'react';
import Select from 'react-select';
import { Boton } from '../Boton/Boton';
import { Navbar } from '../Navbar/Navbar';
import "./PreguntaRango.css";

// npm i --save react-select >>>> es un paquete de react para hacer el select


const questions = [
    { label: "¿Pregunta 1?", value: "¿Pregunta 1?"},
    { label: "¿Pregunta 2?", value: "¿Pregunta 2?"},
    { label: "¿Pregunta 3?", value: "¿Pregunta 3?"},
    { label: "¿Pregunta 4?", value: "¿Pregunta 4?"},
    { label: "¿Pregunta 5?", value: "¿Pregunta 5?"},
    { label: "¿Pregunta 6?", value: "¿Pregunta 6?"},
    { label: "¿Pregunta 7?", value: "¿Pregunta 7?"},
    { label: "¿Pregunta 8?", value: "¿Pregunta 8?"},
    { label: "¿Pregunta 9?", value: "¿Pregunta 9?"},
    { label: "¿Pregunta 10?", value: "¿Pregunta 10?"}
]


// opcion 2: 
const DBQuestions = [ 
    {id: 1, q:"¿Pregunta 1?" },
    {id: 2, q:"¿Pregunta 2?" },
    {id: 3, q:"¿Pregunta 3?" },
    {id: 4, q:"¿Pregunta 4?" },
    {id: 5, q:"¿Pregunta 5?" },
    {id: 6, q:"¿Pregunta 6?" },
    {id: 7, q:"¿Pregunta 7?" },
    {id: 8, q:"¿Pregunta 8?" },
    {id: 9, q:"¿Pregunta 9?" },
    {id: 10, q:"¿Pregunta 10?" },
]



export const PreguntaRango = () => {

    const onChangeSelect = (e) => {
        console.log(e);
    }

    
    return (
        <>

            <Navbar />

            <header className='header'>
                <h1>Título de la encuesta</h1>
                <h4>Descripción de la encuesta</h4>
            </header> 

            {/* listas de seleccion son con bropdown (desplegable) */}
            <div className='question-container'>
                
                <Select 
                    defaultValue={ { label: "Seleccionar", value: "Seleccionar"  } }
                    // options={ questions }
                    options={ DBQuestions.map(ques => ({ label: ques.q, value: ques.id }) )}
                    onChange={ onChangeSelect }
                    theme={(theme) => ({
                      ...theme,
                      borderRadius: 5,
                      width: 172,
                      colors: {
                        ...theme.colors,
                        primary25: '#F3F2F4', // color que indica donde esta ubicado el cursor
                        primary: '#00F2D7', // color del borde de la caja y seleccion
                        primary50: '#00F2D7', // color de click
                        
                      },
                    })}
                
                />

                
            
            </div>
            <Boton />
        </>
        
    )
}
