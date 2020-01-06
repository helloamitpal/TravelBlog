const ResponseHandler = (res, statusCode, data) => {
  let error = null;
  if (statusCode >= 400) {
    error = { message: data };
  }
  return res.status(statusCode).send(data || error);
};

module.exports = ResponseHandler;
