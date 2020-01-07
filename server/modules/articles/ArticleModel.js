class ArticleModel {
  constructor({ title, image, description, id, amended }) {
    const date = new Date().toISOString();

    this.id = id;
    this.created = date;
    this.amended = amended || date;
    this.title = title || {};
    this.image = image || '';
    this.description = description || {};
  }
}

module.exports = ArticleModel;
