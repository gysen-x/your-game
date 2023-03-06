const {
  User, Game, Category, Question, GameQuestion, Answer,
} = require('../../db/models');

const { getSixCategoriesIds, getQuestionsSet } = require('../lib/gameFunctions');

export async function getGames(req, res) {
  const { id } = req.session.user;

  try {
    const userGames = await Game.findAll({ where: { id }, order: ['id'] });

    res.send(userGames);
  } catch (err) {
    res.json({ fail: 'fail' });
  }
}

export async function createGame(req, res) {
  const { id: userId } = req.session.user;

  try {
    const newGame = await Game.create({
      points: 0, questionsPassed: 0, trueAnswers: 0, falseAnswers: 0, endStatus: false, userId,
    });

    const gameId = newGame.id;

    const categories = await Category.findAll();
    const onlySixCategories = getSixCategoriesIds(categories);

    const allQuestion = await Question.findAll();
    const newSetOfQuestions = getQuestionsSet(allQuestion, onlySixCategories, gameId);
    await GameQuestion.bulkCreate(newSetOfQuestions);

    res.json(gameId);
  } catch (err) {
    res.json({ fail: 'fail' });
  }
}

export async function getGame(req, res) {
  const { id: userId } = req.session.user;
  const { id } = req.params;

  try {
    const game = await Game.findByPk(id);
    if (game.userId === userId) {
      const questions = await GameQuestion.findAll({
        where: { gameId: id }, include: Question, raw: true, nest: true,
      });
      res.json(questions);
    } else {
      res.json({ fail: 'fail' });
    }
  } catch (err) {
    res.json({ fail: 'fail' });
  }
}

export async function deleteGame(req, res) {
  const { id: userId } = req.session.user;
  const { id } = req.params;

  try {
    const game = await Game.findByPk(id);
    if (game.userId === userId) {
      await Game.destroy({ id });
      res.json({ success: 'success' });
    } else {
      res.json({ fail: 'fail' });
    }
  } catch (err) {
    res.json({ fail: 'fail' });
  }
}

export async function getQuestion(req, res) {
  const { id } = req.params;

  try {
    const question = await GameQuestion.findByPk(id);

    res.json(question);
  } catch (err) {
    res.json({ fail: 'fail' });
  }
}

export async function checkAnswer(req, res) {
  const { answer, id } = req.body;

  try {
    const questionWithAnswer = await GameQuestion.findOne({
      where: id, include: [{ model: Question }, { model: Question }], raw: true, nest: true,
    });

    const { gameId } = questionWithAnswer;
    const { points: qPoints } = questionWithAnswer.Question.points;

    const rightAnswer = questionWithAnswer.Question.Answer.text;
    if (rightAnswer.toLowerCase().includes(answer.toLowerCase())) {
      await Game.increment({ points: qPoints, questionsPassed: 1, trueAnswers: 1 }, { where: { id: gameId } });
      res.json({ success: 'success' });
    } else {
      await Game.increment({ points: -qPoints, questionsPassed: 1, falseAnswers: 1 }, { where: { id: gameId } });
      res.json({ fail: 'fail' });
    }
  } catch (err) {
    res.json({ fail: 'fail' });
  }
}

export async function updateUser(req, res) {
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
}

export async function getStatistics(req, res) {
  try {
    const statistics = await Game.findAll({ where: { endStatus: true } });
    res.json(statistics);
  } catch (err) {
    res.json({ fail: 'fail' });
  }
}

export async function getProfile(req, res) {
  const { id } = req.session.user;
  try {
    const user = await User.findOne({ where: { id }, attributes: ['name', 'email', 'avatar'] });
    const statistics = await Game.findAll({ where: { endStatus: true, userId: id } });
    res.json({ user, statistics });
  } catch (err) {
    res.json({ fail: 'fail' });
  }
}
