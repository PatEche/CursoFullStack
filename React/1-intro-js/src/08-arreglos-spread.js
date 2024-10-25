const products = ['monitor','gabinete','mouse','teclado'];

const products2 = products.concat(['parlantes','auriculares']);

const fruits = ['peras','manzanas','zandias','tomate'];

const mercado = [...fruits, ...products, 'lechuga','papa'];

console.log(products);
console.log(fruits);
console.log(mercado);

console.log(products2);

//Ejemplos para unir arreglos con el operador spread o con el metodo concat