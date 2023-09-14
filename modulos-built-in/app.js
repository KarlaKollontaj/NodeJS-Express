//MODULO BUILT-IN CONSOLE.LOG

//console.log('Hola, mundo!');

//console.warn('Ocurrio un error...');

//console.error('Ocurrio un error grave!');

//qui creamos un nuevo objeto error
//console.error(new Error('Ocurrio un error gravisismo!'));


//MODULO BUILT-IN PROCESS

//nos da en el terminal toda la composicion del objeto porcess
//console.log(process);

//env describe en el terminal el ambiente de ejecucion del programa
//console.log(process.env);

//process nos permite acceder a los argumentos que se pasan en el terminal
//console.log(process.argv);

//como nos da como resultado un array podemos acceder a los elementos del array
//escribiendo el indice del elemento
//console.log(process.argv[2]);

//si queremos visualizar un numero indefinido de argumentos 
//podemos porcesarlo con un ciclo for
//for( let i = 2; i < process.argv.length; i++) {
    //console.log(process.argv[i]);
//}

//Se puede saber cuanta memoria se esta usando
//console.log(process.memoryUsage());

//MODULO BUILT-IN OS (SISTEMA OPERATIVO)

//const os = require('os');

//type nos va a permitir tener acceso al tipo de sistema operativo en el cual se esta ejecutando nuestra app en node
//console.log(os.type());

//para ir al directorio principal del sistema operativo usamos homedir
//console.log(os.homedir());

//Uptime nos dice cuanto tiempo (segundos) ha estado ejecutando el sistema operativo
//console.log(os.uptime());

//userInfo nos da info sobre el usuario
//console.log(os.userInfo());

//MODULO BUILT-IN TIMERS

//setTimeout()

//function mostrarTema(tema) {
    //console.log(`Estoy aprendiendo ${tema}`);
//}

//mostrarTema('Node.js');

//higher-order programming: llamar a una funcion dentro de otra funcion
//setTimeout(mostrarTema, 5000, 'Node.js');

//function sumar (a, b) {
    //console.log(a + b);
//}

//setTimeout(sumar, 10000, 2, 3);


//setImmediate()

//en este caso la ejecucion no sigue el orden de como se escribio el codigo, sino 
//(como podemos ver en el terminal) se ejecutan antes los codigos sincronos (los 2 console.log) y imnediatamente despues el codigo asincrono de la funcion que, 
//con setimmediate(), va a tener la prioridad sobre cualquier otro codigo asincrono de la app.

//function mostrarTema(tema) {
    //console.log(`Estoy aprendiendo ${tema}`);
//}

//console.log('Antes de setImmediate()');

//setImmediate(mostrarTema, 'Node.js');

//console.log('Despues de setImmediate()');


//setInterval()

//function mostrarTema(tema) {
    //console.log(`Estoy aprendiendo ${tema}`);
//}

//setInterval(mostrarTema, 3000, 'Node.js');

//ejemplo con mas argumentos
//function sumar (a, b) {
    //console.log(a + b)
//}

//setInterval(sumar, 1500, 5, 5);

//MODULO BUILT-IN FS

//anadimos un archivo html muy sencillo

//no es necesario, es una convencion pero a menudo se importa fs

const fs = require('fs');

//leer un archivo

//le indicamos el file, el codigo de los caracteres para leerlo y como parametro le damos una funcion flecha
// que se activa cuando se complete el proceso gracias a la cual mostramos si hubo un error y tambien nos ensena el contenido
// fs.readFile('index.html', 'utf-8', (err, contenido) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(contenido);
//     }
// });

//en caso de error podemos detener la ejecucion con throw err

fs.readFile('index.html', 'utf-8', (err, contenido) => {
    if(err) {
        throw err;
    } else {
        console.log(contenido);
    }
});

//editar el nombre de un archivo

fs.rename('index.html', 'main.html', (err) => {
    if (err){
        throw err;
    } 
    console.log('Nombre cambiado exitosamente');
});

//agregar contendio al final de un archivo

fs.appendFile('index.html', '<p>Hola</p>', (err) => {
    if (err) {
        throw err;
    }
    console.log('Archivo actualizado');
});

//reemplazar todo el contenido del archivo

fs.writeFile('index.html', 'Contenido nuevo', (err) => {
    if (err){
        throw err;
    }
    console.log('Contenido remplazado exitosamente')
})

//eliminar archivos

// fs.unlink('index-copy.html', (err) => {
//     if(err) {
//         throw err;
//     }
//     console.log('Archivo eliminado');
// });


