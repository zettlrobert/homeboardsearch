import React from 'react';
import * as firebase from 'firebase';

const Content = () => {
//////////////
//Functions //
//////////////
const signOut = () => {
  firebase.auth().signOut().then(function(){
    console.log('Signed Out Succesfully');
  })
}

  return (
    <div>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}

export default Content;
