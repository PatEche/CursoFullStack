/* eslint-disable no-unused-vars */


import invoices, { invoiceByClientName, my, papper } from './data/invoices.js';




// const invoicesClone = invoices.map(i => {
//   return i.client.firstName;
// });

// console.log(invoicesClone);
// console.log(my());

// console.log(invoiceByClientName());
// console.log(typeof(invoiceByClientName));
// console.log(invoiceByClientName());
console.log('Buscando por nombre de cliente');
console.log(invoiceByClientName('Dave'));

//SINTAXIS MAS LARGA DE LA FUNCION
// console.log('*********Usando find***********');
// const invoiceById = invoices.find(i => {
//   let idFind = i.id === 3
//   return idFind;
// });
// console.log(invoiceById);

// console.log('******Usando find*******');//Funcion sintaxis larga
// const invoiceByClientName = invoices.find(i => i.client.firstName === 'Steve' && i.id === 2);
// console.log(invoiceByClientName);

// console.log('********Usando filter**********');
// const invoiceFilter = invoices.filter(i => i.id > 1);
// console.log(invoiceFilter);

// const invoceInclude = invoices.filter(i => i.items.includes(paper));
// console.log(invoceInclude);

// console.log('**********Usando some, devuelve true o false***********');
// const result = invoices.some(i => i.client.firstName === 'Steve');
// console.log(result);


//ForEach sintaxis corta
// invoices.forEach(i => console.log(i));

//ForEach sintaxis larga
// const invoicesForEach = invoices.forEach((invoice) =>{
//   const result = invoice;
//   console.log(result);
// });
// console.log(invoicesForEach);




