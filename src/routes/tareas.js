const express = require('express');
const router = express.Router();
const {
    obtenerTareas,
    crearTarea,
    obtenerTareaPorId,
    eliminarTarea
} = require('../controllers/tareasController');
const validarTarea = require('../middlewares/validarTarea');

// Ruta para obtener todas las tareas
router.get('/', obtenerTareas);

// Ruta para crear una nueva tarea (con validación)
router.post('/', validarTarea, crearTarea);

// Ruta para obtener una tarea específica por ID
router.get('/:id', obtenerTareaPorId);

// Ruta para eliminar una tarea por ID
router.delete('/:id', eliminarTarea);

module.exports = router;
