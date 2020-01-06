const HttpStatusCode = require('../../constants/httpStatusCode');
const CategoryService = require('./CategoryService');
const ResponseHandler = require('../../util/responseHandler');

class CategoryController {
  getAllCategories(req, res) {
    CategoryService.getAllCategories().then((data) => {
      return ResponseHandler(res, HttpStatusCode.success.SUCCESS, data);
    }).catch(({ message }) => {
      return ResponseHandler(res, HttpStatusCode.error.INTERNAL_SERVER_ERROR, message);
    });
  }
}

module.exports = CategoryController;
