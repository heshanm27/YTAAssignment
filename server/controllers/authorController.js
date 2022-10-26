const authorModel = require("../models/authorModel");

const getAllAuthorDetails = async (req, res) => {
  res.status(200).json("getAuthor data");
};

const getAuthorDetailsByID = async (req, res) => {
  res.status(200).json("getAuthor data by id");
};

const postAuthorDetails = async (req, res) => {
  res.status(200).json("post author data");
};

const updateAuthorDetails = async (req, res) => {
  res.status(200).json("update author data");
};

module.exports = {
  getAllAuthorDetails,
  getAuthorDetailsByID,
  postAuthorDetails,
  updateAuthorDetails,
};
