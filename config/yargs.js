const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    } 
}

const argv = require('yargs')
    .command('listar', 'lista la multiplicación realizada', opts)
    .command('crear', 'genera un archivo con los parametros ingresados', opts)
    .help()
    .argv;


module.exports = {
    argv
}