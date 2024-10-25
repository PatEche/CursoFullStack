//Destructure o  Desestructurar

const user = {
  username: 'patricio',
  email: 'echeverriaple@gmail.com',
  age: '40',
  ranking: 9,
}


//Esta opcion es mas engorrosa para desestructurar 
// const username = user.username;
// const ranking = user.ranking;
// const age = user.age;

const { username,ranking, age } = user;

console.log(`${username} tiene ${age} de edad`);
console.log(ranking);