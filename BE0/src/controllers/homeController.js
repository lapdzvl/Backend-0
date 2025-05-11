const connection = require("../config/database");

const getHomepage = (req, res) => {
  let users = [];
  connection.query("select * from Users", function (err, results, fields) {
    users = results;
    console.log(">>>Results:", results);
    res.send(JSON.stringify(users));
  });
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getTest = (req, res) => {
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  getTest,
};
