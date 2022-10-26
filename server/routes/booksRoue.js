const express = require("express");
const router = express.Router();

const {
  getAllBookDetails,
  getBookDetailsByID,
  postBookDetails,
  updateBookDetails,
} = require("../controllers/bookController");

//defult routes
router.route("/").get(getAllBookDetails).post(postBookDetails);

//parametrized routes
router.route("/:id").get(getBookDetailsByID).put(updateBookDetails);

exports.module = router;
