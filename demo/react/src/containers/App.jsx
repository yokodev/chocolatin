import React from 'react';
import { Match, Miss } from 'react-router';

import Home from './Home';
import NotFound from './NotFound';

class App extends React.Component {
  render() {
    return (
      <div>
        <Match exactly pattern="/" component={Home} />
        <Miss component={NotFound} />
      </div>
    );
  }
}

export default App;
