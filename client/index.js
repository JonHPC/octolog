//client/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './components/App.jsx';
import LogContainer from './components/LogContainer.jsx';
import AddLog from './components/AddLog.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />}/>
            {/* <Route path="/" element={<LogContainer />}/> */}
            <Route path="addlog" element={<AddLog />}/>
        </Routes>
    </BrowserRouter>
);