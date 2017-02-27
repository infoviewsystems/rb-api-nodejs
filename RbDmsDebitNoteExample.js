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
 * Post a list of DebitNotes/
 */
var debitNotesList = JSON.stringify([
                                     {
                                         "debitNoteNo": "SODKH68000005",
                                         "debitNoteKey": "SODKHDKH68201609131042265",
                                         "distributorCode": "DKSH",
                                         "distributorName": "DKSH",
                                         "customerCode": "CT0000000001",
                                         "customerName": "K.S. Pharmacy",
                                         "salesmanCode": "B68",
                                         "salesmanName": "JOHN",
                                         "status": "I",
                                         "debitNoteDate": "2016-09-13",
                                         "dueDate": "2016-09-13",
                                         "reasonCode": "TEST reason",
                                         "reasonDescription": "TEST RSN DESC",
                                         "termCode": "TEST term CD",
                                         "termDescription": "TEST term DESC",
                                         "handHeldReturnNo": "234",
                                         "grossTotal": 789.1324,
                                         "customerDiscountPercentage": 789.324,
                                         "customerDiscountAmount": 789.1324,
                                         "netTotal": 789.1324,
                                         "taxTotal": 789.1324,
                                         "netTotalTaxIncluded": 789.1324,
                                         "adjustedAmount": 789.1324,
                                         "remark": "TEST remark",
                                         "createdDate": "2016-09-13T10:45:52Z",
                                         "createdBy": "CT68",
                                       "lineItems": [
                                         {
                                           "productIndex": 40,
                                           "productCode": "8021405",
                                           "productDescription": "GAVIS",
                                           "uomCode": "EA",
                                           "sellingType": "S",
                                           "reasonCodeDetail": "TEST reason",
                                           "reasonDescriptionDetail": "TEST RSN DESC",
                                           "defaultUomCode": "EA",
                                           "productQuantity": 5.456,
                                           "mrp": 4.1234,
                                           "productListPrice": 100.1234,
                                           "uomListPrice": 200.1234,
                                           "grossAmount": 789.1365,
                                           "netAmount": 789.1326,
                                           "customerDiscount": 789.1354,
                                           "taxAmount": 84.5673,
                                           "netAmountTaxIncluded": 789.1326,
                                           "taxCode": "2",
                                           "taxPercentage1": 789.12,
                                           "taxPercentage2": 789.34,
                                           "taxPercentage3": 789.24,
                                           "taxAmount1": 15.4353,
                                           "taxAmount2": 62.3463,
                                           "taxAmount3": 37.3454
                                         },
                                         {
                                           "productIndex": 41,
                                           "productCode": "8021406",
                                           "productDescription": "GAVIS",
                                           "uomCode": "EA",
                                           "sellingType": "S",
                                           "reasonCodeDetail": "TEST reason",
                                           "reasonDescriptionDetail": "TEST RSN DESC",
                                           "defaultUomCode": "EA",
                                           "productQuantity": 5.456,
                                           "mrp": 4.1234,
                                           "productListPrice": 100.1234,
                                           "uomListPrice": 200.1234,
                                           "grossAmount": 789.1365,
                                           "netAmount": 789.1326,
                                           "customerDiscount": 789.1354,
                                           "taxAmount": 84.5673,
                                           "netAmountTaxIncluded": 789.1326,
                                           "taxCode": "2",
                                           "taxPercentage1": 789.12,
                                           "taxPercentage2": 789.34,
                                           "taxPercentage3": 789.24,
                                           "taxAmount1": 15.4353,
                                           "taxAmount2": 62.3463,
                                           "taxAmount3": 37.3454
                                         }
                                       ]
                                     },
                                     {
                                         "debitNoteNo": "SODKH68000006",
                                         "debitNoteKey": "SODKHDKH68201609131042266",
                                         "distributorCode": "DKSH",
                                         "distributorName": "DKSH",
                                         "customerCode": "CT0000000001",
                                         "customerName": "K.S. Pharmacy",
                                         "salesmanCode": "B68",
                                         "salesmanName": "JOHN",
                                         "status": "I",
                                         "debitNoteDate": "2016-09-13",
                                         "dueDate": "2016-09-13",
                                         "reasonCode": "TEST reason",
                                         "reasonDescription": "TEST RSN DESC",
                                         "termCode": "TEST term CD",
                                         "termDescription": "TEST term DESC",
                                         "handHeldReturnNo": "234",
                                         "grossTotal": 789.1324,
                                         "customerDiscountPercentage": 789.324,
                                         "customerDiscountAmount": 789.1324,
                                         "netTotal": 789.1324,
                                         "taxTotal": 789.1324,
                                         "netTotalTaxIncluded": 789.1324,
                                         "adjustedAmount": 789.1324,
                                         "remark": "TEST remark",
                                         "createdDate": "2016-09-13T10:45:52Z",
                                         "createdBy": "CT68",
                                       "lineItems": [ 
                                         {
                                           "productIndex": 42,
                                           "productCode": "8021407",
                                           "productDescription": "P1DESC",
                                           "uomCode": "EA",
                                           "sellingType": "S",
                                           "reasonCodeDetail": "TEST reason",
                                           "reasonDescriptionDetail": "TEST RSN DESC",
                                           "defaultUomCode": "EA",
                                           "productQuantity": 5.456,
                                           "mrp": 4.1234,
                                           "productListPrice": 100.1234,
                                           "uomListPrice": 200.1234,
                                           "grossAmount": 789.1365,
                                           "netAmount": 789.1326,
                                           "customerDiscount": 789.1354,
                                           "taxAmount": 84.5673,
                                           "netAmountTaxIncluded": 789.1326,
                                           "taxCode": "2",
                                           "taxPercentage1": 789.12,
                                           "taxPercentage2": 789.34,
                                           "taxPercentage3": 789.24,
                                           "taxAmount1": 15.4353,
                                           "taxAmount2": 62.3463,
                                           "taxAmount3": 37.3454
                                         },
                                         {
                                           "productIndex": 43,
                                           "productCode": "8021408",
                                           "productDescription": "GAVIS",
                                           "uomCode": "EA",
                                           "sellingType": "S",
                                           "reasonCodeDetail": "TEST reason",
                                           "reasonDescriptionDetail": "TEST RSN DESC",
                                           "defaultUomCode": "EA",
                                           "productQuantity": 5.456,
                                           "mrp": 4.1234,
                                           "productListPrice": 100.1234,
                                           "uomListPrice": 200.1234,
                                           "grossAmount": 789.1365,
                                           "netAmount": 789.1326,
                                           "customerDiscount": 789.1354,
                                           "taxAmount": 84.5673,
                                           "netAmountTaxIncluded": 789.1326,
                                           "taxCode": "2",
                                           "taxPercentage1": 789.12,
                                           "taxPercentage2": 789.34,
                                           "taxPercentage3": 789.24,
                                           "taxAmount1": 15.4353,
                                           "taxAmount2": 62.3463,
                                           "taxAmount3": 37.3454
                                         }
                                       ]
                                     }
                                   ]);

RbDms.post('debitNotes', debitNotesList, oauthParams, qryParams);


