//express
const PORT = 3300; // defines PORT
var express = require('express');
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser');
//Require modules GoogleAPI
var GoogleApi = require('./modules/GoogleAPI/GoogleApi.js');
var DuckDuckGoApi = require('./modules/DuckDuckGoAPI/DuckDuckGoApi');

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

//A Search Request is made!
app.post('/search', function(req, res) {
//   console.log("This is the Searchquery from Searchbar Form:");
//   console.log(req.body);
// ////////////////////////////
// //Create Promises For API //
// ////////////////////////////
// const GoogleApiProm = new Promise(function(resolve, reject) {
//   GoogleApi.GoogleCustomSearch(req).then(items => {
//     console.log("This are my Google Results");
//     console.log(res);
//     res.send(items);
//   }).catch(err => {
//     console.log("Error with Google Promise: " + err);
//   })
// })

// const DuckDuckGoApiProm = new Promise(function(resolve, reject) {
//   DuckDuckGoApi.DuckDuckGoSearch(req).then(items => {
//     console.log("This are my DuckDuckGo Results");
//     console.log(res);
//     res.send(items);
//   }).catch(err => {
//     console.log("Error with DuckDuckGo Promise: " + err);
//   })
// })

// ///////////////////////////////////////
// //Promise All to get Data to ALL API //
// ///////////////////////////////////////
// Promise.all([GoogleApiProm, DuckDuckGoApiProm])
//   .then(function(values) {
//     console.log("Promise all Results:")
//     console.log(values);
//   }).catch(err => {
//     console.log("Error with Promise.all" + err);
//   })



Promise.all([
            GoogleApi.GoogleCustomSearch(req),
            DuckDuckGoApi.DuckDuckGoSearch(req)
          ])
.then( items => {
  resolve.res.send(items);
}).catch(err => {

  console.log("Error in Promise All" + err);
})


})



//RUN
app.listen(PORT, function () {
  console.log('App listening on port '+PORT+'! yes it is running!!!');
})


//////////////////////////////
//GET DATA TO APIS          //
//Send data to diffrent API //
//////////////////////////////
function sendDataToApi(req){
  //Search Input
  console.log("sendDataToApi Log " + req.body.query);
  GoogleApi.GoogleCustomSearch(req);
  DuckDuckGoApi.DuckDuckGoSearch(req);
}
