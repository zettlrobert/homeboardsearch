import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import SvgIconGoogle from './Ressources/Google.svg';
import SvgIconDuck from './Ressources/DuckDuckGo.svg';
import SvgIconBing from './Ressources/Bing.svg';
import * as firebase from 'firebase';
import classes from './CSS/Sidenav.css';
import UserInfo from './../Pageres/UserInfo';

//Icons for Navigation Material Design 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home';
import { logout } from 'react-icons-kit/iconic/logout'


//Component
class MySideNav extends React.Component {
  //////////////
  //Functions //
  //////////////

  //Sign Out
  signOut = () => {
    firebase.auth().signOut().then(function(){
      console.log('Signed Out Succesfully');
    })
  }

  //Select nav Item
  onNavChange = (id) => {
    console.log('clicked', id);
    if(id === "dashboard") {
      console.log('Load Dashboard');
      this.props.onResultChange("Dashboard");
    } else if(id === "Google") {
      this.props.onResultChange("Google");
    } else if(id === "DuckDuckGo") {
      this.props.onResultChange("DuckDuckGo");
    } else if(id === "sign_out") {
        this.signOut();
    }
  }

render(){
  return (
    <div className={classes.NavWrapper}>
    <div className={classes.SideNav}>
    <SideNav onItemSelection={this.onNavChange}
    highlightColor='#E91E63'
    highlightBgColor='#00bcd4'
    defaultSelected='dashboard'>

    <UserInfo />

    <Nav id='dashboard'>
    <NavIcon><SvgIcon size={40} icon={home} className={classes.Dashboard}/></NavIcon>
    <NavText className={classes.NavItemPadding}>Homeboard</NavText>
    </Nav>

    <Nav id='Google'>
    <NavIcon><img src={SvgIconGoogle} className={classes.Google} alt="Google Logo"/></NavIcon>
    <NavText className={classes.NavItemPadding}>Google</NavText>
    </Nav>

    <Nav id='DuckDuckGo'>
    <NavIcon><img src={SvgIconDuck} className={classes.DuckDuckGo} alt="DuckDuckGo Logo"/></NavIcon>
    <NavText className={classes.NavItemPadding}>DuckDuckGo</NavText>
    </Nav>

    <Nav id='Bing'>
    <NavIcon><img src={SvgIconBing} className={classes.Bing} alt="Bing Logo"/></NavIcon>
    <NavText className={classes.NavItemPadding}>Bing</NavText>
    </Nav>

    <Nav id='sign_out'>
    <NavIcon>
    <SvgIcon size={20} icon={logout} />
    </NavIcon>
    <NavText className={classes.NavItemPadding}>Sign Out</NavText>
    </Nav>

    </SideNav>
    </div>


    </div>
  );
}

}

//Export
export default MySideNav;
