const tareaModel = require('../models/tareas');

// Obtener todas las tareas
const obtenerTareas = async (req, res) => {
    try {
        const tareas = await tareaModel.obtenerTareas();
        res.json(tareas);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener tareas' });
    }
};

// Crear una nueva tarea
const crearTarea = async (req, res) => {
    const { titulo, descripcion } = req.body;
    try {
        const nuevaTarea = await tareaModel.crearTarea(titulo, descripcion);
        res.status(201).json(nuevaTarea);
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
};

// Obtener una tarea específica por ID
const obtenerTareaPorId = async (req, res) => {
    const tareaId = parseInt(req.params.id);
    try {
        const tarea = await tareaModel.obtenerTareaPorId(tareaId);
        if (!tarea) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.json(tarea);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener la tarea' });
    }
};

// Eliminar una tarea por ID
const eliminarTarea = async (req, res) => {
    const tareaId = parseInt(req.params.id);
    try {
        await tareaModel.eliminarTarea(tareaId);
        res.status(204).send(); // Respuesta sin contenido
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
};

module.exports = {
    obtenerTareas,
    crearTarea,
    obtenerTareaPorId,
    eliminarTarea,
};
