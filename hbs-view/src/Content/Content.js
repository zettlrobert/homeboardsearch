import React from 'react';
// import * as firebase from 'firebase';
import Header from './../Pageres/Header';
import MySideNav from './../Sidenav/Sidenav';

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
      <MySideNav />

    </div>
  );
}

export default Content;
