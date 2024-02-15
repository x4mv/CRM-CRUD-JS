import { listarClientes, confirmarEliminar } from "./funciones.js";

(function(){
    // variables
    const url = 'http://localhost:3000/clientes';

    document.addEventListener('DOMContentLoaded', () =>{

        const tablaBody = document.querySelector('#listado-clientes');


        listarClientes(url, tablaBody);

        tablaBody.addEventListener('click', confirmarEliminar);


    })
    

})()