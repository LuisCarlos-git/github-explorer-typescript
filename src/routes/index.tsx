import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Main';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Main} />
    <Route path="/repository/:reponame+" component={Repository} />
  </Switch>
);

export default Routes;
