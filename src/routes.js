import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import OktaSignInWidgetWrapper from './components/okta_sign_in_widget_wrapper';
import Home from './components/home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={OktaSignInWidgetWrapper} />
    <Route path="home" component={Home} />
  </Route>
);