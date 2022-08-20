import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { AllUserProvider } from './providers/AllUserProvider';
import { LoginUserProvider } from './providers/LoginUserProvider';
import { Router } from './router/Router';

import theme from './theme/theme';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoginUserProvider>
        <AllUserProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </AllUserProvider>
      </LoginUserProvider>
    </ChakraProvider>
  );
}
