const authorModel = require("../models/authorModel");
const {
  CustomAPIError,
  NotFoundError,
  BadRequestError,
} = require("../errors/errorClass");

/**
 *  Get All the authors
 *  @route GET /api/v1/author
 * */
const getAllAuthorDetails = async (req, res) => {
  const authors = await authorModel.find({});
  res.status(200).json({ authors });
};

/**
 * Get author details by id
 * @route GET /api/v1/author/:id
 * */
const getAuthorDetailsByID = async (req, res) => {
  try {
    const author = await authorModel.findById(req.params.id);
    res.status(200).json({ msg: "Author found", author });
  } catch (err) {
    throw new BadRequestError("ID is not valid");
  }
};

/**
 * Create new author
 * @route POST /api/v1/author
 * */
const postAuthorDetails = async (req, res) => {
  try {
    const author = await authorModel.create(req.body);
    res.status(200).json({ msg: "Author created successfully", author });
  } catch (err) {
    if (err.name === "ValidationError") {
      throw new BadRequestError(err.message);
    }
  }
};

/**
 * Update author details
 * @route PUT /api/v1/author/:id
 */
const updateAuthorDetails = async (req, res) => {
  try {
    const author = await authorModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json({ msg: "Update successfully", author });
  } catch (err) {
    if (err.name === "ValidationError") {
      throw new BadRequestError(err.message);
    }
    throw new BadRequestError("ID is not valid");
  }
};

module.exports = {
  getAllAuthorDetails,
  getAuthorDetailsByID,
  postAuthorDetails,
  updateAuthorDetails,
};
