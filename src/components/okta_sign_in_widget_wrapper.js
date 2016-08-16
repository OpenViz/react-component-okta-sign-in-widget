// Wrapper for the Okta Sign In Widget

import React, { Component } from 'react';
import OktaSignInWidget from './okta_sign_in_widget';

// Define here your parameters
const WIDGET_CONTAINER_ID = 'okta-login-container';
const LOGIN_SUCCESS_ROUTE = '/home';
const OPTIONS = {
            baseUrl: "https://dev-570863.oktapreview.com",
            clientId : "OaCz3jBQxbaEnsDAFO3A",
            redirectUri: "http://localhost:8080/"
          };

export default class OktaSignInWidgetWrapper extends Component {
  render() {
    return <OktaSignInWidget container={WIDGET_CONTAINER_ID} options={OPTIONS} successRoute={LOGIN_SUCCESS_ROUTE} />;
  }
}
