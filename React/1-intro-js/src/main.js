/* eslint-disable no-unused-vars */

//Promesas se usan para tareas asincronas, primero se ejecuta lo sincrono y luego a la espera de la promesa

import { invoiceById } from './data/invoices.js';

    const promise = new Promise((resolve, reject) => {
        
        setTimeout(() => {
            const result = invoiceById(3);
            console.log(result);
            // console.log (invoiceById(2));
        },2500);
    })
   

    


