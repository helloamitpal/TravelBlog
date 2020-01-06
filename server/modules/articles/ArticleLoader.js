const ArticleController = require('./ArticleController');

class ArticleLoader {
  getController() {
    return new ArticleController();
  }
}

module.exports = new ArticleLoader();
