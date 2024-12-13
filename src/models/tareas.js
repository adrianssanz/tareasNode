const db = require('../database');

// Obtener todas las tareas
const obtenerTareas = () => {
    return new Promise((resolve, reject) => {
        db.all(`SELECT * FROM tareas`, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
};

// Crear una nueva tarea
const crearTarea = (titulo, descripcion) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)`;
        db.run(query, [titulo, descripcion], function(err) {
            if (err) {
                reject(err);
            } else {
                resolve({ id: this.lastID, titulo, descripcion });
            }
        });
    });
};

// Obtener una tarea por ID
const obtenerTareaPorId = (id) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM tareas WHERE id = ?`;
        db.get(query, [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
};

// Eliminar una tarea por ID
const eliminarTarea = (id) => {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM tareas WHERE id = ?`;
        db.run(query, [id], function(err) {
            if (err) {
                reject(err);
            } else if (this.changes === 0) {
                reject(new Error('Tarea no encontrada.'));
            } else {
                resolve({ message: 'Tarea eliminada exitosamente.' });
            }
        });
    });
};

module.exports = {
    obtenerTareas,
    crearTarea,
    obtenerTareaPorId,
    eliminarTarea,
};
