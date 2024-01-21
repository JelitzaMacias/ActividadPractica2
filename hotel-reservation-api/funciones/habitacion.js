const { Router } = require("express");
const client = require("../connection");
const route = Router();

route.get("/habitacion", (req, res) => {
  client
    .query("Select * from esquema_hotel.habitacion")
    .then((result) => res.json({ data: result.rows }))
    .catch((error) =>
      res
        .status(500)
        .json({ error: "Error al seleccionar datos", message: error.message })
    );
});

route.post("/habitacion", (req, res) => {
  const { numero, tipo, precio, hotel_id } = req.body;
  client
    .query(
      "INSERT INTO esquema_hotel.habitacion(numero, tipo, precio, hotel_id) VALUES($1, $2, $3, $4) RETURNING *",
      [numero, tipo, precio, hotel_id]
    )
    .then((result) => res.json({ data: result.rows }));
});

route.delete("/habitacion/:id", (req, res) => {
  const id = req.params.id;
  client
    .query("DELETE FROM esquema_hotel.habitacion WHERE id=$1 RETURNING *", [id])
    .then((result) => res.json({ data: result.rows }));
});

module.exports = route;
