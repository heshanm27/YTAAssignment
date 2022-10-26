const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./customError");

//Extends CustomAPIError class and create a new class for badRequestError
class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
