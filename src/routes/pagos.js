const express = require("express");
const RUTAS_PAGOS = express.Router();
const {
  getPagos,
  getPagoById,
  postPagos,
  putPago,
  deletePago,
} = require("../controllers/pagos");

RUTAS_PAGOS.route("/").get(getPagos).post(postPagos).put(putPago);

RUTAS_PAGOS.route("/:id").get(getPagoById).delete(deletePago);

module.exports = RUTAS_PAGOS;
