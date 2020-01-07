const data = require('../../mock.json');
const CategoryModel = require('./CategoryModel');
const ArticleModel = require('../articles/ArticleModel');
const { MAX_ARTICLE_COUNT } = require('../../config');

class CategoryService {
  async getAllCategories() {
    const { categories } = data;

    const arr = categories.map(({ title, image, articles, id }) => {
      const articleCount = articles.length;
      const topArticles = articles.slice(0, MAX_ARTICLE_COUNT);
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
        articleCount,
        articles: articleList
      });
    });

    return arr;
  }
}

module.exports = new CategoryService();
