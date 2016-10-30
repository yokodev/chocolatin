import React from 'react';
import { Match, Miss } from 'react-router';
import functional from 'react-functional';

import Home from './Home';
import NotFound from './NotFound';

const App = () => (
  <div>
    <Match exactly pattern="/" component={Home} />
    <Miss component={NotFound} />
  </div>
);

export default functional(App);
