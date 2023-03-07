const {
  User,
  Game,
  Category,
  Question,
  GameQuestion,
  Answer,
} = require('../../db/models');

const {
  getSixCategoriesIds,
  getQuestionsSet,
  getSortedQuestions,
} = require('../lib/gameFunctions');

exports.getGames = async (req, res) => {
  const { id } = req.session.user;

  try {
    const userGames = await Game.findAll({ where: { userId: id, endStatus: false }, order: ['id'] });

    res.send(userGames);
  } catch (err) {
    res.json({ fail: 'fail' });
  }
};

exports.createGame = async (req, res) => {
  const { id: userId } = req.session.user;

  try {
    const newGame = await Game.create({
      points: 0,
      questionsPassed: 0,
      trueAnswers: 0,
      falseAnswers: 0,
      endStatus: false,
      userId,
    });

    const gameId = newGame.id;

    const categories = await Category.findAll();
    const onlySixCategories = getSixCategoriesIds(categories);

    const allQuestion = await Question.findAll();
    const newSetOfQuestions = getQuestionsSet(
      allQuestion,
      onlySixCategories,
      gameId,
    );
    await GameQuestion.bulkCreate(newSetOfQuestions);

    res.json({ gameId });
  } catch (err) {
    console.log(err);
    res.json({ fail: 'fail' });
  }
};

exports.getGame = async (req, res) => {
  const { id: userId } = req.session.user;
  const { id } = req.params;

  try {
    const game = await Game.findByPk(id);
    if (game.userId === userId) {
      const questions = await GameQuestion.findAll({
        where: { gameId: id },
        attributes: ['id', 'status', 'gameId', 'questionId'],
        include: [{
          model: Question,
          attributes: ['id', 'points', 'categoryId'],
          include: {
            model: Category, attributes: ['name'],
          },
        }],
        raw: true,
        nest: true,
      });
      const sortedQuestions = getSortedQuestions(questions);
      res.json({ sortedQuestions, game });
    } else {
      res.json({ fail: 'fail' });
    }
  } catch (err) {
    res.json({ fail: 'fail' });
  }
};

exports.deleteGame = async (req, res) => {
  const { id: userId } = req.session.user;
  const { id } = req.params;

  try {
    const game = await Game.findByPk(id);
    if (game.userId === userId) {
      await Game.destroy({ where: { id } });
      res.json({ success: 'success' });
    } else {
      res.json({ fail: 'fail' });
    }
  } catch (err) {
    res.json({ fail: 'fail' });
  }
};

exports.endGame = async (req, res) => {
  const { id: userId } = req.session.user;
  const { id } = req.params;

  try {
    const game = await Game.findByPk(id);
    if (game.userId === userId) {
      await Game.update({ endStatus: true }, { where: { id } });
      res.json({ success: 'success' });
    } else {
      res.json({ fail: 'fail' });
    }
  } catch (err) {
    res.json({ fail: 'fail' });
  }
};

exports.getQuestion = async (req, res) => {
  const { id } = req.params;
  try {
    const question = await GameQuestion.findOne({ where: { id }, include: Question });
    res.json(question);
  } catch (err) {
    res.json({ fail: 'fail' });
  }
};

exports.checkAnswer = async (req, res) => {
  const { answer, id } = req.body;
  console.log('answer, id: ', answer, id);

  try {
    const questionWithAnswer = await GameQuestion.findOne({
      where: { id },
      include: [{
        model: Question,
        include: {
          model: Answer,
        },
      }],
      raw: true,
      nest: true,
    });

    const { gameId } = questionWithAnswer;
    const { points: qPoints } = questionWithAnswer.Question;
    console.log('qPoints: ', qPoints);
    const minus = -1 * qPoints;

    const rightAnswer = questionWithAnswer.Question.Answer.text;
    if (rightAnswer.toLowerCase().includes(answer.toLowerCase())) {
      await GameQuestion.update({ status: true }, { where: { id } });

      await Game.increment(
        { points: qPoints, questionsPassed: 1, trueAnswers: 1 },
        { where: { id: gameId } },
      );
      res.json({ success: 'success' });
    } else {
      await GameQuestion.update({ status: true }, { where: { id } });

      await Game.increment(
        { points: minus, questionsPassed: 1, falseAnswers: 1 },
        { where: { id: gameId } },
      );
      res.json({ fail: 'fail' });
    }
  } catch (err) {
    res.json({ fail: 'fail' });
  }
};

exports.updateUser = async (req, res) => {
  const { id } = req.session.user;
  if (req.body.name) {
    const { name } = req.body;
    try {
      await User.update({ name }, { where: { id } });
      res.json({ success: 'success' });
    } catch (err) {
      res.json({ fail: 'fail' });
    }
  } else if (req.body.email) {
    const { email } = req.body;
    try {
      await User.update({ email }, { where: { id } });
      res.json({ success: 'success' });
    } catch (err) {
      res.json({ fail: 'fail' });
    }
  } else if (req.body.avatar) {
    const { avatar } = req.body;
    try {
      await User.update({ avatar }, { where: { id } });
      res.json({ success: 'success' });
    } catch (err) {
      res.json({ fail: 'fail' });
    }
  }
};

exports.getStatistics = async (req, res) => {
  try {
    const statistics = await Game.findAll({ where: { endStatus: true } });
    res.json(statistics);
  } catch (err) {
    res.json({ fail: 'fail' });
  }
};

exports.getProfile = async (req, res) => {
  const { id } = req.session.user;
  try {
    const user = await User.findOne({
      where: { id },
      attributes: ['name', 'email', 'avatar'],
    });
    const statistics = await Game.findAll({
      where: { endStatus: true, userId: id },
    });
    res.json({ user, statistics });
  } catch (err) {
    res.json({ fail: 'fail' });
  }
};
