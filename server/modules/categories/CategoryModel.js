class CategoryModel {
  constructor({ title, image, articles, id }) {
    this.id = id;
    this.title = title || {};
    this.image = image || '';
    this.articles = articles || [];
  }
}

module.exports = CategoryModel;
