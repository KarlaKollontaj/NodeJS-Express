//la primera linea siempre importa express

const express = require('express');

//la segunda linea siempre define la app como la funcion express

const app = express();

//importamos el file cursos.js

const {infoCursos} = require('./cursos.js');

//ROUTER
//creo un router para programacion asignando routerPorgramacion al metodo router
//luego le digo a la app que use routerProgramacion asociandolo al path entre parentesis
const routerProgramacion = express.Router();
app.use('/api/cursos/programacion', routerProgramacion);

//creo un router para matematicas asignando routerMatematicas al metodo router
//luego le digo a la app que use routerMatematicas asociandolo al path entre parentesis
const routerMatematicas = express.Router();
app.use('/api/cursos/matematicas', routerMatematicas)

//IMPLEMENTAMOS LAS RUTAS (routing o en espanol enrutamiento o direccionamiento)
//tenemos que especificar el metodo y el camino y una funcion flecha 

//pagina principal
app.get('/', (req, res) => {
    res.send('Mi primer servidor con Express.')
});

//pagina cursos
app.get('/api/cursos', (req, res) => {
    res.send(infoCursos); 
    //si lo necesita convertir a formato JSON -> res.send(JSON.stringify(infoCursos));
});

//pagina cursos de programacion
routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

//pagina para todos lod lenguajes de programacion + parametro query de ordenar segun las vistas
routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }

    //parametro query!
    //si en la request el parametro ordenar corresponde a vistas
    //entonces envia un json de resultados ordenados con sort de mayor a menor
    //si quieres de menor a mayor: a.vistas - b.vistas
    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a, b) => b.vistas - a.vistas)));
    }

    res.send(JSON.stringify(resultados));
});

//pagina para todos los lenguajes de programacion y todos los niveles
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    res.send(JSON.stringify(resultados));
});

//pagina cursos de matematicas
routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});

//pagina para todos los temas de matematicas
routerMatematicas.get('/:tema', (req, res) => {
    //extraemos el tema del objeto del parametro
    const tema = req.params.tema;
    //si el tema del curso es igual al tema del parametro url que recibimos se va a incluir en resultado
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);
    //si no hay resultados correspondientes a lo que hay en el file json
    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    //si no podemos enviar la respuesta en formato json
    res.send(JSON.stringify(resultados));
});



//especificar el puerto
//o el puerto 3000 o el puerto asignando por el ambiente de trabajo (hosting por ejemplo)
//donde estamos creando el servidor

const PUERTO = process.env.PORT || 3000;

//para que el servidor escuche

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});