//packages import
const express = require("express");
const router = express.Router();
// const verifyLoggedIn  = require("../../middleware/VerifyLoggedIn");
const { userDetail } = require("../controller/user");


//POST Methods
// router.route("/update").post(verifyLoggedIn(), updateUserData);
// router.route("/signed-url").post(verifyLoggedIn(), SignedUrl);

//GET Methods
router.route("/userdetail").get(userDetail);
module.exports = router;
