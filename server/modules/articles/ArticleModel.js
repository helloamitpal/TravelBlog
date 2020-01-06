class ArticleModel {
  constructor({ title, image, description, id }) {
    this.id = id;
    this.title = title || {};
    this.image = image || '';
    this.description = description || {};
  }
}

module.exports = ArticleModel;
