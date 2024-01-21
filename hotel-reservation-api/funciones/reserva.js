const { Router } = require("express");
const client = require("../connection");
const route = Router();

route.get("/reserva", (req, res) => {
  client
    .query("Select * from esquema_hotel.reserva")
    .then((result) => res.json({ data: result.rows }))
    .catch((error) =>
      res
        .status(500)
        .json({ error: "Error al seleccionar datos", message: error.message })
    );
});

route.post("/reserva", (req, res) => {
  const { fecha_inicio, fecha_fin, usuario_id, habitacion_id } = req.body;
  client
    .query(
      "INSERT INTO esquema_hotel.reserva(fecha_inicio, fecha_fin, usuario_id, habitacion_id) VALUES($1, $2, $3, $4) RETURNING *",
      [fecha_inicio, fecha_fin, usuario_id, habitacion_id]
    )
    .then((result) => res.json({ data: result.rows }));
});

route.delete("/reserva/:id", (req, res) => {
  const id = req.params.id;
  client
    .query("DELETE FROM esquema_hotel.reserva WHERE id=$1 RETURNING *", [id])
    .then((result) => res.json({ data: result.rows }));
});

module.exports = route;
