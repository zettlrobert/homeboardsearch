import React from 'react';
import * as firebase from 'firebase';
import GoogleSignIn from './../Authentification/GoogleSignIn';
import FacebookSignIn from './../Authentification/FacebookSignIn';
import TwitterSignIn from './../Authentification/TwitterSignIn';
import GitHubSignIn from './../Authentification/GitHubSignIn';
import classes from './CSS/Landingpage.css';



//////////////////////
//Icons for Buttons //
//////////////////////
import Icon from 'react-icons-kit';
import { ic_new_releases } from 'react-icons-kit/md/ic_new_releases';
import { ic_update } from 'react-icons-kit/md/ic_update';
import { ic_trending_up } from 'react-icons-kit/md/ic_trending_up';
import { ic_code } from 'react-icons-kit/md/ic_code';
import { ic_person } from 'react-icons-kit/md/ic_person';

const LandingPage = () => {
  return (
    <div className={classes.Wrapper}>


      <div className={classes.SignInOptionsContainer}>
          <div className={classes.SignInOptios}>
            <h2>Sign In:</h2>
            <GoogleSignIn firebase={ firebase }/>
            <FacebookSignIn firebase={ firebase }/>
            <TwitterSignIn firebase={ firebase }/>
            <GitHubSignIn firebase={ firebase }/>
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
          <li>Search with DuckDuckGo</li>
          <li>Search with one Application!</li>
          </ul>
        </div>
      </div>

      <div className={classes.contentBox1}>
        <div className={classes.ContentInDev}>
          <h2>Still in Development</h2>
        </div>
      </div>

      <div className={classes.contentBox2}>
        <div className={classes.Content2}>
          <Icon icon={ic_new_releases} size={52}/>
          <h3>New Features in Development</h3>
        </div>
        <div className={classes.Content2}>
          <Icon icon={ic_update} size={52}/>
          <h3>Updating</h3>
        </div>
        <div className={classes.Content2}>
          <Icon icon={ic_trending_up} size={52}/>
          <h3>Steady Progress</h3>
        </div>
        <div className={classes.Content2}>
          <Icon icon={ic_code} size={52}/>
          <h3>Secure Code</h3>
        </div>
        <div className={classes.Content2}>
          <Icon icon={ic_person} size={52}/>
          <h3>One Person Project</h3>
        </div>
      </div>

      <div className={classes.contentBox1}>
        <div className={classes.Content}>
          <a href="mailto:zettl.robert@gmail.com">If you have Quetions feel free to Send an Email to Robert Zettl</a>
        </div>
      </div>





    </div>

  );
}

export default LandingPage;
