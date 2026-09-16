// Se importan las dependencias necesarias
const express = require('express');
const router = express.Router();

// Se importan las funciones del controlador de incidencias
const {
    crearIncidencia,
    listarIncidencias,
    buscarIncidenciaPorId,
    cambiarEstadoIncidencia,
    eliminarIncidencia,
    obtenerEstadisticas,
    clasificarIncidencia


} = require('../controllers/incidenciasController.js');

router.post('/', crearIncidencia);
router.get('/', listarIncidencias);

// 1. Ruta estática
router.get('/estadisticas', obtenerEstadisticas);

// 2. Rutas que usan :id dinámico
router.put('/:id/estado', cambiarEstadoIncidencia);
router.get('/:id/clasificacion', clasificarIncidencia);

router.delete('/:id', eliminarIncidencia);
router.get('/:id', buscarIncidenciaPorId);

// Se exporta el router para ser utilizado en la aplicación principal
module.exports = router;