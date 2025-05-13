require("dotenv").config();
const express = require("express");
const path = require("path");
const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const connection = require("./config/database");

console.log(">>>check env: ", process.env);
const app = express(); //app express
const port = process.env.PORT || 8888; //port => hardcode .uat .prod
const hostname = process.env.HOST_NAME;

//config req.body, la'y du lieu tu client
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config template engine
configViewEngine(app);

// khai ba'o route
app.use("/", webRoutes);

//test connection

// connection.query("select * from Users", function (err, results, fields) {
//   console.log(">>>Results:", results);
// });

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
