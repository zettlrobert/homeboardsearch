import React, { Component } from 'react';
// import * as firebase from 'firebase';
import Header from './../Pageres/Header';
import Footer from './../Pageres/Footer';
import MySideNav from './../Sidenav/Sidenav';
import classes from './CSS/Content.css';
import Searchbar from './../Searchbar/Searchbar';

class Content extends Component {

state = {
  items: []
};

updateContent = (items) => {
  this.setState({items});
}

render(){
  let blocks = [];

  this.state.items.forEach( item => {
    blocks.push(<div className={classes.someContent}>{item.title} - {item.link}</div>);
  });

  return (
    <div>
      <Header />

      <div className={classes.contentWrapper}>
        <div className={classes.NavContainer}>
          <MySideNav />
        </div>

        <div className={classes.contentBox}>
          <div>
            <Searchbar onSearched={this.updateContent} />
          </div>

          {blocks}

        </div>
      </div>

      <Footer />
    </div>
  );
}
}

export default Content;
