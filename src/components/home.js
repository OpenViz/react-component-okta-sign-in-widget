import React, { Component, PropTypes } from 'react';

const BASE_URL = "https://dev-570863.oktapreview.com";
const CLIENT_ID = "OaCz3jBQxbaEnsDAFO3A";
const REDIRECT_URI = "http://localhost:8080/";
const AUTH_SCHEME = "OAUTH2";
const AUTH_PARAMS = {
        responseType: "id_token",
        responseMode: "okta_post_message",
        scope : [
            "openid",
            "email",
            "profile",
            "address",
            "phone"
        ]
      };

export default class Home extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    const that = this;

    // create Okta auth object
    this.auth = new OktaSignIn({
      baseUrl: BASE_URL,
      clientId : CLIENT_ID,
      redirectUri: REDIRECT_URI,
      authScheme : AUTH_SCHEME,
      authParams : AUTH_PARAMS
    });

    this.state = { authenticated : false };

    setTimeout(() => {
      this.auth.session.exists(function(exists) {
        that.setState({ authenticated : exists });
      });
    }, 0);

  }

  closeSession() {
    const that = this;

    this.auth.session.close(function(){
      that.setState({ authenticated : false });
    });
  }

  render() {
    if(!this.state.authenticated) {
      return <h1> Please <a href="/"> Sign in to continue</a></h1>;  
    }
    
    return (
      <div>
        <h1>Authenticated</h1>
        <br />
        <button type="button" className="btn btn-lg btn-danger" onClick={this.closeSession.bind(this)}>Close Session</button>
      </div>
    );
  }
    
}
