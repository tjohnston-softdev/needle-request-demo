const needle = require("needle");
var getComplete = false;
var postComplete = false;

console.log("Running Demo . . .");
sendGetRequest();
sendPostRequest();


// GET existing object.
function sendGetRequest()
{
	console.log("Sending GET request");
	
	needle.get("https://jsonplaceholder.typicode.com/posts/1", function (needleErr, needleResp)
	{
		if (needleErr !== null)
		{
			writeErrorMessage("GET", needleErr);
		}
		else
		{
			writeResponseMessage("GET", needleResp);
		}
		
		getComplete = true;
		checkComplete();
	});
}


// POST new object.
function sendPostRequest()
{
	var reqBody = definePostBody();
	
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
		
		postComplete = true;
		checkComplete();
	});
}


// Ends demo after both requests are complete.
function checkComplete()
{
	if (getComplete === true && postComplete === true)
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
function definePostBody()
{
	var defineRes = {};
	
	defineRes.title = "Hello World";
	defineRes.body = "The quick Brown Fox jumps over the lazy Dog";
	defineRes.userId = 1;
	
	return defineRes;
}