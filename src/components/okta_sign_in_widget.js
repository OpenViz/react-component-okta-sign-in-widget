// Okta Sign In Widget Component for React

import React, { Component, PropTypes } from 'react';

export default class OktaSignInWidget extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    const { auth, container, successRoute } = this.props;

    // render the widget and pass it the callback function for login success
    setTimeout(() => {
    auth.renderEl({ 
        el: '#' + container
      },
      (res) => {
        this.context.router.push(successRoute);
      }
    );
    }, 0);
  }

  render() {
    return (
      <div id={ this.props.container }></div>
    );
  }

}
