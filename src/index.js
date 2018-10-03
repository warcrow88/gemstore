import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>, document.getElementById('root'));

// Hot reloads pages to keep state without refreshing it

if (module.hot) {
  module.hot.accept();
}
