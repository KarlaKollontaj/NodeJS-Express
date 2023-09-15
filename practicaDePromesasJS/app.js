// //esta constante la declaramos solo por fines pedagogicos 
// //para demonstrar teoricamente como funciona en miPromesa

// const promesaCumplida = true;

// const miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(promesaCumplida) {
//             resolve('Promesa cumplida');
//         }else {
//             reject('Promesa rechazada')
//         }
//     }, 3000);
// });

// //usamos el metodo .then() si llamamos a resolve.
// //el valor que pasamos a la funcion flecha va a corresponder al valor 
// //que pasamos a resolve antes (en este caso 'Promesa cumplida!')
// miPromesa.then((valor) => {
//     console.log(valor)
// });

//esta constante la declaramos solo por fines pedagogicos 
//para demonstrar teoricamente como funciona en miPromesa

const promesaCumplida = false;

const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(promesaCumplida) {
            resolve('Promesa cumplida');
        }else {
            reject('Promesa rechazada')
        }
    }, 3000);
});

const manejarPromesaCumplida = (valor) => {
    console.log(valor);
};

const manejarPromesaRechazada = (razonRechazo) => {
    console.log(razonRechazo);
};

miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);

