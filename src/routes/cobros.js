const express = require("express");
const RUTAS_COBROS = express.Router();
const {
  obtenerCobros,
  crearCobro,
  eliminarCobro,
  modificarCobro,
} = require("../controllers/cobros"); // traemos la funcion de crearCobro y ObtenerCobros

RUTAS_COBROS.route("/") // generamos las rutas // ruta origen
  .get(obtenerCobros)
  .post(crearCobro);

RUTAS_COBROS.route("/:id").delete(eliminarCobro).put(modificarCobro);

module.exports = RUTAS_COBROS; // las usamos en index.js
