const connection = require("../config/database");

const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  return results;
};

const getUserById = async (userID) => {
  let [results, fields] = await connection.query(
    "select * from Users where id = ?",
    [userID]
  );
  let user = results && results.length > 0 ? results[0] : {};

  return user;
};

const updateUserById = async (email, city, name, userId) => {
  let [results, fields] = await connection.query(
    ` UPDATE Users SET email = ?, city = ?, name = ? WHERE id = ?`,
    [email, city, name, userId] // lay data do!ng
  );
};

const deleteUserById = async (id) => {
  let [results, fields] = await connection.query(
    `delete from Users where id = ?`,
    [id] // lay data do!ng
  );
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
