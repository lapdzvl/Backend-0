const express = require("express");
const {
  getHomepage,
  getABC,
  getTest,
  postCreateuser,
  getCreatePage,
  getUpdatePage,
  postUpdateUser,
  postDeleteUser,
  postHandlerRemoveUser,
} = require("../controllers/homeController");

const router = express.Router();

// router.Method('/route', handler)

router.get("/", getHomepage);
router.get("/abc", getABC);
router.get("/lap", getTest);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateuser);

router.post("/update-user", postUpdateUser);

router.post("/delete-user/:id", postDeleteUser);

router.post("/delete-user", postHandlerRemoveUser);

module.exports = router;
