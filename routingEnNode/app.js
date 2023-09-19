//importamos el modulo http
const http = require('http');

//importamos el modulo cursos.js que creamos antes
const cursos = require('./cursos.js');

//creamos el servidor
const servidor = http.createServer((req, res) =>{
    const {method} = req; //extraemos el metodo del al solicitud
    //si el metodo es GET ejecuta la funcion manejarSolicitudGET(req, res)
    switch(method) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        //si el metodo no es GET, dame en la consola el mensaje entre parentesis
        default:
            console.log(`El metodo no puede ser manejado por el servidor: ${method}`)
    }
});

//definimos la funcion manejarSolicitudGET(req, res)
function manejarSolicitudGET(req, res) {
    const path = req.url; //definimos la constante del path de la request
    //si el path corresponde a la pagina principal, el codigo de estado de la respuesta es 200 (ok)
    //y el resultado de la respuesta es el mensaje en la consola
    if( path === '/') {
        res.statusCode = 200;
        res.end('Bienvenides a mi primer servidor y APi creados con Node.js')     
    //si el path corresponde a la pagina de los cursos, el codigo de estado de la respuesta es 200 (ok)
    //y el resultado de la respuesta es el archivo infoCursos dentro del objeto cursos que importamos
    //al principio transformado de json a string
    } else if(path === '/cursos') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos));
    } else if (path === '/cursos/programacion') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.programacion));
    } else if (path === '/cursos/matematicas') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos.infoCursos.matematicas));
    }

    //si no se cumple ninguna de estas condiciones, entonces el codigo de estado es 404 (page not found)
    //y el resultado es el mensaje en la consola
    res.statusCode = 404;
    res.end('El recurso solicitado no existe.')
}

//para que el servidor escuhce:
//1)definimos el puerto

const puerto = 3000;

//2) usamos el metodo listen con el servidor
servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
})