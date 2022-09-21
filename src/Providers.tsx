import type { FC, PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from 'redux';
import { counterReducer, initialState } from 'stores/reducers';

const store = createStore(counterReducer, initialState);

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <HelmetProvider>
    <ChakraProvider>
      <Router>
        <ReduxProvider store={store}>{children}</ReduxProvider>
      </Router>
    </ChakraProvider>
  </HelmetProvider>
);

export default Providers;
