const sqlite3 = require('sqlite3').verbose();

// Conexión a la base de datos
const db = new sqlite3.Database('./tareas.db', (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
    }
});

// Crear tabla de tareas si no existe
db.run(`CREATE TABLE IF NOT EXISTS tareas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titulo TEXT NOT NULL,
    descripcion TEXT
)`, (err) => {
    if (err) {
        console.error('Error al crear la tabla:', err.message);
    } else {
        console.log('Tabla "tareas" preparada.');

        // Verificar si la tabla ya contiene datos
        db.get("SELECT COUNT(*) AS count FROM tareas", (err, row) => {
            if (err) {
                console.error('Error al verificar los datos:', err.message);
            } else if (row.count === 0) {
                // Insertar 3 filas de datos solo si la tabla está vacía
                const insertarTareas = `INSERT INTO tareas (titulo, descripcion) VALUES (?, ?)`;

                db.run(insertarTareas, ['Tarea 1', 'Descripción de la tarea 1'], function(err) {
                    if (err) {
                        console.error('Error al insertar la tarea 1:', err.message);
                    } else {
                        console.log(`Tarea 1 añadida con ID: ${this.lastID}`);
                    }
                });

                db.run(insertarTareas, ['Tarea 2', 'Descripción de la tarea 2'], function(err) {
                    if (err) {
                        console.error('Error al insertar la tarea 2:', err.message);
                    } else {
                        console.log(`Tarea 2 añadida con ID: ${this.lastID}`);
                    }
                });

                db.run(insertarTareas, ['Tarea 3', 'Descripción de la tarea 3'], function(err) {
                    if (err) {
                        console.error('Error al insertar la tarea 3:', err.message);
                    } else {
                        console.log(`Tarea 3 añadida con ID: ${this.lastID}`);
                    }
                });
            } else {
                console.log('La base de datos ya contiene tareas, no se insertan datos nuevamente.');
            }
        });
    }
});

module.exports = db;
