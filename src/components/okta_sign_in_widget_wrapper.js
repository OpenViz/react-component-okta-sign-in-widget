// Wrapper for the Okta Sign In Widget

import React, { Component } from 'react';
import OktaSignInWidget from './okta_sign_in_widget';

// Define here your parameters
const WIDGET_CONTAINER_ID = 'okta-login-container';

export default class OktaSignInWidgetWrapper extends Component {
  render() {
    console.log('in sign in wrapper');
    return <OktaSignInWidget container={WIDGET_CONTAINER_ID} auth={this.props.auth} successRoute={this.props.successRoute} />;
  }
}
