const User = require("../models//user");
const nodemailer = require("nodemailer");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/** GET: http://localhost:8080/api/v1/user/userdetails
 * @param : {
  "email": "surajlal3838@gmail.com"
}
*/
const userDetail = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Working Good",
      error: null,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "something went wrong",
      error: error,
    });
  }
};



module.exports = {
  userDetail,
};
