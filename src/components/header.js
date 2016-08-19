import React from 'react';

const Header = () => {
  return (
    <header style={{ marginBottom: '100px' }}>
      <nav className="navbar navbar-default  navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="/login">
              <img src="https://www.okta.com/sites/all/themes/Okta/images/logo.svg" height="100%" width="100%"/>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
