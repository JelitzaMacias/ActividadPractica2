const express = require("express");
const app = express();
const port = 3000;
const usuario = require("./funciones/usuario.js");
const hotel = require("./funciones/hotel.js");
const reserva = require("./funciones/reserva.js");
const habitacion = require("./funciones/habitacion.js");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("", reserva);
app.use("", usuario);
app.use("", hotel);
app.use("", habitacion);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
