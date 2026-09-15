// Se importan las dependencias necesarias
const express = require('express');
const router = express.Router();

// Se importan las funciones del controlador de incidencias
const {
    listarIncidencias,
    //Aqui seguiran las siguientes ...
} = require('../controllers/incidenciasController.js');

router.get('/', listarIncidencias);
//Aqui seguiran las siguientes ...

// Se exporta el router para ser utilizado en la aplicación principal
module.exports = router;