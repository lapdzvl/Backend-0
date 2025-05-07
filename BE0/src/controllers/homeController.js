const getHomepage = (req, res) => {
  res.send("Hello World! & Anh Lap");
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
