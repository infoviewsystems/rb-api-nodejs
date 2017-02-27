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
 * Post a list of Product Prices/
 */
var productPricesList = JSON.stringify([
                                        {
                                            "distributorCode": "339825",
                                            "productCode": "P1",
                                            "priceGroupCode": "PG1",
                                            "uomCode": "EA",
                                            "costPrice": 125.7525,
                                            "factorType": "P",
                                            "factorValue": 500.9504,
                                            "startDate": "2017-01-01",
                                            "endDate": "2017-12-31",
                                            "uomListPrice": 25.2525
                                          },
                                          {
                                            "distributorCode": "339825",
                                            "productCode": "P2",
                                            "priceGroupCode": "PG1",
                                            "uomCode": "EA",
                                            "costPrice": 125.7525,
                                            "factorType": "P",
                                            "factorValue": 500.9504,
                                            "startDate": "2017-01-01",
                                            "endDate": "2017-12-31",
                                            "uomListPrice": 25.2525
                                          }
                                        ]);

RbDms.post('productPrices', productPricesList, oauthParams, qryParams);

