import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home, Metadata } from '@/pages';

export default () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/metadata" component={Metadata} />
      </Switch>
    </Router>
  );
}
