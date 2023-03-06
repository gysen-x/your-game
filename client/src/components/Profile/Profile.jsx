import React from 'react';
import { Routes, Route } from 'react-router-dom';

export default function Profile() {
  return (
    <Routes>
      <Route path="/signin" element={<p>Profile</p>} />
    </Routes>
  );
}
