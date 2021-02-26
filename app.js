//const {opcion, options } = require ('yargs');
const { crearTabla } = require('./helpers/multiplicar');
const argv =require('./config/yargs');



const colors = require('colors');
console.clear();
//console.log(argv);

//console.log('base: yargs', argv.b)
//const base = 125;   

    crearTabla( argv.b, argv.l, argv.h )
    .then(nombreArchivo => console.log(nombreArchivo, 'Creada con éxito'))
    .catch(error => console.log(error));
//