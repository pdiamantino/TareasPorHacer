const descripcion = {
    demand:true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
                .command('crear', 'Crea un elemento por hacer', {
                    descripcion
                })
                .command('actualizar', 'Actualiza el estado de una tarea', {
                    descripcion,
                    completado
                })
                .command('borrar', 'Se procedio a eliminar', {
                    descripcion
                })
                .help()
                .argv;

module.exports = {
    argv
}