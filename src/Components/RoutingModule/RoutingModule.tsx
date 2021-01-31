// -> Beyond Codebase
import React from 'react';
import { Switch, Route } from 'react-router-dom';
// -> Within Codebase
import TestGround from '../../Pages/TestGround/TestGround';
import Home from '../../Pages/Home/Home';
import FullPageResourceBrowser from '../../Pages/FullPageResourceBrowser/FullPageResourceBrowser';
import RouteNotFoundFallback from '../Fallbacks/RouteNotFoundFallback/RouteNotFoundFallback';
import { TEST_GROUND_ROUTE, HOME_ROUTE, GABRIEL_DATA_ROUTE } from '../../constants';

const RoutingModule: React.FC = () => {

  return (
    <Switch>
      <Route exact path={HOME_ROUTE} component={Home} />
      <Route exact path={TEST_GROUND_ROUTE} component={TestGround} />
      <Route exact path={GABRIEL_DATA_ROUTE} component={FullPageResourceBrowser} />
      <Route path="*" component={RouteNotFoundFallback} />
    </Switch>
  );
}

export default RoutingModule;
