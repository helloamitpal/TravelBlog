class CategoryModel {
  constructor({ title, image, articles, id, articleCount, amended, created, description }) {
    this.id = id;
    this.created = created || null;
    this.amended = amended || null;
    this.articleCount = articleCount || 0;
    this.title = title || {};
    this.image = image || '';
    this.articles = articles || [];
    this.description = description || {};
  }
}

module.exports = CategoryModel;
