const data = require('../../mock.json');
const CategoryModel = require('./CategoryModel');
const ArticleModel = require('../articles/ArticleModel');
const { MAX_ARTICLE_COUNT } = require('../../config');

class CategoryService {
  async getAllCategories() {
    const { categories } = data;

    const arr = categories.map(({ title, image, articles, id }) => {
      const topArticles = articles.splice(0, MAX_ARTICLE_COUNT);
      const articleList = topArticles.map((articleObj, index) => (
        new ArticleModel({
          id: articleObj.id,
          title: articleObj.title,
          image: articleObj.image
        })
      ));

      return new CategoryModel({
        id,
        title,
        image,
        articles: articleList
      });
    });

    return arr;
  }
}

module.exports = new CategoryService();
