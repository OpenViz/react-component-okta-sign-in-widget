// Okta Sign In Widget Component for React

import React, { Component, PropTypes } from 'react';

export default class OktaSignInWidget extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const that = this;

    // create Okta auth object
    const auth = new OktaSignIn(this.props.options);

    // check existing session
    setTimeout(() => {
      auth.session.exists((exists) => {
        if(exists) {
          that.login(that.props.successRoute);
        } else {
          that.launchWidget(auth);
        }
      });
    }, 0);
  }

  login(path) {
    this.context.router.push(path);
  }

  launchWidget(auth) {
    // render the widget and pass it the callback function for login success
    auth.renderEl({ 
        el: '#' + this.props.container
      },
      (res) => {
        this.context.router.push(this.props.successRoute);
        //res.session.setCookieAndRedirect('http://localhost:8080/home');
      }
    );
  }

  render() {
    return (
      <div id={ this.props.container }></div>
    );
  }

}
