var axios = require('axios');

//Export Data
module.exports = {

GoogleCustomSearch(req) {
  console.log('Access to Data from Searchbar' + req.body.query);

  axios.get('https://www.googleapis.com/customsearch/v1?',  {
    params : {
      key : 'AIzaSyDWEWgfQ3f8auzXRq1WuM4X3JZvlzqg2uo',
      cx : '018170918728530060604:nf7onga_kd8',
      q : req.body.query
  }
  })
.then(function (response) {
  console.log('What kind of response' + response);
  var mySearchResults = response;
  //Console Log some Search Information
  console.log(mySearchResults);
})
.catch(function (error) {
  console.log ('this fucking ERROR' + error);
})

}

  }










///////////////////////
//GoogleSearchEngine //
///////////////////////
