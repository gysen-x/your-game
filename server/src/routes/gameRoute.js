const express = require('express');

const router = express.Router();

const {
  getGames,
  createGame,
  getGame,
  deleteGame,
  getQuestion,
  checkAnswer,
  updateUser,
  getStatistics,
  getProfile,
} = require('../controllers/gameControllers');

router.get('/games', getGames);

router.get('/games/new', createGame);

router.get('/games/:id', getGame);

router.delete('/games/:id', deleteGame);

router.get('/questions/:id', getQuestion);

router.post('/checkanswer', checkAnswer);

router.put('/user', updateUser);

router.get('/statistics', getStatistics);

router.get('/profile', getProfile);

module.exports = router;
