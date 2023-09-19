//importamos el modulo http
const http = require('http');

//importamos el modulo cursos.js que creamos antes
const cursos = require('./cursos.js');

//creamos el servidor
const servidor = http.createServer((req, res) =>{
    const {method} = req; //extraemos el metodo del al solicitud + podemos escribirlo tmb const metodo = res.method
    switch(method) {
        //si el metodo es GET ejecuta la funcion manejarSolicitudGET(req, res)
        case 'GET':
            return manejarSolicitudGET(req, res);
        //si el metodo es POST ejecuta la funcion manejarSolicitudPOST(req, res)
        case 'POST':
            return manejarSolicitudPOST(req, res);
        //si el metodo no es GET, ni POST, dame en la consola el mensaje entre parentesis
        default:
            console.log(`El metodo no puede ser manejado por el servidor: ${method}`);
        //alternativa: 
    //     default:
    //         res.statusCode = 501;
    //         res.end(`El metodo no puede ser manejado por el servidor: ${method}`);
    }
});

//definimos la funcion manejarSolicitudGET(req, res)
function manejarSolicitudGET(req, res) {
    const path = req.url; //definimos la constante del path de la request
    //si el path corresponde a la pagina principal, el codigo de estado de la respuesta es 200 (ok)
    //y el resultado de la respuesta es el mensaje en la consola
    if( path === '/') {
        res.statusCode = 200;
        return res.end('Bienvenides a mi primer servidor y APi creados con Node.js')     
    //si el path corresponde a la pagina de los cursos, el codigo de estado de la respuesta es 200 (ok)
    //y el resultado de la respuesta es el archivo infoCursos dentro del objeto cursos que importamos
    //al principio transformado de json a string
    } else if(path === '/cursos') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.programacion));
    } else if (path === '/cursos/matematicas') {
        res.statusCode = 200;
        return res.end(JSON.stringify(cursos.infoCursos.matematicas));
    }

    //si no se cumple ninguna de estas condiciones, entonces el codigo de estado es 404 (page not found)
    //y el resultado es el mensaje en la consola
    res.statusCode = 404;
    return res.end('El recurso solicitado no existe.')
}

//definimos la funcion manejarSolicitudPOST(req, res)
function manejarSolicitudPOST(req, res) {
    const path = req.url; //definimos la constante del path de la request
    //si el camino es curso/programacion
    if (path === '/cursos/programacion') {
        //Curso es una variable vacia
        let cursos = '';
        //metodo on para eventos: al recibir 'data' 
        //el contenido se convierte en string y va a colocarse en la variable cuerpo
        req.on('data', (contenido) => {
            cuerpo += contenido.toString();
        });

        //metodo on para eventos: al finalizar la request
        //monstramos en la consola el cuerpo y el tipo de dato de cuerpo
        //ahora convertimos el JSON en un objeto de JS, vemos el tipo con un console log
        //e intentamos acceder a una de sus propriedades
        //y finalizamod la respuesta con el mensaje 'el servidor...'
        req.on('end', () => {
            console.log(cuerpo);
            console.log(typeof cuerpo);

            cuerpo = JSON.parse(cuerpo);
            console.log(typeof cuerpo);
            console.log(cuerpo.titulo);

            res.end('El servidor recibio una solicitud POST para /cursos/programacion')
        })
        
        //res.statusCode = 200;
        //return res.end('El servidor recibio una solicitud POST para /cursos/programacion')
    }
}






//para que el servidor escuhce:
//1)definimos el puerto

const puerto = 3000;

//2) usamos el metodo listen con el servidor
servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
})