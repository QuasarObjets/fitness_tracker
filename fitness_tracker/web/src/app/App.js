// /fitness_tracker/web/src/app/App.js

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import UserRoutes from '../routes/userRoutes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={UserRoutes} />
      </Switch>
    </Router>
  );
}

export default App;