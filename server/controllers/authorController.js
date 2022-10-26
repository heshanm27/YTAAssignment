const authorModel = require("../models/authorModel");
const { CustomAPIError } = require("../errors/errorClass");
const getAllAuthorDetails = async (req, res) => {
  //get query values and set default values if not provided
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 1;
  //calculate skip value
  const skip = (page - 1) * limit;

  const authors = await authorModel.find({}).skip(skip).limit(limit);
  res.status(200).json({ authors });
};

const getAuthorDetailsByID = async (req, res) => {
  const author = await authorModel.findById(req.params.id);
  res.status(200).json({ msg: "Author found", author });
};

const postAuthorDetails = async (req, res) => {
  const author = await authorModel.create(req.body);
  res.status(200).json({ msg: "Author created successfully", author });
};

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
  } catch (error) {
    throw new CustomAPIError("Author not found.", 404);
  }
};

module.exports = {
  getAllAuthorDetails,
  getAuthorDetailsByID,
  postAuthorDetails,
  updateAuthorDetails,
};
