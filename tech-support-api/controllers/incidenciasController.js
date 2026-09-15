// Se importan las dependencias necesarias (El arreglo global de incidencias y la función para obtener el siguiente ID)
const { incidencias, getSiguienteId } = require('../utils/helpers.js');

// 2. Listar Incidencias
const listarIncidencias = (req, res) => {
    return res.json(incidencias);
};

// 4. Cambiar Estado de Incidencia
const cambiarEstadoIncidencia = (req, res) => {
  const { id } = req.params;
  const { estado } = req.body;

  // Validar que la incidencia exista
  const incidencia = incidencias.find(inc => inc.id === parseInt(id));

  if (!incidencia) {
    return res.status(404).json({ mensaje: "Incidencia no encontrada" });
  }

  // Validar el estado
  switch (estado) {
    case "Pendiente":
    case "En Proceso":
    case "Resuelta":
    case "Cancelada":
      incidencia.estado = estado;
      return res.json({ mensaje: "Estado actualizado correctamente", incidencia });
    default:
      return res.status(400).json({ mensaje: "Estado no válido" });
  }
};

module.exports = {
    listarIncidencias,
    cambiarEstadoIncidencia,
};