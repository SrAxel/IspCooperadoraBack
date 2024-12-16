// se realiza el esquema de almacenamieno de datos utilizando la conexion a la DB

const mongoose = require("mongoose");

const CobrosSchema = new mongoose.Schema({
 titulo: String,
  descripcion: String,
  monto: Number,
 
});
// luego exportamos este esquema para utilizarlo en alumnos.js/controllers
module.exports = mongoose.model("Cobros", CobrosSchema); // 1 nombre DB, 2 el esquema
