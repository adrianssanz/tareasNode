const validarTarea = (req, res, next) => {
    const { titulo, descripcion } = req.body;
    if (!titulo || !descripcion) {
        return res.status(400).json({ error: 'Faltan campos obligatorios' });
    }
    next();
};

module.exports = validarTarea;
