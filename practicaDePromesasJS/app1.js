function ordenarProducto (producto) {
    return new Promise((resolve, reject) => {
        console.log(`Ordenando: ${producto}`);
        setTimeout(() => {
            if(producto === 'taza') {
                resolve('Ordenando una taza');
            } else {
                reject('Este producto no esta disponible actualmente');
            }
        }, 3000);
    });
}

//aqui como no vamos a usar el parametro reject podemos omitirlo
function procesarPedido(respuesta) {
    return new Promise((resolve) => {
        console.log('Procesando respuesta...');
        console.log(`La respuesta fue: "${respuesta}"`);
        setTimeout(() => {
            resolve('Gracias por su compra. Disfrute su producto!')
        }, 4000);
    });
}

// //cadena de promesas

// //esta primera llamada retorna una promesa
// ordenarProducto('lapiz')
//     //ahora realizamos un proceso con esa promesa
//     .then(respuesta => {
//         console.log('Respuesta recibida');
//         console.log(respuesta);
//         //esta llamada retorna una promesa
//         return procesarPedido(respuesta); 
//     })
//     //y realizamos otro proceso con esta promesa
//     //y asi susesivamente
//     .then(respuestaProcesada => {
//         console.log(respuestaProcesada);
//     })
//     //respuesta procesada es el valor retornado por la llamada a la funcion asincrona
//     //procesarPedido(respuesta) en el primer then
//     .catch(error => {
//         console.log(error);
//     })

//Escribir lo anterior Async Await en el orden que queremos que se ejecute
async function realizarPedido(producto) {
try {
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesa recibida');
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
    } catch (error) {
    console.log(error);
    }
}

realizarPedido('lapiz');