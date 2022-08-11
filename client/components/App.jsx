//client/components/App.jsx
import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import LogContainer from './LogContainer.jsx';
import StatCalc from './StatCalc.jsx';
import '../scss/style.scss';

function App() {
  return (
    <main>
      <Navbar />
      <Outlet />
      <LogContainer />
    </main>
  );
}

export default App;
