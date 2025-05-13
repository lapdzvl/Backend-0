const express = require("express");
const {
  getHomepage,
  getABC,
  getTest,
  postCreateuser,
  getCreatePage,
} = require("../controllers/homeController");

const router = express.Router();

// router.Method('/route', handler)

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/lap", getTest);

router.get("/create", getCreatePage);

router.post("/create-user", postCreateuser);

module.exports = router;
