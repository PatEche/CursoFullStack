//Desestructuracion de objetos en funciones

const user ={
  username: 'patricio',
  email: 'echeverriaple@gmail.com',
  age: '40',
  ranking: 9,

 

};



//Creando funcion aplicando el concepto de destructuring 
const functionDestructuring = ({username, email}) =>{
  console.log(`El usuario es: ${username} y su email es: ${email}`);
} 
functionDestructuring(user);
// console.log(funcionDestructuring());


//Esta opcion es mas engorrosa para desestructurar 
// const username = user.username;
// const ranking = user.ranking;
// const age = user.age;


