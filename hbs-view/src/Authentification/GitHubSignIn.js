import React, { Component } from 'react';
import classes from './CSS/SignIn.css';

/////////////////
//Import Icons //
/////////////////
import Icon from 'react-icons-kit';
import { github } from 'react-icons-kit/fa/';


class GitHubSignIn extends Component {

//SignIn with Popup
    loginWithGitHub = () => {
      let firebase = this.props.firebase;
      var provider = new firebase.auth.GithubAuthProvider();
      firebase.auth().signInWithPopup(provider).catch((err) => {
        console.log('Authentification Error', err);
        alert(err);
      });
    }

  render() {
    return (
      <div>
        <button className={classes.loginBtnGithub} onClick={this.loginWithGitHub}>
        <Icon className={classes.signIconStyle} icon = { github } size={32}/>
        Sign in With GitHub</button>
      </div>
    )
  }
}


export default GitHubSignIn;
