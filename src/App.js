import './App.css';
import { Route, Routes  } from 'react-router-dom'
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail';
import Home from './pages/Home';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Exercises from './components/Exercises';
import Login from './components/login';

function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{width: {xl: '1488px'}}} m = "auto">
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />}/>
          <Route path = "/exercises" element = {<Exercises />} />
          <Route path = "/login" element = {<Login />} />
       
          </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
