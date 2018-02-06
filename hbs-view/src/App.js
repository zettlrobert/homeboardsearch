import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css';
// import GoogleSignIn from './Authentification/GoogleSignIn';
import Header from './Pageres/Header';
import Footer from './Pageres/Footer';
import Content from './Content/Content';
import LandingPage from './Landingpage/Landingpage';


class App extends Component {
  //State User
  state = {
    loggedIn: false,
    user: null,
    firebase: false
  };

  componentDidMount(){
    this.initFirebase();
  }

  initFirebase(){
    firebase.initializeApp({
      apiKey: "AIzaSyDF-5wz_IXlSRVtUD8esavsCvUSQ4D6c4I",
      authDomain: "homeboardsearch.firebaseapp.com",
      databaseURL: "https://homeboardsearch.firebaseio.com",
      projectId: "homeboardsearch",
      storageBucket: "homeboardsearch.appspot.com",
      messagingSenderId: "498596732107"
    });

    //get current singed in user:
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        //User Singed in
        this.setState({user, loggedIn: true});
      } else {
        this.setState({user: null, loggedIn: false});
      }
    });

    this.setState({ firebase });
  }
  // search = () => {
  //   let val = this.refs.search.value;
  //   request.post('http://127.0.0.1:3000/search').send({ searchParameter: val })
  // };
  render() {
    // Some Destructuring
    let {user, firebase, loggedIn} = this.state;

    // if firebase is initializing
    if(!firebase) {
      return (<div>Application is loading...</div>)
    }

    //User has falsy value or userdate if logged in
    console.log(user)

    //Page Content
    let pageContent;
    if(loggedIn){
      //If user is logged in disply pageContent
      pageContent = (
        <div>
          <Content />
        </div>
      );
    }else{
      // User is not Loged in (Authenticated)
    pageContent = (
      <div>
        <Header />
        <LandingPage/>
        <Footer />

      </div>
    );
    }

    return (
      <div className="App" style={{background: 'lightgrey', padding: '0'}}>
      {pageContent}
      </div>
    );
  }
}

export default App;
