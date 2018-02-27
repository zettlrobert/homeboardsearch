var axios = require('axios');
//module require and Bing key
var Bing = require('node-bing-api') ({ accKey: '8c33baa218e145a5aa531f53c2c53825'});


var Bing = require('node-bing-api')
            ({
              accKey: "8c33baa218e145a5aa531f53c2c53825",
              rootUri: "https://api.cognitive.microsoft.com/bing/v7.0/"
            });

module.exports = {

  BingSearch(req) {
    return new Promise( (resolve, reject) =>{

    Bing.web(req.body.query, {
      count: 10, //Number of Results max 50
      offset: 3 //Skip first 3 Results

    }, function(error, res, body) {
      console.log('\n');
      console.log('\n');
      console.log('>>>>>>>>>>>>>>>BING');
      console.log(body.webPages.value[0]);
      console.log(body.webPages.value[1]);
      console.log('\n');
      console.log('\n');
      // console.log(body.webPages.value[0]);
      // console.log(body.webPages.value[1]);
      console.log("BingError");
      console.log(error);
      console.log('\n');

      var results = body.webPages.value;

      resolve(results)


    });

        //
        // var test = [
        //   {
        //     test: "test ",
        //     url: "http://www.yougube.com"
        //   }
        // ];
        // // resolve(test);
        // resolve(test);

    });
  }


}
