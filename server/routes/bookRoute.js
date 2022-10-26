const express = require("express");
const router = express.Router();

const {
  getAllAuthorDetails,
  getAuthorDetailsByID,
  postAuthorDetails,
  updateAuthorDetails,
} = require("../controllers/authorController");

//defult routes
router.route("/").get(getAllAuthorDetails).post(postAuthorDetails);

//parametrized routes
router.route("/:id").get(getAuthorDetailsByID).put(updateAuthorDetails);

module.exports = router;
