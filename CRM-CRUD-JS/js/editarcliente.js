import { obtenerCliente, actualizarCliente } from "./funciones.js";

(function(){

    const formulario = document.querySelector('#formulario')

    document.addEventListener('DOMContentLoaded', () => {

        // Obtener los datos del cliente, Extraer su ID de la URL 
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id')
        if (idCliente){
            setTimeout(() => {
                obtenerCliente(idCliente)
            }, 1000);
        }        
        
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            actualizarCliente(idCliente);
        });

    })


    
})()