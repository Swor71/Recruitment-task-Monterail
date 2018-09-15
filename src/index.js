import React from 'react';
import { render } from 'react-dom';
import Form from './containers/Form/Form';
import { Provider } from 'react-redux';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <Form />
  </Provider>, document.getElementById('root'));
  
registerServiceWorker();
