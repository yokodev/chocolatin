import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';

import App from './containers/App';

render(
  <BrowserRouter>
    <Match exactly pattern="*" component={App} />
  </BrowserRouter>,
  document.getElementById('app'),
);
