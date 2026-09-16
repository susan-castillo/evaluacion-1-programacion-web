// Definicon de un arreglo en memoria para almacenar las incidencias 
// y una variable para llevar el control del siguiente id disponible.

const incidencias = [];

let siguienteId = 1;

module.exports = {
    incidencias,
    getSiguienteId: () => siguienteId++
}; 