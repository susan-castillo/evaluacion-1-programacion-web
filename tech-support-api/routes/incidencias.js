// Se importan las dependencias necesarias
const express = require('express');
const router = express.Router();

// Se importan las funciones del controlador de incidencias
const {
    CrearIncidencia,
    listarIncidencias,
    
} = require('../controllers/incidenciasController.js');

router.get('/', listarIncidencias);
router.post('/', CrearIncidencia);
// Se exporta el router para ser utilizado en la aplicación principal
module.exports = router;