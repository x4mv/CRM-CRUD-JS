import { obtenerCliente, actualizarCliente, cliente } from "./funciones.js";

(function(){

    const formulario = document.querySelector('#formulario')
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    


    document.addEventListener('DOMContentLoaded', () => {

        // Obtener los datos del cliente, Extraer su ID de la URL 
        const parametrosURL = new URLSearchParams(window.location.search);
        const idCliente = parametrosURL.get('id')
        if (idCliente){
            setTimeout(() => {
                obtenerCliente(idCliente, nombreInput, emailInput, telefonoInput, empresaInput);
            }, 1000);
        }        
        
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();

            const nombre = nombreInput.value;
            const correo = emailInput.value;
            const telefono = telefonoInput.value;
            const empresa = empresaInput.value;

            cliente.nombre = nombre;
            cliente.correo = correo;
            cliente.telefono = telefono;
            cliente.empresa = empresa;
            cliente.id = idCliente;

            actualizarCliente({...cliente});

            setTimeout(() => {
                window.location.href = 'index.html'
            }, 1000);
        });

    })


    
})()