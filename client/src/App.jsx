import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ATYPES from './store/types';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Private from './components/Private/Private';

function App() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    async function checkAuth() {
      const response = await fetch('/auth/check', {
        credentials: 'include',
      });
      const result = await response.json();
      if (!result.fail) {
        dispatch({ type: ATYPES.SET_USER, payload: result });
      } else {
        navigate('/signin');
      }
    }
    checkAuth();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* приватная главная страница */}
        <Route path="/*" element={<Private />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
