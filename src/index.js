import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

ReactDOM.render(
    <Router>
        <Routes>
            <Route exact path="/" component={Login}></Route>
        </Routes>
    </Router>
    ,document.getElementById("root"))