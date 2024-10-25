const factura = {
  id: 10,
  nombre: 'Compras de oficina',
  fecha: new Date(),
  cliente: {
    id: 2,
    nombre: 'Lionel Messi',
    edad: 20,
    direccion: 'Alvear 10',
  },
  items: [
    {
      producto: 'Teclado',
      precio: 399,
      cantidad: 2,
    },
    {
      producto: 'Mouse',
      precio: 86,
      cantidad: 10,
      
    },
    {
      producto: 'Papel',
      precio: 18,
      cantidad: 4,
      
    },

  ],

  total: function (){
    let total = 0;
    this.items.forEach(item => {
     total = total + item.precio * item.cantidad

    });
    return total;
  },
 

};


// console.log(factura);
console.log(`Total:${factura.total()}`);






