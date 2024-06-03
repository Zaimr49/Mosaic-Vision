import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFoundPage from './pages/NotFoundPage';
import Admin from './pages/Admin'; 
import Login from './pages/Login'; 
import Signup from './pages/Signup';

const App: React.FC = () => {
  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Navbar />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin-login" element={<Login />} /> 
            <Route path="/admin-signup" element={<Signup />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
