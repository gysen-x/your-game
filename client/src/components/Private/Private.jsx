import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from '../Game/Game';
import GameStats from '../Stats/Stat';
import Ques from '../Ques';

import Homepage from '../Homepage/Homepage';
import ProfilePage from '../ProfilePage/ProfilePage';

export default function Profile() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/game/:gameId" element={<Game />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/ques" element={<Ques />} />
    </Routes>
  );
}
