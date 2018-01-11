import React from 'react';
import * as firebase from 'firebase';
import GoogleSignIn from './../Authentification/GoogleSignIn';
import FacebookSignIn from './../Authentification/FacebookSignIn';
import classes from './Landingpage.css';



//////////////////////
//Icons for Buttons //
//////////////////////
import Icon from 'react-icons-kit';
import { twitter } from 'react-icons-kit/fa/twitter';
import { github } from 'react-icons-kit/fa/github';

const LandingPage = () => {
  return (
    <div className={classes.Wrapper}>


      <div className={classes.SignInOptionsContainer}>
        <div>
          <h2>Please Sign In!</h2>
        </div>

          <div className={classes.SignInOptios}>

            <GoogleSignIn firebase={ firebase }/>

            <FacebookSignIn firebase={ firebase }/>



            <button className={classes.loginBtnTwitter}>
            <Icon className={classes.signIconStyle}icon={ twitter } size={32}/>
            Sign in with Twitter</button>

            <button className={classes.loginBtnGithub}>
            <Icon className={classes.signIconStyle}icon={ github } size={32}/>
            Sign in with GitHub</button>

          </div>
      </div>

      <div className={classes.contentBox1}>


        <div className={classes.Content}>
          <ul>
          <h3>Homeboard Search Features</h3>
          <li>Search with Google</li>
          <li>Search with Bing</li>
          <li>Search with Yahoo</li>
          <li>Search with one Application!</li>
          </ul>
        </div>

        <div className={classes.Content}>
          <ul>
          <h3>Planned Widgets</h3>
          <li>News Feed</li>
          <li>Google Calendar</li>
          <li>YouTube</li>
          <li>Suggestions</li>
          </ul>
        </div>

        <div className={classes.Content}>
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
