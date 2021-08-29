# Changelog

**./index.js**
* The URL from 'sendGetRequest' is now a global variable 'resourceURL' (Also PUT, DELETE)
* Moved 'modifyURL' back into 'sendPostRequest' as a literal string. (POST only)
* Renamed 'definePostBody' function to 'defineRequestBody'