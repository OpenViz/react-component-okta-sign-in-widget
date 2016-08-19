import React from 'react';
import { Route } from 'react-router';

import App from './components/app';
import OktaAuthWrapper from './components/okta_auth_wrapper';
import OktaSignInWidgetWrapper from './components/okta_sign_in_widget_wrapper';
import Home from './components/home';

// Put the OktaSignInWidgetWrapper nested in OktaAuthWrapper
// Put all the routes that need authentication nested in OktaAuthWrapper
export default (
  <Route component={App}>
    <Route path="/" component={OktaAuthWrapper} >
        <Route path="login" component={OktaSignInWidgetWrapper} />
        <Route path="home" component={Home} />
    </Route>
  </Route>
);
