class CategoryModel {
  constructor({ title, image, articles, id, articleCount, amended }) {
    const date = new Date().toISOString();

    this.id = id;
    this.created = date;
    this.amended = amended || date;
    this.articleCount = articleCount || 0;
    this.title = title || {};
    this.image = image || '';
    this.articles = articles || [];
  }
}

module.exports = CategoryModel;
