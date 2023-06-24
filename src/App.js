import React from 'react';
import { Box, useTheme, useColorMode } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Header, Home, Videos, Upload, Login } from './components';

function App() {
  const theme = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === 'light' ? theme.colors.bg_light : theme.colors.fifth}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/popular" element={<Videos />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
