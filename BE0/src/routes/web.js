const express = require("express");
const {
  getHomepage,
  getABC,
  getTest,
  postCreateuser,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");

const router = express.Router();

// router.Method('/route', handler)

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/lap", getTest);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateuser);

module.exports = router;
