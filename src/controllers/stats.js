const MDB_COBROS = require("../database/schemas/cobros");
const MDB_ALUMNOS = require("../database/schemas/alumnos");

const getStats = async (req, res) => {
  const alumnos = await MDB_ALUMNOS.find();
  const cobros = await MDB_COBROS.find();

  const stats = [];

  const alumnosStats = {
    titulo: "Alumnos creados",
    contador: alumnos.length,
    url: "/alumnos",
  };
  stats.push(alumnosStats);
  const cobrosStats = {
    titulo: "Tickets de cobro creados",
    contador: cobros.length,
    url: "/cobros",
  };
  stats.push(cobrosStats);

  res.send(stats);
};

module.exports = { getStats };
