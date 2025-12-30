class ExpressError extends Error {
  constructor(statusCode, message) {
    super(message); // parent(Error) handles message + stack
    this.statusCode = statusCode; // child handles HTTP meaning
  }
}

module.exports = ExpressError;
