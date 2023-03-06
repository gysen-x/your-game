const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate({ User, GameQuestion }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(GameQuestion, { foreignKey: 'gameId' }, { onDelete: 'cascade' }, { hooks: true });
    }
  }
  Game.init({
    points: DataTypes.INTEGER,
    questionsPassed: DataTypes.INTEGER,
    trueAnswers: DataTypes.INTEGER,
    falseAnswers: DataTypes.INTEGER,
    endStatus: DataTypes.BOOLEAN,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
