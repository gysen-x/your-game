import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<h1>Homepage!!!</h1>} />
        <Route path="/profile" element={<p>Profile</p>} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
