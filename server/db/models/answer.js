const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate({ Question }) {
      this.belongsTo(Question);
    }
  }
  Answer.init({
    text: DataTypes.STRING,
    questionId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Answer',
  });
  return Answer;
};
