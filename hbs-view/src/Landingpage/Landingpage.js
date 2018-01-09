import React from 'react';
import * as firebase from 'firebase';
import GoogleSignIn from './../Authentification/GoogleSignIn'
import classes from './Landingpage.css';



//////////////////////
//Icons for Buttons //
//////////////////////
import Icon from 'react-icons-kit';
import { facebookOfficial } from 'react-icons-kit/fa/facebookOfficial';
import { twitter } from 'react-icons-kit/fa/twitter';
import { github } from 'react-icons-kit/fa/github';

const LandingPage = () => {
  return (
    <div className={classes.Wrapper}>
    <p>This comes from Landingpage</p>

      <div className={classes.SignInOptions}>
        <h2>Please Sign In!</h2>

          <GoogleSignIn firebase={ firebase }/>

          <button className={classes.loginBtnFacebook}>
          <Icon className={classes.signIconStyle}icon={ facebookOfficial } size={32}/>
          Sign in with Facebook</button>

          <button className={classes.loginBtnTwitter}>
          <Icon className={classes.signIconStyle}icon={ twitter } size={32}/>
          Sign in with Twitter</button>

          <button className={classes.loginBtnGithub}>
          <Icon className={classes.signIconStyle}icon={ github } size={32}/>
          Sign in with GitHub</button>
      </div>
      <div className={classes.contentBox1}>
        <div className={classes.ulListStyle}>
          <ul>
          <h3>Homeboard Search Features</h3>
          <li>Search with Google</li>
          <li>Search with Bing</li>
          <li>Search with Yahoo</li>
          <li>Search with one Application!</li>
          </ul>
        </div>

        <div className={classes.ulListStyle}>
          <ul>
          <h3>Planned Widgets</h3>
          <li>News Feed</li>
          <li>Google Calendar</li>
          <li>YouTube</li>
          <li>Suggestions</li>
          </ul>
        </div>

        <div className={classes.ulListStyle}>
          <ul>
          <h3>Homeboard Search Features</h3>
          <li>Search with Google</li>
          <li>Search with Bing</li>
          <li>Search with Yahoo</li>
          <li>Search with one Application!</li>
          </ul>
        </div>

      </div>

    </div>
  );
}

export default LandingPage;
