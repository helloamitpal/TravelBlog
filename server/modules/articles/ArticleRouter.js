const router = require('express').Router();
const ArticleLoader = require('./ArticleLoader');

router.get('/:categoryId/getAll', (req, res, next) => {
  ArticleLoader.getController().getAllArticles(req, res);
});

router.get('/:categoryId/:articleId', (req, res, next) => {
  ArticleLoader.getController().getArticle(req, res);
});

router.get('/getLatestArticles/:count', (req, res, next) => {
  ArticleLoader.getController().getLatestArticles(req, res);
});

module.exports = router;
