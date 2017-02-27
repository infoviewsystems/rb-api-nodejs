/**
 * http://usejsdoc.org/
 */
var RbDmsAPI = require('./index.js');

var opts = {
		apiUrl: 'rbdms-uat.cloudhub.io'
		};

var oauthParams = {
		host: 'rboauth2.cloudhub.io',
		port: 80,
		clientId: '89412b6a67084fee872636e487e66970',
		clientSecret: 'a547facd634f454096D9ED83CB5FA9E4'
		};

var qryParams = {
		countryCode: 'EA',
		dbName: 'TEST'
		};
	
var RbDms = new RbDmsAPI(opts);

/**
 * Get a list of Inventory Items/
 */
RbDms.get('inventoryItems', oauthParams, qryParams);

/**
 * Post a list of Inventory Items/
 */
var inventoryList = JSON.stringify([{
	"distribtorCode": "339830",
    "distribtorName": "DKSH",
    "warehouseCode": "OTC_WHS",
    "warehouseName": "OTC_WHS",
    "productCode": "0134795",
    "productDescription": "Strepsils",
    "status": "A",
    "stockBalance": 12950,
    "allocateStock": 10,
    "availableStock": 12940,
    "costPrice": 25880.1234
  }]);

RbDms.post('inventoryItems', inventoryList, oauthParams, qryParams);


