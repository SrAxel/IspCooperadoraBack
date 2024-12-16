const express = require("express");
const RUTAS_ALUMNOS = express.Router();
const {
  obtenerAlumnos,
  crearAlumno,
  eliminarAlumno,
  obtenerAlumnoIndividual,
} = require("../controllers/alumnos"); // traemos la funcion de crearAlumno y ObtenerAlumnos

RUTAS_ALUMNOS.route("/") // generamos las rutas // ruta origen
  .get(obtenerAlumnos)
  .post(crearAlumno);

RUTAS_ALUMNOS.route("/:id").delete(eliminarAlumno).get(obtenerAlumnoIndividual);

module.exports = RUTAS_ALUMNOS; // las usamos en index.js
