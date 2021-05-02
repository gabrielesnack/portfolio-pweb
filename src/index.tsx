import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import '@assets/reset.css'
import '@assets/fonts.css'
import { ThemeProvider } from 'styled-components';
import DefaultTheme from '@themes/DefaultTheme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <Router />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);