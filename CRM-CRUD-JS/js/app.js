import { listarClientes } from "./funciones.js";

(function(){
    // variables
    const url = 'http://localhost:3000/clientes';
    const tablaBody = document.querySelector('#listado-clientes');


    listarClientes(url, tablaBody);
})()