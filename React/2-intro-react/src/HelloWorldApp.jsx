/* eslint-disable react/prop-types */
//Sintaxis funcion comun con la palabra reservada function
// export function HelloWorld() {
//   const name = "Pepe";

//   return (
//     <>
//       <h1>Hola Mundo</h1>
//       <h3>Primer componente!</h3>
//       <p>Que tal!! {name.toLocaleUpperCase()}</p>
//     </>
//   );
// }

//Sintaxis funcion flecha
import PropTypes from "prop-types";
import { Title } from "./components/Title";
import { UserDetails } from "./components/UserDetails";
import { Book } from "./components/Book";


export const HelloWorldApp = ({ user, id, title, book }) => {
  // const name = 'Pepe';

  console.log(title);

  return (
    <>
      <Title title={ title } />
      <UserDetails user={ user } id={ id }/>
      <Book book={ book }/>
      
    </>
  );
};
//Con los PropTypes validamos que el dato que pasamos sea del tipo de dato correcto
HelloWorldApp.PropTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  user: PropTypes.object.isRequired,
};

//Asignando valores por defecto (Default Props)
HelloWorldApp.defaultProps = {
  title: "Hola mundo por defecto!",
   book: "Uml got a gota",
};

//En esta clase vimos manejo de variables y propiedades de un componente.

//Tambien se explicó "Composicion de Componentes". 