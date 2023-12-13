const mongoose = require("mongoose");

const connectdb = (url, PORT, app) => {
  mongoose
    .connect(url, {
      dbName: "AttendeeManagementSystem",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Attendence Management System Database connected successfully");
      app.listen(PORT, () => {
        console.log("Server listening on http://localhost:" + PORT);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = connectdb;