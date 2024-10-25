const papper = {
  product: 'papper',
  price: 150,
  quantity: 10,
};

const invoices = [
  {
    id: 1,
    name: 'Compras de oficina',
    client: {
      firstName: 'John',
      lastName: 'Doe',
    },
    items: [
      {
        product: 'Pencil',
        price: 399,
        quantity: 2
      },
      papper,
      {
        product: 'Notes',
        price: 199,
        quantity: 40,
      },
    ]

  },
  {
    id: 2,
    name: 'Computacion',
    client: {
      firstName: 'Steve',
      lastName: 'Vai',
    },
    items: [
      {
        product: 'Mouse',
        price: 399,
        quantity: 2
      },
      {
        product: 'keyboard',
        price: 200,
        quantity: 10,
      },
      papper,
    ]

  },
  {
    id: 3,
    name: 'Instrumentos Musicales',
    client: {
      firstName: 'Dave',
      lastName: 'Mustaine',
    },
    items: [
      {
        product: 'Guitar Jackson',
        price: 999,
        quantity: 2
      },
      {
        product: 'Pedalboard',
        price: 200,
        quantity: 10,
      },
      {
        product: 'Ampli Marshall',
        price: 1999,
        quantity: 4,
      },
    ]

  }
];

const invoicesClone = invoices.map(i => {
  return i.client.firstName
});

console.log(invoicesClone);


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

