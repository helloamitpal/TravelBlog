const data = require('../../mock.json');
const CategoryModel = require('./CategoryModel');
const ArticleModel = require('../articles/ArticleModel');
const { MAX_ARTICLE_COUNT } = require('../../config');

class CategoryService {
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

    const { title, id, image, description } = selectedCategory;

    const arr = selectedCategory.articles.map((article) => (
      new ArticleModel({
        id: article.id,
        title: article.title,
        image: article.image
      })
    ));

    return new CategoryModel({
      title,
      id,
      image,
      description,
      articleCount: arr.length,
      articles: arr
    });
  }

  async getAllCategories() {
    const { categories } = data;

    const arr = categories.map(({ title, articles, id }) => {
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
        articleCount,
        articles: articleList
      });
    });

    return arr;
  }

  async getMetadata() {
    const { metadata: { visitedCountriesCount, aboutus }, categories, subscribers } = data;
    const totalSubscribers = subscribers.length;
    let articleCount = 0;

    categories.forEach(({ articles }) => {
      articleCount += articles.length;
    });

    return {
      visitedCountriesCount,
      articleCount,
      totalSubscribers,
      aboutus
    };
  }
}

module.exports = new CategoryService();
