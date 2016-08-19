import React, { Component, PropTypes } from 'react';


export default class Home extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  signOut() {
    const that = this;

    this.props.auth.session.close(function() {
      window.location = that.props.loginRoute;
    });
  }

  render() {
    return (
      <div>
        <h1>Authenticated</h1>
        <br />
        <button type="button" className="btn btn-lg btn-danger" onClick={this.signOut.bind(this)}>Close Session</button>
      </div>
    );
  }
    
}
