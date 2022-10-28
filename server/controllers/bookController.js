const bookModel = require("../models/bookModel");
const { BadRequestError } = require("../errors/errorClass");

/**
 * Get all the books with pagination
 * @route GET /api/v1/book
 */
const getAllBookDetails = async (req, res) => {
  //get query values and set default values if not provided
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  //calculate skip value
  const skip = (page - 1) * limit;

  //get total number of documents
  const total = await bookModel.countDocuments();

  const books = await bookModel.find({}).skip(skip).limit(limit);

  //calculate total pages
  const bookPageCount = Math.ceil(total / limit);

  res.status(200).json({ books, bookPageCount });
};

/**
 * Get book details by id
 * @route GET /api/v1/book/:id
 */
const getBookDetailsByID = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id).populate("author");
    res.status(200).json({ msg: "Book found", book });
  } catch (err) {
    throw new BadRequestError("ID is not valid");
  }
};

/**
 * Create new book
 * @route POST /api/v1/book
 * */
const postBookDetails = async (req, res) => {
  try {
    const book = await bookModel.create(req.body);
    res.status(200).json({ msg: "Book created successfully", book });
  } catch (err) {
    if (err.name === "ValidationError") {
      throw new BadRequestError(err.message);
    }
  }
};

/**
 * Update book details
 * @route PUT /api/v1/book/:id
 * */
const updateBookDetails = async (req, res) => {
  try {
    const book = await bookModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({ msg: "Update successfully", book });
  } catch (err) {
    if (err.name === "ValidationError") {
      throw new BadRequestError(err.message);
    }
    throw new BadRequestError("ID is not valid");
  }
};

module.exports = {
  getAllBookDetails,
  getBookDetailsByID,
  postBookDetails,
  updateBookDetails,
};
