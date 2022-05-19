const needle = require("needle");
const resourceURL = "https://jsonplaceholder.typicode.com/posts/1"

var getComp = false;
var postComp = false;
var putComp = false;
var delComp = false;

console.log("Running Demo . . .");

sendGetRequest();
sendPostRequest();
sendPutRequest();
sendDeleteRequest();


// Read existing object - GET
function sendGetRequest()
{
	console.log("Sending GET request");
	
	needle.get(resourceURL, function (needleErr, needleResp)
	{
		if (needleErr !== null)
		{
			writeErrorMessage("GET", needleErr);
		}
		else
		{
			writeResponseMessage("GET", needleResp);
		}
		
		getComp = true;
		checkComplete();
	});
}


// Create new object - POST
function sendPostRequest()
{
	var reqBody = defineRequestBody();
	
	console.log("Sending POST request");
	
	needle.post("https://jsonplaceholder.typicode.com/posts", reqBody, function (needleErr, needleResp)
	{
		if (needleErr !== null)
		{
			writeErrorMessage("POST", needleErr);
		}
		else
		{
			writeResponseMessage("POST", needleResp);
		}
		
		postComp = true;
		checkComplete();
	});
}


// Modify existing object - PUT
function sendPutRequest()
{
	var reqBody = defineRequestBody();
	
	console.log("Sending PUT request");
	
	needle.put(resourceURL, reqBody, function (needleErr, needleResp)
	{
		if (needleErr !== null)
		{
			writeErrorMessage("PUT", needleErr);
		}
		else
		{
			writeResponseMessage("PUT", needleResp);
		}
		
		putComp = true;
		checkComplete();
	});
}

// Remove existing object - DELETE
function sendDeleteRequest()
{
	console.log("Sending DELETE request");
	
	needle.delete(resourceURL, null, function (needleErr, needleResp)
	{
		if (needleErr !== null)
		{
			writeErrorMessage("DELETE", needleErr);
		}
		else
		{
			writeResponseMessage("DELETE", needleResp);
		}
		
		delComp = true;
		checkComplete();
	});
}


// Ends demo after all requests have been completed.
function checkComplete()
{
	if (getComp && postComp && putComp && delComp)
	{
		console.log("Complete");
		process.exitCode = 1;
	}
}


// Request error message.
function writeErrorMessage(httpMethod, errObj)
{
	var prepTxt = ["Error sending ", httpMethod, " request.\n", errObj.message].join("");
	console.log(prepTxt);
}


// Response status message.
function writeResponseMessage(httpMethod, respObj)
{
	var prepTxt = [httpMethod, " status ", respObj.statusCode, " - ", respObj.statusMessage].join("");
	console.log(prepTxt);
}


// POST and PUT request body.
function defineRequestBody()
{
	var defineRes = {};
	
	defineRes.title = "Hello World";
	defineRes.body = "The quick Brown Fox jumps over the lazy Dog";
	defineRes.userId = 1;
	
	return defineRes;
}