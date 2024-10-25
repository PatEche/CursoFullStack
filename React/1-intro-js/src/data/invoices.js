export const papper = {
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

export const my = function myFunction() {
  return 'Exportando function';
};


//Estudiar bien esta funcion!!
export const invoiceByClientName = (firstName) => {

  return invoices.find(i => i.client.firstName === firstName)
  //Faltaria logica para informar si el registro existe o no existe  

};

const invoiceById = (id) => {
  return invoices.find(i => i.id === id)
}

export {
  invoices as default,
  invoiceById
}
