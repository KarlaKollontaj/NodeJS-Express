//escribimos una url
const miURL = new URL('https://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');
//accedemos al nombre del host
console.log(miURL.hostname); 
//accedemos al camino del recurso
console.log(miURL.pathname);
//accedemos a los parametros
console.log(miURL.searchParams);
//accedemos al tipo de los parametros
console.log(typeof miURL.searchParams);
//accedemos al valor de la clave ordenar
console.log(miURL.searchParams.get('ordenar'));
//accedemos al valor de la clave nivel
console.log(miURL.searchParams.get('nivel'));
//accedemos al protcolo usado por este url
console.log(miURL.protocol);