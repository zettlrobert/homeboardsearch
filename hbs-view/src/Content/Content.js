import React, { Component } from 'react';
// import * as firebase from 'firebase';
import Header from './../Pageres/Header';
import Footer from './../Pageres/Footer';
import MySideNav from './../Sidenav/Sidenav';
import classes from './CSS/Content.css';
import Searchbar from './../Searchbar/Searchbar';
import Time from './../Widgets/Time/Time';
import Notes from './../Widgets/Notes/Notes';
import Info from './../Widgets/Info/Info';

class Content extends Component {

state = {
  id: "Dashboard",
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


  if(this.state.id === "Dashboard"){
    console.log("Display Widgets");
    blocks.push(
<div>

  <div className={classes.widgetsContainer1}>

    <div className={classes.widgetTime}>
      <Time />
    </div>

    <div className={classes.widgetNotes}>
      <Notes />
    </div>

  </div>

  <div className={classes.widgetsContainer2}>

    <div className={classes.Information}>
      <Info />
    </div>

  </div>

</div>

    );
  } else {
  //moz filter .filter
    this.state.items.filter( (item) => {
      return item.searchApi === this.state.id;
    }).forEach( item => {
      if(this.state.id ==="Dashboard"){
        console.log("Dashboard >>>>>>>>>>>>>>>>>>>>>>>");
      }else if(this.state.id ==="Google"){
        console.log("Google API returning in Content Logging ITEMS");
        blocks.push(
        <div className={classes.someContent}>
          <h3 className={classes.itemHeading}>{item.title}</h3>
            <div className={classes.linkWrap}>
              <a href={item.link} target="_blank" className={classes.linkStyle}>{item.link}></a>
           </div>
        </div>
        );
      }else if(this.state.id ==="DuckDuckGo"){
        console.log("DDG API returning in Content Logging ITEMS");
        blocks.push(
          <div className={classes.someContent}>
            <h3 className={classes.itemHeading}>{item.Text}</h3>
              <div className={classes.linkWrap}>
                <a href={item.FirstURL} target="_blank" className={classes.linkStyle}>{item.FirstURL}></a>
              </div>
          </div>
        );
      }else if(this.state.id ==="Bing"){
        blocks.push(
          <div>
            { item.name }
          </div>
        );
      }
    });

  }


  return (
    <div>
      <Header />

      <div className={classes.contentWrapper}>
        <div className={classes.NavContainer}>
          <MySideNav onResultChange={this.contentChange} />
        </div>

        <div className={classes.contentBox}>
          <div className={classes.SearchbarOnContent}>
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
