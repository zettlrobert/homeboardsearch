var axios = require('axios');
var ddg = require('ddg');

//Export Data from API
module.exports = {



  DuckDuckGoSearch(req) {
    return new Promise((resolve, reject) => {
      console.log("DuckDuckGoApi Access to Data from Searchbar: " + req.body.query);

      //node-ddg NPM
      options = {
        "useragent" : "Homeboard Search",
        "format" : "json",
        // "pretty": "1"
      }

      ddg.query(req.body.query, options, function(err, data) {
          var	results = data.RelatedTopics; //related topics is a list of 'related answers'

          for (i=0;i<results.length;i++) {
              console.log(''+results[i].FirstURL);
              console.log('-- '+results[i].Text);
              console.log('\n');
          }

      })

    })
    .then(function(response) {
      console.log(ddgFirstURL);
      console.log(ddgText);
      console.log(response.data.RelatedTopics);
      resolve(response.data.RelatedTopics);
    })
    .catch(err => {
      console.log("DDG Rejected: " + err);
      reject(err);
    })
  }






}
