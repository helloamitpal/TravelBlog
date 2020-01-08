const data = require('../../mock.json');
const ArticleModel = require('./ArticleModel');
const config = require('../../config');

class ArticleService {
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

    const { id, title, image, description, created, amended } = selectedArticle;

    return new ArticleModel({
      id,
      title,
      image,
      description,
      created,
      amended
    });
  }

  async getLatestArticles() {
    const { categories } = data;
    const articleArr = [];

    categories.forEach(({ articles }) => {
      articles.forEach(({ title, image, id }) => {
        articleArr.push(new ArticleModel({
          title,
          image,
          id
        }));
      });
    });

    articleArr.sort((param1, param2) => {
      return new Date(param2.amended) - new Date(param1.amended);
    });

    return articleArr.slice(0, config.TOP_ARTICLES_COUNT);
  }
}

module.exports = new ArticleService();
