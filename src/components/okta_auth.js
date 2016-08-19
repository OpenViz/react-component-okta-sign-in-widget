// Okta Auth Component for React
// Check if a session exists and handle the response

import React, { Component, PropTypes } from 'react';

export default class OktaAuth extends Component {
  static contextTypes = {
    router: PropTypes.object,
    location: PropTypes.object
  };

  componentWillMount() {
    this.checkExistingSession();
  }

  componentWillReceiveProps() {
    this.checkExistingSession();
  }

  checkExistingSession() {
    const that = this;

    // create Okta auth object
    const auth = new OktaSignIn(this.props.options);

    this.state = { auth: auth, authenticated : false };

    setTimeout(() => {
      auth.session.exists(function(exists) {
        that.setState({ authenticated : exists });
        if(exists && that.context.location.pathname === that.props.loginRoute) {
          that.context.router.push(that.props.successRoute);
        }
      });
    }, 0);
  }

  render() {
    const { loginRoute } = this.props;

   if(!this.state.authenticated && this.context.location.pathname !== loginRoute) {
      return <h1> Please <a href={ loginRoute }> Sign in to continue</a></h1>;  
    }

    return (
      <div>{React.cloneElement(this.props.children, { auth: this.state.auth, loginRoute: this.props.loginRoute, successRoute: this.props.successRoute })}</div>
    );
  }

}
