/**
 * http://usejsdoc.org/
 */
var http = require('http');

var endpoint = '';
var oauthParams = '';
var qryParams = '';
var itemsList = [];
var tokenRslt = '';

/**
 * Set Default Values/
 */
var opts = {
		apiUrl: ''
		};

var oauthOptions = {
		host: '',
		port: 80,
		path: '/token?grant_type=CLIENT_CREDENTIALS',
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		  }
};

module.exports = RbDmsAPI;

/**
 * RbDms API wrapper/
 */
function RbDmsAPI(opts) {
	
	if(! (this instanceof RbDmsAPI)){
		return new RbDmsAPI(opts.apiUrl);
	}
	
	if (!(opts.apiUrl)){
		throw new Error('url is required');
	}

	this.apiUrl = opts.apiUrl;
}

/**
 * Get Request/
 */
function getJSON(options, cb){
	
	http.request(options, function (res) {
		var body = '';
		res.setEncoding('utf8');
		res.on('data', function(chunk){
			body += chunk;
		});
		res.on('end', function(){
			var result = JSON.parse(body);
			cb(null, result);
		});
		res.on('error', cb);
	})
	.on('error', cb)
	.end();
}

/**
 * Get Request/
 * Parameters: Endpoint
 * 			   Oauth2 url, client_id and client_secret
 *             Api Query parameter - countryCode and dbName
 */
RbDmsAPI.prototype.get = function get(endpoint, oauthParams, qryParams) {

	var optionsGet = {
			host: this.apiUrl,
			port: 80,
			path: '/npapi/' + endpoint + '?countryCode=' + qryParams.countryCode + '&dbName=' + qryParams.dbName,
			method: 'GET',
			headers: {
				'Authorization': ''
			  }
		};
	
	oauthOptions.host = oauthParams.host;
	oauthOptions.path = oauthOptions.path + '&client_id=' + oauthParams.clientId + '&client_secret=' + oauthParams.clientSecret; 
	
	/**
	 * Get OAuth2 Token/
	 * Parameters: Oauth2 url, client_id and client_secret
	 */
	var reqToken = http.request(oauthOptions, function (res) {
		
		res.on('data', function (data) {
			
			tokenRslt = JSON.parse(data);
			
			if (res.statusCode === 200 || res.statusCode === 201){
				this.accessToken = tokenRslt.access_token;
				
			optionsGet.headers.Authorization = 'Bearer ' + tokenRslt.access_token;
			
			getJSON(optionsGet, function(err, result){
				console.log('\nGET Result\n');
				
				if(err){
					console.log('Error while retrieving Data', err);
				}
				
				/**
				 * Parse the Json result/
				 */
				else{
				var keysArray = Object.keys(result);
			    
				for (var i = 0; i < keysArray.length; i++){
			    	var key = keysArray[i];
			    	var value = result[key];
			    	
			    	console.log(value);
			    	}
			    }
			});
			}else{
				console.log('Error in retrieving Access Token\n');
				console.log(tokenRslt);
			}
		});
	
	});
	reqToken.end();
	reqToken.on('error', function (e) {
		console.log('error retrieving Authorization Code');
		console.error(e);
	});
	
};

/**
 * Post Request/
 * Parameters: Endpoint
 *             Data
 * 			   Oauth2 url, client_id and client_secret
 *             Api Query parameter - countryCode and dbName
 */
RbDmsAPI.prototype.post = function post(endpoint, itemsList, oauthParams, qryParams){
	var optionsPost = {
			host: this.apiUrl,
			port: 80,
			path: '/npapi/' + endpoint + '?countryCode=' + qryParams.countryCode + '&dbName=' + qryParams.dbName,
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Content-Length': itemsList.length,
				'Authorization': ''
			}
		};
	
	oauthOptions.host = oauthParams.host;
	oauthOptions.path = oauthOptions.path + '&client_id=' + oauthParams.clientId + '&client_secret=' + oauthParams.clientSecret; 
	
	/**
	 * Get OAuth2 Token/
	 * Parameters: Oauth2 url, client_id and client_secret
	 */
	var reqToken = http.request(oauthOptions, function (res) {
		
		res.on('data', function (data) {
			
			tokenRslt = JSON.parse(data);
			if (res.statusCode === 200 || res.statusCode === 201){
				this.accessToken = tokenRslt.access_token;
				optionsPost.headers.Authorization = 'Bearer ' + tokenRslt.access_token;
			
			var reqPost = http.request(optionsPost, function (res) {
				console.log('\nPOST Result:\n');
				console.log('response statusCode: ', res.statusCode , '\n');
				res.on('data', function (data) {
					process.stdout.write(data);
					console.log('\n\nPOST Operation Completed');
				});
			});

			reqPost.write(itemsList);
			reqPost.end();
			reqPost.on('error', function (e) {
				console.error(e);
			});
		  }else{
				console.log('Error in retrieving Access Token\n');
				console.log(tokenRslt);
			}
		});
	});
	reqToken.end();
	reqToken.on('error', function (e) {
		console.error(e);
	});
	
};
