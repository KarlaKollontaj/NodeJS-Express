//importo express
const express = require('express');

//importo los datos de programacion del file curso.js
const {programacion} = require('../datos/cursos.js').infoCursos;

//creo un router para programacion asignando routerPorgramacion al metodo router
const routerProgramacion = express.Router();

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


//exporto el modulo routerProgramacion
module.exports = routerProgramacion;