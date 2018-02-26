var axios = require('axios');

module.exports = {

  BingSearch(req) {
    return new Promise( (resolve, reject) =>{

        var test = [
          {
            test: "test ",
            url: "http://www.yougube.com"
          }
        ];
        // bingApi.search().catch()


        resolve(test);

    });
  }


}
