//express
const PORT = 3300; // defines PORT
var express = require('express');
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser');
//Require modules GoogleAPI
var GoogleApi = require('./modules/GoogleAPI/GoogleApi.js');
var DuckDuckGoApi = require('./modules/DuckDuckGoAPI/DuckDuckGoApi');
var BingApi = require('./modules/BingAPI/BingApi');

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

/**
 * Routen
 */
app.get('/', function (req, res) {
  res.send('Hello World from rootserver/index.js');
})

//A Search Request is made!
app.post('/search', function(req, res) {
  console.log(req.body);

Promise.all([
            GoogleApi.GoogleCustomSearch(req),
            DuckDuckGoApi.DuckDuckGoSearch(req),
            BingApi.BingSearch(req)
          ])
.then( values => { console.log(' >> PROMISE ALL THEN');
  let googleRes = values[0];
  let ddgRes = values[1];
  let bingRes = values[2];

  // Add Indentifier
  googleRes = googleRes.map( (item) => {
    item.searchApi = "Google";
    return item;
  });
  ddgRes = ddgRes.map( (item) => {
    item.searchApi = "DuckDuckGo";
    return item;
  });
  bingRes = bingRes.map( (item) => {
    item.searchApi = "Bing";
    return item;
  });

  // All Items
  let allItems = googleRes.concat(ddgRes, bingRes);
  console.log({allItems});

  res.send(allItems);
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
  console.log("Data is sent to API LOGIC >> " + req.body.query);
  GoogleApi.GoogleCustomSearch(req);
  DuckDuckGoApi.DuckDuckGoSearch(req);
  BingApi.BingSearch(req);
}
