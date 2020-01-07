const HttpStatusCode = require('../../constants/httpStatusCode');
const ArticleService = require('./ArticleService');
const ResponseHandler = require('../../util/responseHandler');

class ArticleController {
  getArticle(req, res) {
    ArticleService.getArticle(req).then((data) => {
      return ResponseHandler(res, HttpStatusCode.success.SUCCESS, data);
    }).catch(({ message }) => {
      return ResponseHandler(res, HttpStatusCode.error.INTERNAL_SERVER_ERROR, message);
    });
  }

  getLatestArticles(req, res) {
    ArticleService.getLatestArticles(req).then((data) => {
      return ResponseHandler(res, HttpStatusCode.success.SUCCESS, data);
    }).catch(({ message }) => {
      return ResponseHandler(res, HttpStatusCode.error.INTERNAL_SERVER_ERROR, message);
    });
  }
}

module.exports = ArticleController;
