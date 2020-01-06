const data = require('../../mock.json');
const ArticleModel = require('./ArticleModel');

class ArticleService {
  async getAllArticles(req) {
    const { categoryId } = req.params;
    const { categories } = data;

    if (!categoryId) {
      throw new Error('categoryId is not provided');
    }

    const selectedCategory = categories.find(({ id }) => (id === categoryId));

    if (!selectedCategory) {
      throw new Error('categoryId is not found.');
    }

    const arr = selectedCategory.articles.map(({ id, title, image }) => (
      new ArticleModel({
        id,
        title,
        image
      })
    ));

    return arr;
  }

  async getArticle(req) {
    const { categoryId, articleId } = req.params;
    const { categories } = data;

    if (!categoryId || !articleId) {
      throw new Error('Either categoryId or articleId is not provided');
    }

    const selectedCategory = categories.find(({ id }) => (id === categoryId));

    if (!selectedCategory) {
      throw new Error('categoryId is not found.');
    }

    const selectedArticle = selectedCategory.articles.find(({ id }) => (id === articleId));

    if (!selectedArticle) {
      throw new Error('articleId is not found.');
    }

    const { id, title, image, description } = selectedArticle;

    return new ArticleModel({
      id,
      title,
      image,
      description
    });
  }
}

module.exports = new ArticleService();
