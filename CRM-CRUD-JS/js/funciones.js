export function mostrarAlerta(mensaje, tipo, referencia){

    const alerta = document.querySelector('.alert');

    if(!alerta){

        const divAlerta = document.createElement('DIV');

        if ( tipo === 'error'){
            divAlerta.className = 'bg-red-600 mt-4 rounded text-white  text-center p-2'
        }else{ 
            divAlerta.className = 'bg-green-600 mt-4 rounded text-white  text-center p-2'
        }

        divAlerta.textContent = mensaje

        referencia.appendChild(divAlerta)

        setTimeout(() => {
            divAlerta.remove()
        }, 3000);
    }
}

export let cliente = {
    nombre: '',
    correo:'',
    telefono: '',
    empresa: '',
    id: ''
}

export async function agregarClienteAPI(clienteObjeto){
    try {

        const resultado = await fetch('http://localhost:3000/clientes',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                clienteObjeto
            )
        });
        
    } catch (error) {
        console.log(error);
    }
    
    


}

export async function listarClientes(url, tabla){
    
    try {

        const resultado = await fetch(url);
        const data = await resultado.json()
        
        data.forEach(cliente => {
            const { nombre, correo, telefono, empresa, id } = cliente;

            tabla.innerHTML += ` 
                <tr>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                        <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                        <p class="text-sm leading-10 text-gray-700"> ${correo} </p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                        <p class="text-gray-700">${telefono}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                        <p class="text-gray-600">${empresa}</p>
                    </td>
                    <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                        <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                        <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900">Eliminar</a>
                    </td>
                </tr>
            `;
            
        });
        
    } catch (error) {
        console.log(error);
    }
    
}

export async function obtenerCliente(id){
    console.log(id);
}

export async function actualizarCliente(id){
    console.log('actualizando')
}