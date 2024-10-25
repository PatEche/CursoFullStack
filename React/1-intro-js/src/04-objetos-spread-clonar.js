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

// const factura2 = factura;

//Operador spread sirve para clonar objetos
const factura2 = { ...factura };

const resultado = factura2 === factura;


if (resultado) {
  console.log('Son iguales');
}else{
  console.log('No son iguales');
}

console.log(resultado);

factura2.id = 20;
console.log(factura2.id);
console.log(factura.id);



// // console.log(factura);
// console.log(`Total:${factura.total()}`);







