const express = require('express');
const tareasRoutes = require('./routes/tareas');
const bodyParserMiddleware = require('./middlewares/bodyParser');
const notFoundMiddleware = require('./middlewares/notFound');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware global
app.use(bodyParserMiddleware);

// Rutas
app.use('/tareas', tareasRoutes);

// Middleware para manejar rutas no encontradas
app.use(notFoundMiddleware);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
