/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import { getInvoice } from "../services/getInvoice";
import { ClientView } from "./ClientView";
import { InvoiceView } from "./InvoiceView";
import { CompanyView } from "./CompanyView";

export const InvoiceApp = () => {
  const { id, name, client, company, items } = getInvoice(); //Esto es desestructurar o 'Destructuring'
  
  

  return (
    <>
      <div className="container">
        <div className="card my-3">
          <div className="card-header bg-secondary text-white text-center">
            Ejemplo Factura
          </div>

          <div className="card-body">
            <InvoiceView id={id} name={name} />

            <div className="row my-3">
              <div className="col">
                <ClientView title="Datos del cliente" client={ client }                
                />
              </div>

              <div className="col">
                <CompanyView title="Datos de la empresa" company= { company }/>
              </div>
            </div>

            <h4>Productos de la factura</h4>
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {items.map(({ id, product, price, quantity }) => {
                  return (
                    <tr key={id}>
                      <td>{product}</td>
                      <td>{price}</td>
                      <td>{quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
