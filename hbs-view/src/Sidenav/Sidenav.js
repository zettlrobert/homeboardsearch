import React from 'react';
import SideNav, { Nav, NavIcon, NavText } from 'react-sidenav';
import SvgIcon from 'react-icons-kit';

//Icons for Navigation Material Design 'react-icons-kit'
import { ic_aspect_ratio } from 'react-icons-kit/md/ic_aspect_ratio';
import { ic_more_horiz } from 'react-icons-kit/md/ic_more_horiz';
import { ic_share } from 'react-icons-kit/md/ic_share';

//Component
const MySideNav = () => {
  return (
    <div style={{background: '#2c3e50', color: '#FFF', alignSelf: 'stretch', textAlign: 'center'}}>
    <SideNav highlightColor='#E91E63' highlightBgColor='#00bcd4' defaultSelected='dashboard'>

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

    </SideNav>
    </div>
  );
}


//Export
export default MySideNav;
