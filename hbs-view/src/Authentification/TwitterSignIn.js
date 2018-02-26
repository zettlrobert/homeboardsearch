import React, { Component } from 'react';
import classes from './CSS/SignIn.css';
/////////////////
//Import Icons //
/////////////////
import Icon from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/'


class TwitterSignIn extends Component {
//Sign with Twitter, set var and acces props start Authentification
  loginWithTwitter = () =>  {
    let firebase = this.props.firebase;
    var provider = new firebase.auth.TwitterAuthProvider();
    firebase.auth().signInWithPopup(provider).catch((err) => {
      console.log('Authentification Error', err);
      alert(err);
    });
  }

  render () {
    return (
      <div className={classes.AuthWrapper}>
        <button className={classes.loginBtnTwitter} onClick={this.loginWithTwitter}>
        <Icon className={classes.signIconStyle} icon={ twitter } size={52}/>
        Sign in with Twitter
        </button>
      </div>
    )
  }
}


export default TwitterSignIn;
