//const saludos = require('./saludos.js');

//para acceder a las propriedades del modulo importado,
//siendo el modulo un objeto, tenemos que llamar al objeto que se llama saludo en este caso
//y con la dot notation acceder a su propriedad que en este caso el la funcion saludar
//y le pasamos el argumento
//console.log(saludos.saludar('freeCodeCamp'));
//console.log(saludos.saludarHolaMundo());

const { saludar, saludarHolaMundo } = require('../saludos.js');

console.log(saludarHolaMundo());
console.log(saludar('freeCodeCamp'))