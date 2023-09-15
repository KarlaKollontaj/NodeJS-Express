//AQUI IMPORTAMOS EL JSON DE CURS.JSON A JS
//const curso = require('./curso.json');

// console.log(curso);
// console.log(typeof curso);
// console.log(curso.titulo);
// console.log(curso.temas);

//AHORA TRABAJAMOS EN UN OBJETO JS PARA TRANSFORMALO EN JSON con STRINGIFY()

let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45642, 
    "numLikes": 21123,
    "temas": [
        "Javascript",
        "Node.js"
    ],
    "esPublico": true
}

let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);

//AHORA VAMOS A HACER EL CONTRARIO:
//RECIBIMOS UNA CADENA DE CARACTERES (TEXTO EN JSON) Y QUEREMOS TRANSFORMARLO EN UN OBJETO DE JS

let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);