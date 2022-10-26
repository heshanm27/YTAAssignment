const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors");

//modules import
const notFound = require("./middleware/notFound");

//Router module imports
const authorRoute = require("./routes/authorRoute");
const bookRoute = require("./routes/bookRoute");

// //route paths
app.use("/api/v1/author", authorRoute);
app.use("/api/v1/book", bookRoute);

// Not found Route Middleware
app.use(notFound);

//If PORT environment Variable Not avaliable use Port 5000
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
