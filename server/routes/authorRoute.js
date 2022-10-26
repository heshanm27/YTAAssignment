const express = require("express");
const router = express.Router();

const {
  getAllAuthorDetails,
  getAuthorDetailsByID,
  postAuthorDetails,
  updateAuthorDetails,
} = require("../controllers/authorController");

//defult routes
router.get("/", getAllAuthorDetails).post("/", postAuthorDetails);

//parametrized routes
router.get("/:id", getAuthorDetailsByID).put("/:id", updateAuthorDetails);

module.exports = router;
