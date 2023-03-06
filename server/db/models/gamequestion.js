const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GameQuestion extends Model {
    static associate({ Game, Question }) {
      this.belongsTo(Game, { foreignKey: 'gameId' });
      this.belongsTo(Question);
    }
  }
  GameQuestion.init({
    status: DataTypes.BOOLEAN,
    gameId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'GameQuestion',
  });
  return GameQuestion;
};
