/**
 * Name: /src/App.js
 *
 * Description: This is the root of our app.
 *
 * Copyright (c) 2017-present Justin Haaheim
 *
 * This file is subject to the terms and conditions defined in
 * file 'LICENSE', which is part of this source code package.
 */


 // Needed for onTouchTap
 // http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Primary from './layouts/Primary';
import reducers from './reducers';
import { deleteTodo } from './actions';  // for debugging

let store = createStore(reducers);

// Expose the store globally for debugging
window.store = store;
window.deleteTodo = deleteTodo;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Primary />
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;