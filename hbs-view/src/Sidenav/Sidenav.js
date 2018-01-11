import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import * as firebase from 'firebase';
import classes from './CSS/Sidenav.css';

//Icons for Navigation Material Design 'react-icons-kit'
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import { ic_share } from 'react-icons-kit/md/ic_share';
import { logout } from 'react-icons-kit/iconic/logout'


//Component
const MySideNav = () => {
  //////////////
  //Functions //
  //////////////

  const signOut = () => {
    firebase.auth().signOut().then(function(){
      console.log('Signed Out Succesfully');
    })
  }

  const onNavChange = (id) => {
    console.log('clicked', id);
    if(id === "dashboard") {
      console.log('Load Dashboard');
    } else {
      if(id === "settings") {
        console.log('Load Settings');
      } else {
        if(id === "sign_out") {
          signOut();
        }
      }
    }
  }


    return (
      <div className={classes.NavWrapper}>

        <div className={classes.SideNav}>
          <SideNav onItemSelection={onNavChange}
          highlightColor='#E91E63'
          highlightBgColor='#00bcd4'
          defaultSelected='dashboard'>


          <Nav id='dashboard'>
          <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
          <NavText className={classes.NavItemPadding}>Homeboard</NavText>
          </Nav>

          <Nav id='settings'>
          <NavIcon><SvgIcon size={20} icon={ic_more_horiz}/></NavIcon>
          <NavText className={classes.NavItemPadding}>Settings</NavText>
          </Nav>

          <Nav id='share'>
          <NavIcon><SvgIcon size={20} icon={ic_share}/></NavIcon>
          <NavText className={classes.NavItemPadding}>Share</NavText>
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

//Export
export default MySideNav;
