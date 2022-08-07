import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Home from './page/Home';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Home />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
