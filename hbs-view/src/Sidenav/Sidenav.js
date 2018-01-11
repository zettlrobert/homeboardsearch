import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';
import * as firebase from 'firebase';

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
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>

        <div style={{width: '33%',height: '80vh', margin: '0', background: '#2c3e50', color: '#FFF', alignSelf: 'stretch', textAlign: 'left'}}>
          <SideNav onItemSelection={onNavChange} highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='dashboard'>

          <Nav id='dashboard'>
          <NavIcon><SvgIcon size={20} icon={ic_aspect_ratio}/></NavIcon>
          <NavText>Homeboard</NavText>
          </Nav>

          <Nav id='settings'>
          <NavIcon><SvgIcon size={20} icon={ic_more_horiz}/></NavIcon>
          <NavText>Settings</NavText>
          </Nav>

          <Nav id='share'>
          <NavIcon><SvgIcon size={20} icon={ic_share}/></NavIcon>
          <NavText>Share</NavText>
          </Nav>

          <Nav id='sign_out'>
          <NavIcon>
          <SvgIcon size={20} icon={logout} />
          </NavIcon>
          <NavText>Sign Out</NavText>
          </Nav>

          </SideNav>
        </div>

        <div style = {{ border: '2px solid red', padding: '30px', height:'100%' }}>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
        </div>
        <div style = {{ border: '2px solid red', padding: '30px', height:'100%' }}>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
        </div>
        <div style = {{ border: '2px solid red', padding: '30px', height:'100%' }}>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
          <p>just some wise and filling content</p>
        </div>


      </div>
    );
}

//Export
export default MySideNav;
