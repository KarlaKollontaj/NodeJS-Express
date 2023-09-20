//la primera linea siempre importa express

const express = require('express');

//la segunda linea siempre define la app como la funcion express

const app = express();

//importamos el file cursos.js

const {infoCursos} = require('./cursos.js');

//IMPLEMENTAMOS LAS RUTAS (routing o en espanol enrutamiento o direccionamiento)
//tenemos que especificar el metodo y el camino y una funcion flecha 

app.get('/', (req, res) => {
    res.send('Mi primer servidor con Express.')
});

//especificar el puerto
//o el puerto 3000 o el puerto asignando por el ambiente de trabajo (hosting por ejemplo)
//donde estamos creando el servidor

const PUERTO = process.env.PORT || 3000;

//para que el servidor escuche

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});