import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'mobx-react';
import App from './App';
import AuthStore from './stores/auth/AuthStore';
import init from './core/gyrodata';

const authStore = new AuthStore();

window.onload = () => {
  init.then(() => {
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(
      <React.StrictMode>
        <Router>
          <Provider authStore={authStore} >
            <App />
          </Provider>
        </Router>
      </React.StrictMode>,
      document.getElementById('root')
    );
  });
}
