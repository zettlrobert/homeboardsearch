var axios = require('axios');

//Export Data
module.exports = {

GoogleCustomSearch(req) {

//wrapper promise, wen anfrage bestätigt oder abgelehnt
return new Promise( (resolve, reject) => {

  // console.log('Google API Access Data from Searchbar ' + req.body.query);

  axios.get('https://www.googleapis.com/customsearch/v1?',  {
    params : {
      key : 'AIzaSyDWEWgfQ3f8auzXRq1WuM4X3JZvlzqg2uo',
      cx : '018170918728530060604:nf7onga_kd8',
      q : req.body.query
  }

  })


  .then(function (response) {
    // console.log('What kind of response' + response);
    //Console Log some Search Information
    // console.log(mySearchResults);
    //anfrage ausgeführt, zurück an index
    // console.log(response);
    resolve(response.data.items);
  })
  .catch(function (error) {
    console.log ('this fucking ERROR' + error);
    //anfrage fehlgeschlagen zurück an index
    reject(error);
  });

});

}

  }


//Search Engine 2
//var cx = '018170918728530060604:jk-kpj9fy-q';
    






///////////////////////
//GoogleSearchEngine //
///////////////////////
