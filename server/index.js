const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors");
const cors = require("cors");

//cors policy configuration
const corsOptions = {
  origin: "http://localhost:3000",
  method: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

//middleware configuration
app.use(express.json());
app.use(cors(corsOptions));

//modules import
const notFound = require("./middleware/notFound");
const connectDB = require("./dbConnection/dbConnection");
const errorHadnler = require("./middleware/error_handle");

//Router module imports
const authorRoute = require("./routes/authorRoute");
const bookRoute = require("./routes/bookRoute");

// //route paths
app.use("/api/v1/author", authorRoute);
app.use("/api/v1/book", bookRoute);

// Not found Route Middleware
app.use(notFound);

// Custome Error Handler Middleware
app.use(errorHadnler);

//If PORT environment Variable Not avaliable use Port 5000
const port = process.env.PORT || 5000;

/**
 * @description start express server and start Mongodb atlas connection
 */
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  } catch (err) {
    console.log("Connection Issue", err);
  }
};

//call to start the server
startServer();
