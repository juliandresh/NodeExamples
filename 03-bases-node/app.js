
const { crearArchivo } = require('./multiplicar/multiplicar');

let base = 9;

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(err => console.log(err));
