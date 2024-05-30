import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
