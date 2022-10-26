const authorModel = require("../models/authorModel");
const { CustomAPIError } = require("../errors/errorClass");
const getAllAuthorDetails = async (req, res) => {
  const authors = await authorModel.find({});
  res.status(200).json({ authors });
};

const getAuthorDetailsByID = async (req, res) => {
  const author = await authorModel.findById(req.params.id);
  if (author) {
    res.status(200).json({ msg: "Author found", author });
  } else {
    throw new CustomAPIError("Author not found.", 404);
  }
};

const postAuthorDetails = async (req, res) => {
  const author = await authorModel.create(req.body);
  res.status(200).json({ msg: "Author created successfully", author });
};

const updateAuthorDetails = async (req, res) => {
  const author = await authorModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (author) {
    res.status(200).json({ msg: "Update successfully", author });
  } else {
    throw new CustomAPIError("Author update faild ", 404);
  }
};

module.exports = {
  getAllAuthorDetails,
  getAuthorDetailsByID,
  postAuthorDetails,
  updateAuthorDetails,
};
