// Wrapper for the Okta Auth
import React, { Component } from 'react';
import OktaAuth from './okta_auth';

// Define here your parameters
const LOGIN_ROUTE = '/login';
const LOGIN_SUCCESS_ROUTE = '/home';
const OPTIONS = {
            baseUrl: 'https://dev-570863.oktapreview.com',
            clientId : 'OaCz3jBQxbaEnsDAFO3A',
            redirectUri: 'http://localhost:8080/'
          };

export default class OktaAuthWrapper extends Component {
  render() {
    return <OktaAuth options={OPTIONS} loginRoute = {LOGIN_ROUTE} successRoute={LOGIN_SUCCESS_ROUTE} children={this.props.children} />;
  }
}
