
const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const { argv } = require('././config/yargs');
const colors = require('colors');
let comando = argv._[0];

switch(comando) {
    case 'listar':
        listar (argv.base, argv.limite)
        .then( ( resultado ) => console.log(`Esta es la tabla de multiplicar de ${argv.base} hasta el ${argv.limite}\n${resultado}`.rainbow))
        .catch(e => console.log(e));
    break;

    case 'crear':
        crearArchivo( argv.base, argv.limite)
        .then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(e => console.log(e));    
        break;

    default:
        console.log('Comando no reconocido ')
}

console.log(argv);

//console.log('base ', argv.base);

// let parametro = argv[2];
// let base = parametro.split('=')[1];

