class ArticleModel {
  constructor({ title, image, description, id, amended, created, parentCategoryId }) {
    this.id = id;
    this.created = created || null;
    this.amended = amended || null;
    this.title = title || {};
    this.image = image || '';
    this.description = description || {};
    this.parentCategoryId = parentCategoryId || '';
  }
}

module.exports = ArticleModel;
