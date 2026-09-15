// Se importan las dependencias necesarias
const express = require('express');
const router = express.Router();

// Se importan las funciones del controlador de incidencias
const {
    CrearIncidencia,
    listarIncidencias,
    buscarIncidenciaPorId,
    cambiarEstadoIncidencia,
    eliminarIncidencia,
  
  
} = require('../controllers/incidenciasController.js');

router.post('/', CrearIncidencia);
router.get('/', listarIncidencias);
router.get('/:id', buscarIncidenciaPorId);
router.put('/:id/estado', cambiarEstadoIncidencia);
router.delete('/:id', eliminarIncidencia);


// Se exporta el router para ser utilizado en la aplicación principal
module.exports = router;