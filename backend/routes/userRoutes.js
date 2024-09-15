const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  checkAuth,
} = require("../controllers/userController");
const {checkForAuthentication} = require("../middlewares/auth");
const router = express.Router();

router.post("/signup", registerUser);
router.post("/", loginUser);
router.post("/logout", logoutUser);
router.get("/authCheck", checkForAuthentication, checkAuth); // New route for authentication check

module.exports = router;
