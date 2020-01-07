class ArticleModel {
  constructor({ title, image, description, id, amended, created }) {
    this.id = id;
    this.created = created || null;
    this.amended = amended || null;
    this.title = title || {};
    this.image = image || '';
    this.description = description || {};
  }
}

module.exports = ArticleModel;
