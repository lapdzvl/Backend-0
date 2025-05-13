const express = require("express");
const {
  getHomepage,
  getABC,
  getTest,
  postCreateuser,
} = require("../controllers/homeController");

const router = express.Router();

// router.Method('/route', handler)

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/lap", getTest);

router.post("/create-user", postCreateuser);

module.exports = router;
