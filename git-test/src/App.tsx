import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import LoginNeoCK from "./components/LoginNeoCK/loginNeoCK";
import { AuthGuard } from "./auth/AuthGuard";
import { PokemonTable } from "./components/pokemonTable/PokemonTable";

function App() {
  const handleLogOut = () => {
    localStorage.removeItem('accessToken');
  }
  return (
    <Router>
      <AppBar color='transparent' position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Router Prueba
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
          <Button color="inherit" component={Link} to="/loginNeoCK">LoginNEOCK</Button>
          <Button color="inherit" component={Link} to="/pokemonTable">Pokemon Table</Button>
          <Button color="inherit" component={Link} to="/loginNeoCK" onClick={handleLogOut}>Logout</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route  element={<AuthGuard />}>
          <Route path="/pokemonTable" element={<PokemonTable />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/loginNeoCK" element={<LoginNeoCK />} />
      </Routes>
    </Router>
  );
}

export default App;


