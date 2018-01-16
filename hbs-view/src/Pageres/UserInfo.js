import React from 'react';
import * as firebase from 'firebase';
import classes from './CSS/UserInfo.css';

const UserInfo = () => {
// Get User Information
  var user = firebase.auth().currentUser;
  var name, photoUrl;
  //email, uid, emailVerified could be declared as well
  if (user != null) {
    name = user.displayName;
    photoUrl = user.photoURL;
    // email = user.email;
    // uid = user.uid; unique to firebase project don't use this for Server Validiation
    // emailVerified = user.emailVerified
  }

  return (
    <div className={classes.UserInfoWrapper}>
      <div><img src={photoUrl} alt="Profilpicture"></img></div>
      <div className={classes.UserName}>{name}</div>
    </div>
  )

}


export default UserInfo;
