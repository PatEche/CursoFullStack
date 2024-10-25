//Destructuring de arreglos junto con el operador spread para obtener el resto de los elementos

const users = ['pepe','ana','maria','juan','sebastian', 'carlos', 'josefa'];

 const [ pepe, ana, maria, ...rest ] = users;

// console.log(pepe, ana, maria, ...rest);
 console.log(pepe, ana, maria, rest); //sin el operador spread devuelve el array[]



