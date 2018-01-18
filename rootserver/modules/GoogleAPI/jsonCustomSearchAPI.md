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
