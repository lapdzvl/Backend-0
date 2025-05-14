const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../services/CRUDService");

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

const getUpdatePage = async (req, res) => {
  const userID = req.params.id;
  let user = await getUserById(userID);
  res.render("edit.ejs", { userEdit: user }); // x <- y , y gan gia tri cho x, gia tri bay gio la x
};

const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;

  console.log(
    "email: ",
    email,
    "name: ",
    name,
    "city: ",
    city,
    "userId: ",
    userId
  );

  await updateUserById(email, city, name, userId);

  // res.send("Updated Users Succeed");
  res.redirect("/");
};

const postDeleteUser = async (req, res) => {
  const userID = req.params.id;
  let user = await getUserById(userID);
  res.render("delete.ejs", { userEdit: user });
};

const postHandlerRemoveUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};

module.exports = {
  getHomepage,
  getABC,
  getTest,
  postCreateuser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandlerRemoveUser,
};
