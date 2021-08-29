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


// GET existing object.
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


// POST new object.
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


// Ends demo after both requests are complete.
function checkComplete()
{
	if (getComp === true && postComp === true && putComp === true)
	{
		console.log("Complete");
		process.exitCode = 1;
	}
}


// Request error message.
function writeErrorMessage(httpMethod, errObj)
{
	var writeRes = "";
	
	writeRes += "Error sending ";
	writeRes += httpMethod;
	writeRes += " request.\n";
	writeRes += errObj.message;
	
	console.log(writeRes);
}


// Response status message.
function writeResponseMessage(httpMethod, respObj)
{
	var writeRes = "";
	
	writeRes += httpMethod;
	writeRes += " status ";
	writeRes += respObj.statusCode;
	writeRes += " - ";
	writeRes += respObj.statusMessage;
	
	console.log(writeRes);
}


// POST request body.
function defineRequestBody()
{
	var defineRes = {};
	
	defineRes.title = "Hello World";
	defineRes.body = "The quick Brown Fox jumps over the lazy Dog";
	defineRes.userId = 1;
	
	return defineRes;
}