import React from 'react';
import { BrowserRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import { Typography, Box } from '@mui/material';
import { ProjectProvider } from './context/ProjectContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import metadata from './metadata.json';

import Home from './pages/Home';
import HeroPage from './pages/HeroPage';
import ProjectPage from './pages/ProjectPage';

function App() {

  if (metadata === undefined) {
    return (
      <Box>
        <Typography variant="h1">Error: Metadata not found</Typography>
      </Box>
    );
  }
  return (
    <ProjectProvider>
      <BrowserRouter>
      <Navbar metadata={metadata}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:ProjectSelection" element={<HeroPage metadata={metadata}/>} />
          <Route path="/:ProjectSelection/:ProjectIndex" element={<ProjectPage metadata={metadata}/>} />
        </Routes>
      </BrowserRouter>

      {/* <Footer /> */}

    </ProjectProvider>
  );
}

export default App;
