const connection = require("../config/database");

const getHomepage = (req, res) => {
  return res.render("home.ejs");
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getTest = (req, res) => {
  res.render("sample.ejs");
};

const postCreateuser = (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  console.log("email: ", email, "name: ", name, "city: ", city);

  // let {email, name, city} = req.body
  //   INSERT INTO Users (email, name, city)
  // VALUES('Thao@gmail.com', 'Tha', 'Thai Binh')

  connection.query(
    `INSERT INTO Users (email, name, city)
  VALUES(?, ?, ?)`,
    [email, name, city], // lay data do!ng
    function (err, results) {
      console.log(results);
      res.send("create user succeed !");
    }
  );
};

module.exports = {
  getHomepage,
  getABC,
  getTest,
  postCreateuser,
};
