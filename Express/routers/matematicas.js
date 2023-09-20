//importo express
const express = require('express');

//importo los datos de matematicas del file curso.js
const {matematicas} = require('../datos/cursos.js').infoCursos;

//creo un router para matematicas asignando routerMatematicas al metodo router
const routerMatematicas = express.Router();

//pagina cursos de matematicas
routerMatematicas.get('/', (req, res) => {
    res.send(JSON.stringify(matematicas));
});

//pagina para todos los temas de matematicas
routerMatematicas.get('/:tema', (req, res) => {
    //extraemos el tema del objeto del parametro
    const tema = req.params.tema;
    //si el tema del curso es igual al tema del parametro url que recibimos se va a incluir en resultado
    const resultados = matematicas.filter(curso => curso.tema === tema);
    //si no hay resultados correspondientes a lo que hay en el file json
    if(resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    //si no podemos enviar la respuesta en formato json
    res.send(JSON.stringify(resultados));
});

//exporto el modulo routerMatematicas
module.exports = routerMatematicas;