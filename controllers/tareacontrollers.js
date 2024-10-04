const Tarea = require("../models/tareaModel");

// ver tareas
const listarTarea = async (req, res) => {
    try {
        const task = await Tarea.find();
        res.json(task)
    }catch (e){
        res.status(500).json({mensaje:"Error listar las tareas "})
    }
}

//crear una Tarea
const newTarea = async (req, res) => {
    try{
        const {nombre} = req.body;
        const nuevaTarea = new Tarea({nombre});
        await nuevaTarea.save();
        res.json({mensaje: nuevaTarea})
    }catch(e) {
        res.status(500).json({mensaje: "Error al crear la nueva tarea"})
    }
}

module.exports = {listarTarea, newTarea}