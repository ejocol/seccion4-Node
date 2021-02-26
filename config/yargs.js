const { command, describe } = require('yargs');


const colors = require('colors');
const argv = require ('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        //demandOption: true,
        default: false,
        describe: 'Ver o no la tabla de multiplicar'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Limite superior de la tabla'
    })

    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'Debe ingresar una base númerica!!!'.red
        }
        return true;
    }).argv;


module.exports = argv;