import React from 'react';
import { Box, useTheme, useColorMode } from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Footer, Header, Home, Videos, Upload, Login, SignUp } from './components';

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
          <Route path="/signup" element={<SignUp />} />          
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
