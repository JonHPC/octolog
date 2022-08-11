//client/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App.jsx';
import NavBar from './components/Navbar.jsx';
import LogContainer from './components/LogContainer.jsx';
import AddLog from './components/AddLog.jsx';
import UpdateLog from './components/UpdateLog.jsx';
import Stats from './components/Stats.jsx';
import Login from './components/Login.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            {/* <Route path="/" element={<LogContainer />}/>  */}
            <Route path="addlog" element={<AddLog />}/>
            <Route path="updateLog" element={<UpdateLog />}/>
            <Route path="stats" element={<Stats />}/>
            <Route path="login" element={<Login />} />
        </Routes>
    </BrowserRouter>
);