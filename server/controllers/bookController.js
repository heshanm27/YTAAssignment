const bookModel = require("../models/bookModel");
const { CustomAPIError } = require("../errors/errorClass");

const getAllBookDetails = async (req, res) => {
  //get query values and set default values if not provided
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 1;
  //calculate skip value
  const skip = (page - 1) * limit;

  const books = await bookModel.find({}).skip(skip).limit(limit);
  res.status(200).json({ books });
};

const getBookDetailsByID = async (req, res) => {
  const books = await bookModel.findById(req.params.id);
  if (books) {
    res.status(200).json({ msg: "Book found", books });
  } else {
    throw new CustomAPIError("Book not found.", 404);
  }
};

const postBookDetails = async (req, res) => {
  const book = await bookModel.create(req.body);
  res.status(200).json({ msg: "Book created successfully", book });
};

const updateBookDetails = async (req, res) => {
  const book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({ msg: "Update successfully", book });
};

module.exports = {
  getAllBookDetails,
  getBookDetailsByID,
  postBookDetails,
  updateBookDetails,
};
