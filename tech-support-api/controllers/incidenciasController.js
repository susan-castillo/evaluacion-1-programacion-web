// Se importan las dependencias necesarias (El arreglo global de incidencias y la función para obtener el siguiente ID)
const { incidencias, getSiguienteId } = require('../utils/helpers.js');

const crearIncidencia = (req, res) => {
 const { empleado, area, descripcion, prioridad } = req.body;

 // Validar que todos los campos existan
    if (
        empleado === undefined ||
        area === undefined ||
        descripcion === undefined ||
        prioridad === undefined
    ) {
        return res.status(400).json({
            error: 'Todos los campos son obligatorios'
        });
    }
    // Validar que no sean cadenas vacías o solo espacios
    if (
        empleado.trim() === '' ||
        area.trim() === '' ||
        descripcion.trim() === '' ||
        prioridad.trim() === ''
    ) {
        return res.status(400).json({
            error: 'Los campos no pueden estar vacíos'
        });
    }

     // Validar prioridad
    if (
        prioridad !== 'Alta' &&
        prioridad !== 'Media' &&
        prioridad !== 'Baja'
    ) {
        return res.status(400).json({
            error: 'La prioridad debe ser Alta, Media o Baja'
        });
    }

     // Crear la incidencia
    const nuevaIncidencia = {
        id: getSiguienteId(),
        empleado: empleado.trim(),
        area: area.trim(),
        descripcion: descripcion.trim(),
        prioridad: prioridad,
        estado: 'Pendiente'
    };
 
    // Agregar la incidencia al arreglo global
    incidencias.push(nuevaIncidencia);
    return res.status(201).json(nuevaIncidencia);
};

// 2. Listar Incidencias
const listarIncidencias = (req, res) => {
    return res.json(incidencias);
};

// 3. Buscar Incidencia por ID
const buscarIncidenciaPorId = (req, res) => {
    const id = Number(req.params.id);

    const incidencia = incidencias.find((inc) => inc.id === id);

    if (!incidencia) {
        return res.status(404).json({
            mensaje: 'Incidencia no encontrada'
        });
    }

    return res.status(200).json(incidencia);
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

// 5. Eliminar Incidencia
const eliminarIncidencia = (req, res) => {
  const { id } = req.params;

  const index = incidencias.findIndex(inc => inc.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ mensaje: "Incidencia no encontrada" });
  }

  incidencias.splice(index, 1);
  return res.json({ mensaje: "Incidencia eliminada correctamente" });
};

module.exports = {
    CrearIncidencia,
    listarIncidencias,
    buscarIncidenciaPorId,
    cambiarEstadoIncidencia,
    eliminarIncidencia, 
};