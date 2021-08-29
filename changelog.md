# Changelog

**./index.js**
* Rewrote header comments for request functions.
	* Uses format: "[description] - [method]"
	* Example: "Read existing object - GET"
	* 'sendPutRequest' already uses this format.
* Revised 'checkComplete' header comment.
	* Before: "[...] both requests are complete."
	* After: "[...] all requests have been completed."
* Rewrote 'defineRequestBody' header comment.
	* Before: "POST request body."
	* After: "POST and PUT request body."