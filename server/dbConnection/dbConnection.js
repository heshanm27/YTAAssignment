const mongoose = require("mongoose");

//connect to mongoDB Atlas
const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DataBase Connection established");
    });
};

module.exports = connectDB;
