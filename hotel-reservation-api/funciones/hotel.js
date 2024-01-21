const { Router } = require("express");
const client = require("../connection");
const route = Router();

route.get("/hotel", (req, res) => {
  client
    .query("Select * from esquema_hotel.hotel")
    .then((result) => res.json({ data: result.rows }))
    .catch((error) =>
      res
        .status(500)
        .json({ error: "Error al seleccionar datos", message: error.message })
    );
});

route.post("/hotel", (req, res) => {
  const { nombre, direccion } = req.body;
  client
    .query(
      "INSERT INTO esquema_hotel.hotel(nombre, direccion) VALUES($1, $2) RETURNING *",
      [nombre, direccion]
    )
    .then((result) => res.json({ data: result.rows }));
});

route.delete("/hotel/:id", (req, res) => {
  const id = req.params.id;
  client
    .query("DELETE FROM esquema_hotel.hotel WHERE id=$1 RETURNING *", [id])
    .then((result) => res.json({ data: result.rows }));
});

module.exports = route;
