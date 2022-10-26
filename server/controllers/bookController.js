const bookModel = require("../models/bookModel");

const getAllBookDetails = async (req, res) => {
  res.status(200).json("get books data");
};

const getBookDetailsByID = async (req, res) => {
  res.status(200).json("getbook by id data");
};

const postBookDetails = async (req, res) => {
  res.status(200).json("post book data");
};

const updateBookDetails = async (req, res) => {
  res.status(200).json("update book data");
};

module.exports = {
  getAllBookDetails,
  getBookDetailsByID,
  postBookDetails,
  updateBookDetails,
};
