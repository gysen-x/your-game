import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Game from '../Game/Game';
import Ques from '../Ques';

import Homepage from '../Homepage/Homepage';
import ProfilePage from '../ProfilePage/ProfilePage';

export default function Profile() {
  const isAuth = useSelector((state) => state.isAuth);

  return (
    <Routes>
      {isAuth
      && <Route path="/" element={<Homepage />} />}
      <Route path="/game/:gameId" element={<Game />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="game/question/:questionId" element={<Ques />} />
    </Routes>
  );
}
