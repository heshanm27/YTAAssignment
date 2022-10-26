const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors");

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
