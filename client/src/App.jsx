import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ATYPES from './store/types';
import Ques from './components/Ques';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';

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
        <Route path="/" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/ques" element={<Ques />} />
      </Routes>
    </div>
  );
}

export default App;
