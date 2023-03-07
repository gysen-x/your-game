const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate({ GameQuestion, Category, Answer }) {
      this.hasOne(GameQuestion, { foreignKey: 'questionId' });
      this.belongsTo(Category, { foreignKey: 'categoryId' });
      this.hasOne(Answer, { foreignKey: 'questionId' });
    }
  }
  Question.init({
    text: DataTypes.STRING,
    points: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};
