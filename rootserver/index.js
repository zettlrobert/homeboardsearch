//express
const PORT = 3000; // defines PORT
var express = require('express');
var app = express();

//firestore
// when running code with Google Cloud Platform use Google Application Default Credentials
// to fetch sercieAccount
var admin = require("firebase-admin");
var serviceAccount = require("./homeboardsearch-394b4036b873.json"); //path to serviceAccountKey.json;
//init
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount), // var sercieAccount func
});
// var db = admin.firebase(); look up how to connect to db when needed

//modules


/**
 * Routen
 */
app.get('/', function (req, res) {
  res.send('root');
})

app.post('/search', function (req, res) {
  res.send('root');
})


//RUN
app.listen(PORT, function () {
  console.log('App listening on port '+PORT+'!');
})
