import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Game from '../Game/Game';
import GameStats from '../Stats/Stat';

import Homepage from '../Homepage/Homepage';

export default function Profile() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/game" element={<Game />} />
      {/* <Route path="/profile" element={<p>Profile</p>} /> */}
      <Route path="/profile" element={<GameStats />} />
    </Routes>
  );
}
