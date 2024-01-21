const { Client } = require("pg");

const connectionData = {
  user: "postgres",
  host: "localhost",
  database: "hotel",
  password: "1234",
  port: 5432,
};
const client = new Client(connectionData);
client.connect();

module.exports = client;
