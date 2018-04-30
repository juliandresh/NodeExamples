
const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.limite, argv.base)
        .then(archivo => console.log(`Archivo creado: ${ archivo }`))
        .catch(err => console.log(err));    
    break;

    default:
    console.log('Comando no reconocido');        
}

