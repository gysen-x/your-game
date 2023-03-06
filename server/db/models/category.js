const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate({ Question }) {
      this.hasMany(Question, { foreignKey: 'categoryId' });
    }
  }
  Category.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};
