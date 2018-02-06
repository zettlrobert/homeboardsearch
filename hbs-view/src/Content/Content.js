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

contentChange = (id) => {
  this.setState({id});
}

render(){
  let blocks = [];

  // if(this.state.id === "Google") {
  //   console.log("google results");
  //   } else (this.state.id === "DuckDuckGo") {
  //     console.log("DDG Results");
  //     } else (this.state.id === "Bing") {
  //       console.log("Bing Results")
  // }

  if(this.state.id ==="Google") {
    console.log("Google Results");
  } else {
    if(this.state.id === "DuckDuckGo") {
      console.log("DuckDuckGo");
    } else {
      if(this.state.id === "Bing") {
        console.log("Bing");
      }
    }
  }

//moz filter .filter
  this.state.items.forEach( item => {
    blocks.push(
      <div className={classes.someContent}>
        <h3>{item.title}</h3>
       <a href={item.link}>{item.link} target="_blank"></a>
      </div>
    );
  });

  return (
    <div>
      <Header />

      <div className={classes.contentWrapper}>
        <div className={classes.NavContainer}>
          <MySideNav onGResultChange={this.contentChange} />
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
