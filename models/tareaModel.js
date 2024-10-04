const mongoose = require('mongoose');

// crear un archivo en la coleccion con los siguientes datos
const tareaSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: false
    },
    descripcion:{
        type: String,
        required: true
    },
    Estado:{
        type: String,
        required: false
    }
});

const tarea = mongoose.model('tarea', tareaSchema)

module.exports = tarea