const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');

const failAuth = (res, err) => res.status(401).json({ err });

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  console.log('req.body: ', req.body);

  try {
    const userFromDatabase = await User.findOne({ where: { email }, raw: true });
    const isSamePassword = await bcrypt.compare(password, userFromDatabase.password);
    if (!userFromDatabase) {
      return res.status(401).json({ errMsg: 'Wrong email or password!' });
    }
    if (isSamePassword) {
      req.session.user = { id: userFromDatabase.id, username: userFromDatabase.username };
      req.session.save();
      res.status(200).json(userFromDatabase);
    } else {
      res.status(401).json({ errMsg: 'Wrong password or email!' });
    }
  } catch (err) {
    let errMsg = err.message;
    if (err.name === 'SequelizeUniqueConstraintError') errMsg = err.errors[0].message;
    res.status(401).json({ errMsg });
  }
});

router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashPassword });
    // console.log('user created =>>>>>>>>>>>>>>>>>>>: ', user.dataValues);
    req.session.user = { id: user.id, username: user.name };
    req.session.save();
    res.json({ user: user.id, username: user.name, email: user.email });
  } catch (err) {
    let errMsg = err.message;
    if (err.name === 'SequelizeUniqueConstraintError') errMsg = err.errors[0].message;
    res.status(401).json({ errMsg });
  }
});

router.get('/signout', (req, res) => {
  req.session.destroy((err) => {
    if (err) console.log(err);
    res.clearCookie('sid');
    res.sendStatus(200);
  });
});

router.get('/check', (req, res) => {
  if (req.session.user) {
    res.json(req.session.user);
  } else {
    res.json({ fail: 'fail' });
  }
});

module.exports = router;