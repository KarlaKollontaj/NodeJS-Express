//importo express
const express = require('express');

//importo los datos de programacion del file curso.js
const {programacion} = require('../datos/cursos.js').infoCursos;

//creo un router para programacion asignando routerPorgramacion al metodo router
const routerProgramacion = express.Router();

//middleware: sirve para procesar el cuerpo de las solicitudes en cualquier metodo en formato json
routerProgramacion.use(express.json());

//pagina cursos de programacion
routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion));
});

//pagina para los lenguajes de programacion + parametro query de ordenar segun las vistas
routerProgramacion.get('/:lenguaje', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje);
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

//pagina para los lenguajes de programacion y los niveles
routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`);
    }
    res.send(JSON.stringify(resultados));
});

//POST - queremos incluir un curso nuevo en programacion
routerProgramacion.post('/', (req, res) => {
    let cursoNuevo = req.body; //extraemos el body de la request que es el curso nuevo
    programacion.push(cursoNuevo); //pushiamo in programacion el cursoNuevo
    res.send(JSON.stringify(programacion)); //enviamos el file json de programacion
});

//PUT - actualizamos un cursob(necesitamos usar el id en la url porque es un parametro unico)
routerProgramacion.put('/:id', (req, res) => {
    const cursoActualizado = req.body; //extraemos el body de la request que es el cursoActualizado
    const id = req.params.id; //extraemos el id del curso
    //en el arreglo de curso de programacion tratamos de encontrar el indice que corresponde a este curso a traves de su id 
    const indice = programacion.findIndex(curso => curso.id == id);
    //si el indice es valido vamo a remplazar el objeto que teniamos anteriormente con el curso actualizado
    if(indice >= 0) {
        programacion[indice] = cursoActualizado;
    }
    //enviamos el arreglo de curso de programacion 
    res.send(JSON.stringify(programacion));
});

//PATCH - modificamos solo algunas propriedades del curso
routerProgramacion.patch('/:id', (req, res) => {
    const infoActualizada = req.body;//extraemos el body de la request que es la infoActualizada
    const id = req.params.id; //extraemos el id del curso
    //en el arreglo de curso de programacion tratamos de encontrar el indice que corresponde a este curso a traves de su id 
    const indice = programacion.findIndex(curso => curso.id == id);
    //si el indice es valido, declaramos que el cursoAModificar corresponde a uno de los indices del arreglo programacion
    //y usamos el metodo del objeto assign que nos permite pasar un objeto que vamos a modificar (cursoAModificar) 
    //otro objeto con propriedades y valores (infoActualizada)
    if(indice >= 0) {
        const cursoAModificar = programacion[indice];
        Object.assign(cursoAModificar, infoActualizada)
    }
    //enviamos el json de programacion
    res.send(JSON.stringify(programacion));
})

//DELETE - eliminamos un curso
routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id;//extraemos el id del curso
    //en el arreglo de curso de programacion tratamos de encontrar el indice que corresponde a este curso a traves de su id 
    const indice = programacion.findIndex(curso => curso.id == id)
    //si el indice es valido usamos el metodo splice en programacion
    if(indice >= 0) {
        //splice nos permite cortar el arreglo programacion en un indice especifico (en este caso "indice")
        //y eliminar uno o varios elementos a partir de este corte (en este caso "1" elemento)
        programacion.splice(indice, 1);
    }
    //enviamos el json de programacion
    res.send(JSON.stringify(programacion))

})




//exporto el modulo routerProgramacion
module.exports = routerProgramacion;