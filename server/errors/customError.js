// CutomeError Class With Extends from default Error Class
class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = CustomAPIError;
