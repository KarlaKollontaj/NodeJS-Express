const estatusPedido = () => {
    const estatus = Math.random() < 0.8;
    console.log(estatus);
    return estatus;
};

//este ciclo for solo nos sirve como demonstracion de la aleatoriedad de estatusPedido
//despued podemos comentarlo 
// for (let i = 0; i < 10; i++) {
//     console.log(estatusPedido());    
// };

const miPedidoDePizza = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(estatusPedido()) {
            resolve('Pedido exitoso! Su pizza esta en camino!');
        } else {
            reject('Ocurrio un error. Por favor intente nuevamente.');
        }
    },3000);
});

const manejarPedido = (mensajeDeConfirmacion) => {
    console.log(mensajeDeConfirmacion);
};

const rechazarPedido = (mensajeDeError) => {
    console.log(mensajeDeError);
};

miPedidoDePizza.then(manejarPedido, rechazarPedido);


//ALTERNATIVAS DE SINTAXIS
// en lugar de definir estas funciones manejarPedido y rechazarPedido de forma separada y luego escribir la linea con el then 
//podemos escribir un solo bloque de codigo.

//ALTERNATIVA 1
// miPedidoDePizza
//     //aqui se maneja el exito de la promesa
//
//     .then((mensajeDeConfirmacion) => {
//         console.log(mensajeDeConfirmacion);
//     })
//
//     //aqui se maneja el rechazo y necesitamos poner null como primero argumento
//     //porque en este caso no vamos a tener una funcion que maneje el exito nuevamente
//     .then(null, (mensajeDeError) => {
//         console.log(mensajeDeError);
//     });

//ALTERNATIVA 2 CON CATCH()
// miPedidoDePizza
//     .then((mensajeDeConfirmacion) => {
//         console.log(mensajeDeConfirmacion);
//     })
//     .catch((mensajeDeError) => {
//         console.log(mensajeDeError);
//     });

//ALTERNATIVA 3 CON CATCH()

// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// };

// const rechazarPedido = (mensajeDeError) => {
//     console.log(mensajeDeError);
// };

// miPedidoDePizza.then(manejarPedido).catch(rechazarPedido);
//  ---OPPURE---
// miPedidoDePizza
//     .then(manejarPedido)    
//     .catch(rechazarPedido);
