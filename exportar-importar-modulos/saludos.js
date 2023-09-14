function saludar(nombre) {
    return `Hola ${nombre}`;
}

function saludarHolaMundo() {
    return 'Hola, mundo!';
}

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
};


//asi se exporta todo el modulo actual
//el nombre saludar no es obligatorio que sea ugual al nombre de la funcion
//que es el que esta despues de igual, pero es util que lo sea porque se va exportar
//con este nombre
//(esta sintaxis es igual a la de antes! tu eliges!)
//module.exports.saludar = saludar;
//module.exports.saludarHolaMundo = saludarHolaMundo;


