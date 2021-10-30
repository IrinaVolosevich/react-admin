// @ts-nocheck
import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

//Redux
import { Provider } from 'react-redux';

import store from './store';
import Routes from './Routes';

import { CssBaseline } from '@material-ui/core';

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <ThemeProvider>
            <CssBaseline />
            <Routes />
          </ThemeProvider>
        </Provider>
    );
  }
}
export default App;