const { Router } = require("express");
const client = require("../connection");
const route = Router();

route.post("/login", (req, res) => {
  const { correo, contrasena } = req.body;
  client
    .query(
      "Select * from esquema_hotel.usuario where correo = $1 AND contrasena = $2",
      [correo, contrasena]
    )
    .then((result) => {
      if (result.rows.length > 0) {
        res.json({ data: result.rows });
      } else {
        res
          .status(500)
          .json({ error: "Error al login datos", message: error.message });
      }
    })
    .catch((error) =>
      res
        .status(500)
        .json({ error: "Error al login datos", message: error.message })
    );
});

route.get("/usuario", (req, res) => {
  client
    .query("Select * from esquema_hotel.usuario")
    .then((result) => res.json({ data: result.rows }))
    .catch((error) =>
      res
        .status(500)
        .json({ error: "Error al seleccionar datos", message: error.message })
    );
});

route.post("/usuario", (req, res) => {
  const { nombre, correo, contrasena } = req.body;
  client
    .query(
      "INSERT INTO esquema_hotel.usuario(nombre, correo, contrasena) VALUES($1, $2, $3) RETURNING *",
      [nombre, correo, contrasena]
    )
    .then((result) => res.json({ data: result.rows }));
});

route.delete("/usuario/:id", (req, res) => {
  const id = req.params.id;
  client
    .query("DELETE FROM esquema_hotel.usuario WHERE id=$1 RETURNING *", [id])
    .then((result) => res.json({ data: result.rows }));
});

module.exports = route;
