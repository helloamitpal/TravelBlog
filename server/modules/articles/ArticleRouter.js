const router = require('express').Router();
const ArticleLoader = require('./ArticleLoader');

router.get('/:categoryId/:articleId', (req, res, next) => {
  ArticleLoader.getController().getArticle(req, res);
});

router.get('/getLatest', (req, res, next) => {
  ArticleLoader.getController().getLatestArticles(req, res);
});

module.exports = router;
