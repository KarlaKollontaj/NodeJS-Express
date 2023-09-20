//la primera linea siempre importa express

const express = require('express');

//la segunda linea siempre define la app como la funcion express

const app = express();

//importamos el file cursos.js

const {infoCursos} = require('./datos/cursos.js');

//ROUTER
//importo el routerProgramacion de la carpeta routers
//luego le digo a la app que use routerProgramacion asociandolo al path entre parentesis
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

//importo el routerMatematicas de la carpeta routers
//luego le digo a la app que use routerMatematicas asociandolo al path entre parentesis
const routerMatematicas = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatematicas);

//IMPLEMENTAMOS LAS RUTAS (routing o en espanol enrutamiento o direccionamiento)

//pagina principal
app.get('/', (req, res) => {
    res.send('Mi primer servidor con Express.')
});

//pagina cursos
app.get('/api/cursos', (req, res) => {
    res.send(infoCursos); 
    //si lo necesita convertir a formato JSON -> res.send(JSON.stringify(infoCursos));
});


//especificar el puerto
//o el puerto 3000 o el puerto asignando por el ambiente de trabajo (hosting por ejemplo)
//donde estamos creando el servidor

const PUERTO = process.env.PORT || 3000;

//para que el servidor escuche

app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});