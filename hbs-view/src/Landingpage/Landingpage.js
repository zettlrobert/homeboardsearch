import React from 'react';
import * as firebase from 'firebase';
import GoogleSignIn from './../Authentification/GoogleSignIn'
import classes from './Landingpage.css';

const LandingPage = () => {
  return (
    <div className={classes.Wrapper}>
    <p>This comes from Landingpage</p>
      <h2>Pleas Sign In!<GoogleSignIn firebase={ firebase }/></h2>
    </div>
  );
}

export default LandingPage;
