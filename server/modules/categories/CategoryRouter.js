const router = require('express').Router();
const CategoryLoader = require('./CategoryLoader');

router.get('/getAll', (req, res, next) => {
  CategoryLoader.getController().getAllCategories(req, res);
});

router.get('/:categoryId/getAll', (req, res, next) => {
  CategoryLoader.getController().getAllArticles(req, res);
});

router.get('/getMetadata', (req, res, next) => {
  CategoryLoader.getController().getMetadata(req, res);
});

module.exports = router;
