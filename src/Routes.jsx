import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MainPage } from './pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={ MainPage } />
    </Switch>
  );
}
