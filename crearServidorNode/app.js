//importamos  http
const http = require('http');

//construimos el servidor con el metodo createServer
//dentro le ponemos dos argumentos request e response
//en la funcion flecha decimos que la respuesta tiene el metodo end 
//(este medoto nos va a permitir enviar la respuesta al cliente)
//en este metodo le vamos a pasar el resultado que queremos dar al cliente, en este caso "hola mundo!"

const servidor = http.createServer((req, res) => {
    res.end('Hola, mundo!');
});

// //ahora usamos el metodo listen
// //para que el servido escuche, 
// //sepa donde escuchar (puerto 3000) 
// //y que hacer cuando escuche (en este caso, console.log)

// servidor.listen(3000, () => {
//     console.log('El servidor esta escuchando...')
// });

//se puede escribir el puerto como variable independiente 
//y se puede pasarlo como primer argumento

const puerto = 3000;

//alternativa a la denates:
//ahora usamos el metodo listen
//para que el servido escuche, 
//sepa donde escuchar (puerto 3000) 
//y que hacer cuando escuche (en este caso, console.log)

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
});

// //alternativa en el ultimo console.log
// servidor.listen(puerto, () => {
//     console.log(`El servidor esta escuchando en http://localhost:${puerto}...`)
// });