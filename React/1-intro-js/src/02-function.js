
//FUNCION NORMAL

// function sayHello(name,age){

//     const greeting = `Hola mundo function! ${name} ${age}`;

//     return greeting; 
  
// }
// console.log(sayHello('Pepe','68'));


//FUNCION ANONIMA

// const sayHello = function(name,age){

//     const greeting = `Hola mundo function! ${name} ${age}`;

//     return greeting; 
  
// }
// console.log(sayHello('Pepe','68'));


//FUNCION FLECHA (=> flecha o expresion lambda)

const sayHello = (name,age) => {

    const greeting = `Hola mundo function! ${name} ${age}`;

    return greeting; 
  
}
console.log(sayHello('Pepe','68'));

//FUNCION FLECHA SIMPLIFICADA. SE USA CUANDO LO QUE DEVOLVEMOS ES ALGO UNICO O OCUPA UNA SOLA LINEA

const resta = (a = 0, b = 0) => a-b;


console.log(resta(10,3));


// function sumar (a,b){
//    return a * b;
//   }

// console.log(sumar(10,10));

// let sumar = (a,b) => {
//   return a + b;
// }

// console.log(sumar(10,100));

// function saludar (nombre){  
//   return "hola " + nombre;
// }
// console.log(saludar("Karina"));

// let saludo = (nombre,edad) => {
//    return `${nombre} ${edad}`;
// }
// console.log(saludo("Karina Palacios", 44));