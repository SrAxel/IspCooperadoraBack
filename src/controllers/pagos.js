const MDB_PAGOS = require("../database/schemas/Pagos");

const getPagos = async (req, res) => {
  try {
    const { limit, alumnoId, last } = req.query; // Obtener los parámetros de consulta 'limit', 'alumnoId' y 'last'
    let query = MDB_PAGOS.find();

    // Filtrar por alumno si se proporciona 'alumnoId'
    if (alumnoId) {
      query = query.where("alumno_id").equals(alumnoId);
    }

    // Ordenar por fecha de creación descendente
    query = query.sort({ fechaCreacion: -1 });

    // Limitar el número de resultados si se proporciona 'limit'
    if (limit) {
      query = query.limit(parseInt(limit, 10));
    }

    // Si se proporciona 'last', limitar a los últimos 2 pagos
    if (last) {
      query = query.limit(2);
    }

    const pagos = await query.populate("alumno_id").populate("cobro_id");

    res.send({ pagos });
  } catch (error) {
    console.error("Error al obtener los pagos:", error);
    res.status(500).send({ error: "Error al obtener los pagos" });
  }
};

const getPagoById = async (req, res) => {
  try {
    const { id } = req.params; // Extrae el ID de los parámetros de la solicitud

    // Encuentra el pago por ID y realiza las operaciones de populate
    const pago = await MDB_PAGOS.findById(id)
      .populate("alumno_id")
      .populate("cobro_id");

    if (!pago) {
      return res.status(404).send({ error: "Pago no encontrado" });
    }

    res.send(pago); // Envía el pago encontrado
  } catch (error) {
    console.error("Error al obtener el pago:", error);
    res.status(500).send({ error: "Error al obtener el pago" });
  }
};

const postPagos = async (req, res) => {
  try {
    const { body } = req;
    const response = await MDB_PAGOS.create(body);
    res.send({ ...response._doc });
  } catch (error) {
    res.status(500).send(error);
  }
};

const putPago = async (req, res) => {
  try {
    const { body } = req;
    const { id } = body;
    const response = await MDB_PAGOS.findByIdAndUpdate(id, { pagado: true });
    res.send({ ...response._doc });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePago = async (req, res) => {
  const { id } = req.params;

  try {
    // Busca y elimina el pago en la base de datos por su ID
    const pagoEliminado = await Pago.findByIdAndDelete(id);

    if (!pagoEliminado) {
      return res.status(404).json({ error: "Pago no encontrado" });
    }

    res.status(200).json({ message: "Pago eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el pago" });
  }
};

module.exports = {
  getPagos,
  getPagoById,
  postPagos,
  putPago,
  deletePago,
};
