04.01.2018
1. created Repository
2. created hbs-view with create-react-app
3. created rootserver
  4. installed express for routing
  5. installed firebase-admin for firebase authentification
6. created firebase project hombeboardsearch id: hombeboardsearch
7. in firebase project create service account
      - rootserver -> role owner
8. include in index.js
    - require express
    - require firebase auth
    - define routes
9. Help in App.js --> lookup superagent and search...

06.01.2018
1. deleted some react files
2. installed react-sidenav https://www.npmjs.com/package/react-sidenav
3. isntalled react-icons-kit https://www.npmjs.com/package/react-icons-kit

09.01.2018
1. installed firebase
2. set up firebase authentification
3. display LandingPage if not logged in
4. cleaning up directory look into app.css and index.css(removable?)
5. created dir Landingpage and Landingpage file
7. created Authentification directory for SignIn Options
different Authentification Methods (Federated Identity provider integration)
https://firebase.google.com/docs/auth/?authuser=0
6. Firebase Google SignIn https://firebase.google.com/docs/auth/web/google-signin?authuser=0
7. //CSS Modules unlock
      1. npm run eject on hbs-view
      2. scroll du modules
      3. find test: /\.css$/,
      4. in options set:
      modules: true
      5. add
      localIdentName: '[name]__[local]__[hash:base64:5]'
      6. go to webpack.config.prod
      7. search for css loader
      8. add	                  
      importLoaders: 1,

      modules: true,

      localIdentName: '[name]__[local]__[hash:base64:5]'

  8. Worked on Login and content

11.01.2018
Worked on styling of components
  LandingPage
  Content
  Header

12.01.2018
TwitterSignIn
Register App on Twitter Dev https://apps.twitter.com/app/
!!!Set Permissions to get email Identifier
Coded Twitter Login https://firebase.google.com/docs/auth/web/twitter-login

GitHubSignIn
https://firebase.google.com/docs/auth/web/github-auth
Register app as dev on GitHub https://github.com/settings/applications/new

15.01.2018
Created Heroku Account
Download and install Heroku CLI https://devcenter.heroku.com/articles/heroku-cli
cmd -> heroku login
how to deploy using Heroku Git https://dashboard.heroku.com/apps/homeboardsearch/deploy/heroku-git
Some Styling and created Searchbar


18.01.2018
Created UserInfo (Name and Picture), Inserted into SideNav
changed colors
Adjusted Searchparameters with Survey

18.01.2018 Coding with Khadim
install axios --s       in hbs-view
express                 in rootserver
install cors            in rootserver
install body-parser     in rootserver


23.01.2018
install axios --s       in rootserver to make GET Request to Custom Search Engine








//CUSTOM SEARCH ENGINE GOOGLE
Research for Custom Search Engine Google:
Overview: https://developers.google.com/custom-search/docs/overview
JSON/Atom API
	develop websites and programs to retrive and display search results from google custom search programmatically


Steps:
Create Custom Search Enginge https://developers.google.com/custom-search/docs/tutorial/creatingcse
Custom Search JSON
external Documents
https://developers.google.com/custom-search/docs/xml_results
http://www.opensearch.org/Specifications/OpenSearch/1.1


Custom Search API
Your API Key
AIzaSyD5zvjmOn8oiWumHGOKeML1UI1lJfKLbDE

Restrict after dev https://console.developers.google.com/apis/credentials/key/238?authuser=0&project=homeboardsearch

API Overview https://developers.google.com/custom-search/json-api/v1/introduction

Only one Way to invoke the custom search AP per rest get request (REST HTTP mapping)
Operation		 Description								                                         REST HTTP mapping
list			   Returns the requested search results from a Custom Search Engine	   GET

The Result of a search que4ry to the Custom Search Engine API is a JSON or Atom object that includes three types of data:
	- Metadata describing the requested search (and, possibly, related search requests)
	- Metadata describing the custom search engine
	- Search results
More Information REST response Data:
https://developers.google.com/custom-search/json-api/v1/using_rest#response_data
https://developers.google.com/custom-search/json-api/v1/reference/cse/list#response




MAKING A REQUEST
API is different from traditional REST(Representational State Transfer)
instead of providing access to resources the API provides access to a service as a result a single URL that acts as service endpoint is provided

You can retrieve results for a particular search by sending an HTTP GET request to its URL.
Pass the details of search request as query parameters.
JSON Custom Search API URl!!!!
https://www.googleapis.com/customsearch/v1?parameters

Query parameters are required with each search request:
API key                     use the key query parameter to identify your application.
Custom search engine ID     use cx to specify the custom search engine you want to use to perform this search the search engine must be created with te control panel
search query                use the q query parameter to specify your search expression

QUERY PARAMETERS
- API-specific parameters         define properties of your search, like the search expression, number of results, language etc.
- Standard query parameters       define technical aspects of your request, like the API key or data format for the response (JSON or Atom).

All parameter values need to be URL encoded

API-specific query parameters
Request parameters that apply specifically to the JSON/Atom Custom Search API and define your search request are summarized in the reference.
https://developers.google.com/custom-search/json-api/v1/reference/cse/list#request



RESPONSE DATA
If the request succeeds the server response with 200 OK TTP status code and the response data in JSON format
Response Data Structure
https://developers.google.com/custom-search/json-api/v1/reference/cse/list#response

The response data is a JSON or Atom object that includes three types of properties:
- Metadata describing the requested search (and possibly related search requests)
- Metadata describing the custom search engine
- Search results


Search Request metadata
- url:      property which ahs information about the OpenSearch template used for the results returned in this request
- queries:  property which is an array of objects describing the characteristic of possible searches.
            the Name of each Object in the Array is the name of an OpenSearch query or one of two custom roles defined by the API: previousPage and nextPage
            Possible query role objects include:
            - request:      Metadata describing the query for the current set of rules
                            - this role is always present in the response
                            - it is always an array with just one element
            - nextPage:     Metadata describing the query to use for the next page of results
                            - This role is not present if the current results are the last apge Note this api returns up to the first 100 results only
                            - when present it is always a array with just one element
            - previousPage: Metadata describing the query to use for the previous page of results
                            - not present if the current results are the first page
                            - when present, it is always a array with just one element

Search Engine metadata
the context property has metadata describing the search engine that performed the search query. it includes the name of the search engine, and any facet objects it provides for refining a search

Search results
The item array contains the actual search results The search results include the URL title and text snippets that describe the result.
in addition they can contain rich snippet information if applicable.

if the search results include a promotions property it contains a set of promotions


REST from JS
You can invoke the JSON/Atom Custom Search API using REST from JavaScript, using the callback query parameter and a callback function.
This allows you to write rich applications that display Custom Search data without writing any server side code.









DuckDuckGo
DuckDuckGo only has Access to instant Answers via Instant Answer API https://duckduckgo.com/api
Does not include all DDG links.
Not a full search results API, no Search Results beyond Instant Answers
Instant answers come from a variety of sources, including Wikipedia, Wikia, CrunchBase, GitHub, WikiHow, The Free Dictionary – over 100 in total.


using node-ddg from jawerty https://github.com/jawerty/node-ddg
1. install npm ddg --s
2.



BING

Need Cognitiv eService API Account with Bing Search APIs
Create:
https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-apis-create-account
Need:
Azure Subscription // Check if services Cost

Create a Cognitive Services API account (API for Metasearch)
AI Cognitive Service + Bing Search API
https://docs.microsoft.com/en-us/azure/cognitive-services/cognitive-services-apis-create-account

INSTALL node-bing-api
node module
https://www.npmjs.com/package/node-bing-api
