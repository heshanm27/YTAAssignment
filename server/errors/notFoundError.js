const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./customError");

//Extends CustomAPIError class and create a new class for NotFoundError
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
