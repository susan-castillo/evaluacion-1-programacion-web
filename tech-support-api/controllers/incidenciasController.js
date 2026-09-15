// Se importan las dependencias necesarias (El arreglo global de incidencias y la función para obtener el siguiente ID)
const { incidencias, getSiguienteId } = require('../utils/helpers.js');

// 2. Listar Incidencias
const listarIncidencias = (req, res) => {
    return res.json(incidencias);
};

module.exports = {
    listarIncidencias,
};