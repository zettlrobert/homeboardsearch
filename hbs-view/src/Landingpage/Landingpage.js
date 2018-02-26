import React from 'react';
import * as firebase from 'firebase';
import GoogleSignIn from './../Authentification/GoogleSignIn';
import FacebookSignIn from './../Authentification/FacebookSignIn';
import TwitterSignIn from './../Authentification/TwitterSignIn';
import GitHubSignIn from './../Authentification/GitHubSignIn';
import classes from './CSS/Landingpage.css';
import SvgIconGoogle from './../Sidenav/Ressources/Google.svg';
import SvgIconDuck from './../Sidenav/Ressources/DuckDuckGo.svg';
import SvgIconBing from './../Sidenav/Ressources/Bing.svg';
//images
import Developoer from './img/robert-zettl.png';
//////////////////////
//Icons for Buttons //
//////////////////////
import { login } from 'react-icons-kit/iconic/login';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_down } from 'react-icons-kit/md/ic_keyboard_arrow_down';
import { clock } from 'react-icons-kit/icomoon/clock';
import { list } from 'react-icons-kit/icomoon/list';
import { cloud } from 'react-icons-kit/icomoon/cloud'
import { newspaper } from 'react-icons-kit/icomoon/newspaper';
import { calendar } from 'react-icons-kit/icomoon/calendar';
import { bubbles } from 'react-icons-kit/icomoon/bubbles';
import { youtube } from 'react-icons-kit/icomoon/youtube';
import { ic_hourglass_empty } from 'react-icons-kit/md/ic_hourglass_empty';
import { ic_update } from 'react-icons-kit/md/ic_update';
import { ic_trending_up } from 'react-icons-kit/md/ic_trending_up';
import { ic_code } from 'react-icons-kit/md/ic_code';
import { ic_person } from 'react-icons-kit/md/ic_person';

const LandingPage = () => {
  return (
<div className={classes.Wrapper}>
  <div className={classes.pimg1}>
    <div className={classes.image1Wrapper}>
      <div className={classes.signInOptions}>
        <h2 className={classes.signInOptionsh2}>
        <Icon icon={login} className={classes.login} size={52}/>
        Sign In:
        </h2>
          <GoogleSignIn firebase={ firebase }/>
          <FacebookSignIn firebase={ firebase }/>
          <TwitterSignIn firebase={ firebase }/>
          <GitHubSignIn firebase={ firebase }/>
      </div>
      <div className={classes.ptext}>
        <p className={classes.border}>
          Search What You Want, Where You Want!
        </p>
      </div>
    </div>
</div>

<div className={classes.listWrapper}>
  <h2 className={classes.contentDescription}>Homeboard Search Featured Search Engines</h2>
    <ul className={classes.ul}>
      <li className={classes.listItem}>
        <div className={classes.listItemDesc}>
          <img src={SvgIconGoogle} className={classes.Google} alt="Google Logo"/>
            <h3>Search with Google</h3>
        </div>
            <div className={classes.listItemCon}>
              <div>
                <h4>The Most used Search Engine</h4>
                  <p>Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, search engine, cloud computing, software, and hardware</p>
              </div>
            </div>
      </li>
      <li className={classes.listItem}>
        <div className={classes.listItemDesc}>
          <img src={SvgIconDuck} className={classes.DuckDuckGo} alt="Google Logo"/>
              <h3>Search with DuckDuckGo</h3>
        </div>
            <div className={classes.listItemCon}>
              <div>
                <h4>The search engine that does not track you</h4>
                  <p>DuckDuckGo is an Internet search engine that emphasizes protecting searchers privacy and avoiding the filter bubble of personalized search results.</p>
              </div>
        </div>
      </li>
      <li className={classes.listItem}>
        <div className={classes.listItemDesc}>
          <img src={SvgIconBing} className={classes.Bing} alt="Bing Logo"/>
            <h3>Search with Bing</h3>
        </div>
            <div className={classes.listItemCon}>
              <div>
                <h4>The search engine that does not track you</h4>
                  <p>Bing is a web search engine owned and operated by Microsoft. The service has its origins in Microsofts previous search engines: MSN Search, Windows Live Search and later Live Search.</p>
              </div>
            </div>
      </li>
    </ul>
</div>

<div className={classes.pimg2}>
  <div className={classes.ptext}>
    <p className={classes.border2}>Multiple Search Engines in One Place</p>
  </div>
</div>

<div className={classes.WidgetContainer}>
  <div className={classes.Widgets}>
    <h2 className={classes.contentDescriptionWidget}>Implemented Widgets</h2>
      <ul className={classes.ulWidget}>
        <li className={classes.listItemW}><Icon icon={ic_keyboard_arrow_down} className={classes.clock} size={52}/>Alterable Privacy Blind</li>
        <li className={classes.listItemW}><Icon icon={clock} className={classes.clock} size={52}/>Realtime Location Based Clock</li>
        <li className={classes.listItemW}><Icon icon={list} className={classes.list} size={52}/>Take Quick Notes</li>
        <li className={classes.listItemW}><Icon icon={cloud} className={classes.cloud} size={52}/>Weather</li>
      </ul>
  </div>

  <div className={classes.Widgets}>
    <h2 className={classes.contentDescriptionWidget}>Coming Soon</h2>
      <ul className={classes.ulWidget}>
        <li className={classes.listItemW}><Icon icon={newspaper} className={classes.newspaper} size={52}/>News Feed</li>
        <li className={classes.listItemW}><Icon icon={calendar} className={classes.calendar} size={52}/>Calendar</li>
        <li className={classes.listItemW}><Icon icon={bubbles} className={classes.bubbles} size={52}/>Platform Instant Messaging</li>
        <li className={classes.listItemW}><Icon icon={youtube} className={classes.youtube} size={52}/>YouTube Player</li>
      </ul>
  </div>
</div>

<div className={classes.pimg3}>
  <div className={classes.ptext}>
    <div className={classes.devBorder}>
      <h3 className={classes.aboutHBS}>About Homeboard Search</h3>
        <div className={classes.devInfo}>
          <Icon icon={ic_hourglass_empty} size={82}/>
          <h4>Upcoming Features</h4>
        </div>
        <div className={classes.devInfo}>
          <Icon icon={ic_update} size={82}/>
          <h4>Up to Date</h4>
        </div>
        <div className={classes.devInfo}>
          <Icon icon={ic_trending_up} size={82}/>
          <h4>Steady Progress</h4>
        </div>
        <div className={classes.devInfo}>
          <Icon icon={ic_code} size={82}/>
          <h4>Secure Code</h4>
        </div>
        <div className={classes.devInfo}>
          <Icon icon={ic_person} size={82}/>
          <h4>One Person Project</h4>
        </div>
    </div>

    <div className={classes.myBox}>
      <div className={classes.myImageCont}><img className={classes.myImage} src={ Developoer } alt="Developer"/>
        <div className={classes.contactMe}>
          <div className={classes.myRambling}>
            <p>
            Thank You for your Interest in Homeboard Search!
            This Project was created for my Honours Bachelor of Art in Webdesign & Development.
            </p>
            <p>
            Homeboard Search was made with the Library React, and Node.js.
            </p>
            <p>
            Homeboard Search will hopefully be the first of many succesful Projects.
            My Portfolio is growing and i hope I as a Developer will grow with it.
            </p>
          </div>
            <div className={classes.ContactBox}>
            <a href="mailto:zettl.robert@gmail.com">If you have Suggestions or Want to Talk to me, feel free to send an {'\u00A0'}
              <span className={classes.Email}>Email</span></a>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
  );
}

export default LandingPage;
