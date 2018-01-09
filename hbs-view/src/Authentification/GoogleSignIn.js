import React, { Component } from 'react';

class GoogleSignIn extends Component {

  loginWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
  }
  
}

export default GoogleSignIn;
