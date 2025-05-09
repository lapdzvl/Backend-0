require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const mysql = require("mysql2");

console.log(">>>check env: ", process.env);
const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode .uat .prod
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

// khai ba'o route
app.use("/", webRoutes);

//test connection

// Create the connection to database

async function main() {
  const connection = await mysql.createConnection({
    host: "localhost",
    port: 3307,
    user: "root",
    password: "123456",
    database: "hoidanit",
  });

  connection.query("select * from Users", function (err, results, fields) {
    console.log(">>>Results:", results);
    console.log(">>>fielsd:", fields);
  });
}
main().catch((err) => {
  console.error(">>> Error:", err);
});
app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
