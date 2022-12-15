const express = require("express");
const sql = require("mssql");
const app = express();
const bodyParser = require("body-parser");
const router = require("./apiMethod");
const cors = require("cors");

app.use(cors());
app.set("api_secret_key", require("./config").api_secret_key);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/employee", require("./verify-token"));
// app.use("/token", require("./tokenRouter"));
app.use("/employee", require("./employeeRouter"));




const config = {
  user: "Code1x2!",
  password: "Arita2021!",
  server: "188.138.41.86",
  database: "PinkyBakery",
  options: {
    encrypt: false,
    trustServerCertificate: true,
    enableArithAbort: true,
  },
};
app.use(router);

const server = app.listen(3500, async function () {
  try {
    sqlConRes = await sql.connect(config);
    console.log("Uygulama Başlatıldı.");
  } catch (error) {
    console.log("Uygulama Başlatılamadı.", error);
  }
});
