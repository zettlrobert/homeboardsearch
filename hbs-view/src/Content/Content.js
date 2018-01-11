import React from 'react';
// import * as firebase from 'firebase';
import Header from './../Pageres/Header';
import MySideNav from './../Sidenav/Sidenav';
import classes from './CSS/Content.css';

const Content = () => {
//////////////
//Functions //
//////////////

// const signOut = () => {
//   firebase.auth().signOut().then(function(){
//     console.log('Signed Out Succesfully');
//   })
// }

  return (
    <div>
      <Header />
      <div className={classes.contentWrapper}>

      <div className={classes.NavContainer}>
        <MySideNav />
      </div>
      <div className={classes.contentBox}>
        <div className={classes.someContent}>This Content1</div>
        <div className={classes.someContent}>This Content2</div>
        <div className={classes.someContent}>This Content3</div>
        <div className={classes.someContent}>This Content4</div>
        <div className={classes.someContent}>This Content5</div>
        <div className={classes.someContent}>This Content6</div>
        <div className={classes.someContent}>This Content7</div>
        <div className={classes.someContent}>This Content8</div>
      </div>
      </div>

    </div>
  );
}

export default Content;
