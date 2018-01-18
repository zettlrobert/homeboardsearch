//express
const PORT = 3300; // defines PORT
var express = require('express');
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser');
//Require modules GoogleAPI
var GoogleApi = require('./modules/GoogleAPI/GoogleAPI.js');

app.use(cors())
app.use(bodyParser.json()); // for parsing application/json

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
  res.send('Hello World from rootserver/index.js');
})

app.post('/search', function (req, res) {
  console.log(req.body);
  sendDataToApi(req);
  res.send('root');
  console.log('does it search???');
  GoogleCustomSearch();
})


//RUN
app.listen(PORT, function () {
  console.log('App listening on port '+PORT+'! yes it is running!!!');
})


function sendDataToApi(req){
  console.log(req.body.query);
  GoogleApi.test();
}


///////////////////////
//GoogleSearchEngine //
///////////////////////
let GoogleCustomSearch = function() {
  var cx = 'homeboardsearch';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
  console.log("Google Search gets Triggered");
};
