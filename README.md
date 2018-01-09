Clone Repository
git clone
https://www.npmjs.com/package/express

hbs-view
create-react-app

rootserver
express https://www.npmjs.com/package/express //routing
  mkdir rootserver
  npm init ->package.json
  entry point -> def index.js
  npm install express --save

firebase-admin https://www.npmjs.com/package/firebase-admin
  npm install --save firebase-admin
  to use require in your application from any js file:
  var admin = require("firebase-admin");

firebase https://www.npmjs.com/package/firebase
npm install --save firebase
for Authentification and firebase Functions
var app = firebaes.initializeApp();

unlock CSS Modules for react https://github.com/css-modules/css-modules
  npm run eject on hbs-view
  scroll du modules
  find test: /\.css$/,
  in options set:
    modules: true
  add
    localIdentName: '[name]__[local]__[hash:base64:5]'
  go to webpack.config.prod
  search for css loader
  add	                  
    importLoaders: 1,
    modules: true,
    localIdentName: '[name]__[local]__[hash:base64:5]',
