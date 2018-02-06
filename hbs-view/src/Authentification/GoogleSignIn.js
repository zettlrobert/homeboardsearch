import React, { Component } from 'react';
import classes from './CSS/SignIn.css';

////////////////
//Icon import //
////////////////
import Icon from 'react-icons-kit';
import { googlePlus } from 'react-icons-kit/fa/googlePlus';

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
        <button className={classes.loginBtnGoogle} onClick={this.loginWithGoogle}>
        <Icon className={classes.signIconStyle} icon={ googlePlus } size={32}/>
        Sign in with Google</button>
      </div>
    );
  }

}

export default GoogleSignIn;
