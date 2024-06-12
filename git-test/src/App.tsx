import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.tsx';
import Login from './components/Login/Login.tsx';
import {AuthGuard} from "./auth/AuthGuard.tsx";
import PokemonTable from "./components/PokemonTable/PokemonTable.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<AuthGuard />} >
            <Route path="/pokemonTable" element={<PokemonTable data={[]} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
