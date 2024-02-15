import { mostrarAlerta, cliente, agregarClienteAPI} from "./funciones.js";

(function(){


    // variables 
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const telefonoInput = document.querySelector('#telefono');
    const empresaInput = document.querySelector('#empresa');
    const formulario = document.querySelector('#formulario');


    //event listeners 

    document.addEventListener('DOMContentLoaded', () =>{

        formulario.addEventListener('submit', agregarCliente);

    })


    // funciones

function agregarCliente(e){
        e.preventDefault();

        // quitando el valor de los inputs al enviar
        const nombre = nombreInput.value;
        const email = emailInput.value;
        const telefono = telefonoInput.value;
        const empresa = empresaInput.value;

        // validando campos 

        if ( nombre.trim() === '' || email.trim() === '' || telefono.trim() === '' || empresa.trim() === '' ){
            mostrarAlerta('no se pueded dejar vacio', 'error', formulario);
            return;
        }

        cliente.nombre = nombre;
        cliente.correo = email;
        cliente.telefono = telefono;
        cliente.empresa = empresa;
        cliente.id = String(Date.now());

        
        
        agregarClienteAPI({...cliente});

        
        
        

        
        
    }

    

    
})()