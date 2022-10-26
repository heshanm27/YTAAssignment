const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors");

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
