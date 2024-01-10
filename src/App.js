import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/home';
import Recipe from './components/recipe';
import 'bootstrap/dist/css/bootstrap.min.css';

// Implementation based on https://www.w3schools.com/react/react_router.asp

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="recipe" element={<Recipe />} />
        </Route>
      </Routes>
    </Router>
  );
};

