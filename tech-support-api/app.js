// Se especifica el uso de express
const express = require('express');
// Se importan las rutas de los endpoints
const incidenciasRoutes = require('./routes/incidencias.js');
// Se crea la aplicación de express
const app = express();
// Se especifica el puerto en el que correrá la aplicación
const port = 3124;

// Se especifica el uso de express.json() para poder recibir datos en formato JSON
app.use(express.json());
app.use('/incidencias', incidenciasRoutes);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});