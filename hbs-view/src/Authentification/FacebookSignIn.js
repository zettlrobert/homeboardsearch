import React, { Component } from 'react';
import classes from './CSS/SignIn.css';

/////////////////
//import Icons //
/////////////////
import Icon from 'react-icons-kit';
import { facebookOfficial } from 'react-icons-kit/fa/facebookOfficial';


class FacebookSignIn extends Component {

  //Login with Popup
  loginWithFacebook = () => {
    let firebase = this.props.firebase;
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).catch((err) => {
      console.log('Facebook authentification', err);
      alert(err);
    });
  }

render () {
  return (
    <div>
    <button className={classes.loginBtnFacebook} onClick={this.loginWithFacebook}>
    <Icon className={classes.signIconStyle}icon={ facebookOfficial } size={32}/>
    Sign In with Facebook</button>
    </div>
  );
}

}

export default FacebookSignIn;
