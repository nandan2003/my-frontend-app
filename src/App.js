import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';   // Importing routes
import { ThemeProvider } from '@mui/material/styles'; // Material-UI theme
import theme from './styles/theme';  // Custom theme
import Header from './components/Header';  // Import Header
import Footer from './components/Footer';  // Import Footer

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes />
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
