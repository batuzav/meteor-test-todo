import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { LoginScreen } from './LoginScreen';



export const App = () => (
  <Provider store={store}>
    <LoginScreen />    
  </Provider>
);
