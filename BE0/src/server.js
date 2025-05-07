const express = require("express");
const path = require("path");
const app = express(); //app express
const port = 8081; //port

//confic template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// khai ba'o route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.send("check ABC");
});

app.get("/test", (req, res) => {
  // res.send("<h1>Hello World!</h1>");
  res.render("sample.ejs");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
