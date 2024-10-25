// eslint-disable-next-line no-unused-vars
import { useState } from "react";

//Exportamos el componente y guardamos como constante el CounterApp
export const CounterApp = () => {
    //Inicializamos el Hook en 0 y lo guardamos en la constante declarado como array
    const [counter, setCounter] = useState(0);

    //Funcion para incrementar el contandor
    const counterIncrement = () => {
        setCounter(counter +1);
        console.log('click' + counter);
    }

    const saluda = () => {
      console.log('Estoy haciendo click' + ' ' + counter);
    }
    // Devolvemos el valor inicial del counter, luego creamos el boton y capturamos el evento que al hacer click llame a las funciones declaradas
  return <>
      <h2>El valor del contador es  { counter } </h2>

       
      <button onClick={() => {
        counterIncrement()
        saluda()
      }}>incrementar contador +1</button>
    </>
  
};


//useState es uno de los hooks mas importantes para manejar 
// el estado de nuestra aplicacion.