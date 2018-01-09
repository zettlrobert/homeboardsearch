import React, { Component } from 'react';

class GoogleSignIn extends Component {


//SignIn with Popup more information and Options https://firebase.google.com/docs/auth/web/google-signin?authuser=0
  loginWithGoogle = () => {
    let firebase = this.props.firebase;
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).catch((err) => {
      console.log('Authentification Error', err);
      alert(err);
    });
  }

  render () {
    return (
      <div>
        <button onClick={this.loginWithGoogle}>Sign in with Google</button>
      </div>
    );
  }

}

export default GoogleSignIn;
