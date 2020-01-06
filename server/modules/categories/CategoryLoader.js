const CategoryController = require('./CategoryController');

class CategoryLoader {
  getController() {
    return new CategoryController();
  }
}

module.exports = new CategoryLoader();
