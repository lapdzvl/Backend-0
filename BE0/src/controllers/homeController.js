const connection = require("../config/database");
const { getAllUsers } = require("../services/CRUDService");

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};

const getABC = (req, res) => {
  res.send("check ABC");
};

const getTest = (req, res) => {
  res.render("sample.ejs");
};

const postCreateuser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  console.log("email: ", email, "name: ", name, "city: ", city);

  // let {email, name, city} = req.body
  //   INSERT INTO Users (email, name, city)
  // VALUES('Thao@gmail.com', 'Tha', 'Thai Binh')

  // connection.query(
  //   `INSERT INTO Users (email, name, city)
  // VALUES(?, ?, ?)`,
  //   [email, name, city], // lay data do!ng
  //   function (err, results) {
  //     console.log(results);
  //     res.send("create user succeed !");
  //   }
  // );

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city) VALUES(?, ?, ?)`,
    [email, name, city] // lay data do!ng
  );

  console.log("check: ", results);
  res.send("Succeed New Users");
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  getTest,
  postCreateuser,
  getCreatePage,
};
