const http = require('http');

//info sobre req
// const servidor = http.createServer((req, res) => {
//     console.log('===> req(solicitud)');
//     console.log(req.url);
//     console.log(req.method);
//     console.log(req.headers);
//     res.end('Buenos dias a todes!');
// });

//info sobre res
const servidor = http.createServer((req, res) => {
    console.log('===> res (respuesta)');
    //para ver el codigo de estado
    console.log(res.statusCode);
    //para cambiar el codigo de estado
    res.statusCode = 404;
    console.log(res.statusCode);
    //para cambiar el header con info adicional
    res.setHeader('content-type', 'application/json');
    console.log(res.getHeaders());
    res.end('Buenos dias a todes!')
});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`)
});