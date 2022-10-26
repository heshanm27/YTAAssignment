//get CustomAPIError class module
const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("../Errors/customError");

/**
 * @description Errorhandleing Middleware function when error Occure if  error instance from CustomAPIError class
 *  send response with  error status and error message other whise send default error message
 * @returns  response with status code and error message
 */
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: err.message,
    msg: "Something went wrong, please try again later",
  });
};

module.exports = errorHandlerMiddleware;
