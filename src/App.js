import './App.css';
import { Route, Routes  } from 'react-router-dom'
import { Box } from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Projects from './components/Project';
import Login from './components/login';
import Skills from './components/skills';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{width: {xl: '1488px'}}} m = "auto">
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/login" element = {<Login />} />
          <Route path = "/skills" element = {<Skills />} />
          <Route path = "/about" element = {<About />} />
          </Routes>

      </Box>
    </div>
  );
}

export default App;
