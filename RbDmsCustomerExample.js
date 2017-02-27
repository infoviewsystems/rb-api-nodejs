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
 * Get a list of Customers/
 */
RbDms.get('customers', oauthParams, qryParams);

/**
 * Post a list of Customers/
 */
var customersList = JSON.stringify([
                                    {
                                        "distributorCode": "35100121",
                                        "customerCode": "CT0000000060",
                                        "customerName": "GCH RETAIL (M) SDN BHD",
                                        "customerName2": "",
                                        "customerReferenceNo": "F23G0008",
                                        "customerBarCode": "F23G0008",
                                        "openAccountDate": "2016-09-09",
                                        "registrationNo": "",
                                        "type": "Q",
                                        "communication": 0,
                                        "relationship": 0,
                                        "priceGroup": "1",
                                        "groupDiscount": "",
                                        "mrpBillingMethod": "",
                                        "subDistributor": 0,
                                        "geography": "MY",
                                        "distributorChannel": "MY",
                                        "outletTypeCode": "SMT",
                                        "keyAccountGroup": "",
                                        "keyAccountRegionalGroup": "",
                                        "soldToAddress1": "BANDAR BARU KENINGAU",
                                        "soldToAddress2": "JALAN APIN-APIN",
                                        "soldToCity": "KENINGAU SABAH",
                                        "soldToState": "",
                                        "soldToAddress5": "",
                                        "postalCode": "89008",
                                        "billToCode": "CT0000000060",
                                        "contactPerson": "RICHARD VILUS",
                                        "telephoneNumber": "198081945",
                                        "extension": "",
                                        "additionalTelephoneNumber": "",
                                        "mobileNumber": "",
                                        "faxNumber": "",
                                        "emailAddress": "",
                                        "terms": "60",
                                        "creditLimit": 30000.0075,
                                        "customerDiscount": 4.99,
                                        "taxExemption": 1,
                                        "exemptionNo": "",
                                        "taxRegistrationNo": "GST 001952423936",
                                        "municipalRegistrationNo": "",
                                        "specialInstructions": "",
                                        "bank": "",
                                        "bankBranch": "",
                                        "bankAccountNo": "",
                                        "openingBalance": 100.0075,
                                        "asOfDate": "2017-09-09",
                                        "dkaCustomer": 0,
                                        "seasonalCustomer": 0,
                                        "seasonStartDate": "0101",
                                        "seasonEndDate": "1231",
                                        "longitude": "",
                                        "latitude": "",
                                        "userDefinedField1": "",
                                        "userDefinedField2": "",
                                        "userDefinedField3": "",
                                        "userDefinedField4": "",
                                        "userDefinedField5": "",
                                        "hqUserDefinedField1": "",
                                        "hqUserDefinedField2": "",
                                        "hqUserDefinedField3": "",
                                        "hqUserDefinedField4": "",
                                        "hqUserDefinedField5": "",
                                        "visionStore": 0,
                                        "shelfReplenishment": 0,
                                        "digitalFacing": 0,
                                        "numberOfSKUsListed": 0
                                      },
                                      {
                                        "distributorCode": "35100121",
                                        "customerCode": "CT0000000078",
                                        "customerName": "HOCK TAI",
                                        "customerName2": "",
                                        "customerReferenceNo": "E22H0099",
                                        "customerBarCode": "E22H0099",
                                        "openAccountDate": "2016-09-09",
                                        "registrationNo": "",
                                        "type": "Q",
                                        "communication": 0,
                                        "relationship": 0,
                                        "priceGroup": "1",
                                        "groupDiscount": "",
                                        "mrpBillingMethod": "",
                                        "subDistributor": 0,
                                        "geography": "MY",
                                        "distributorChannel": "MY",
                                        "outletTypeCode": "SPV",
                                        "keyAccountGroup": "",
                                        "keyAccountRegionalGroup": "",
                                        "soldToAddress1": "BATU 17 JALAN KEMABONG",
                                        "soldToAddress2": "PETI SURAT 193",
                                        "soldToCity": "89008 TENOM",
                                        "soldToState": "",
                                        "soldToAddress5": "087-737278",
                                        "postalCode": "89008",
                                        "billToCode": "CT0000000078",
                                        "contactPerson": "CHONG YICK CHO",
                                        "telephoneNumber": "87737278",
                                        "extension": "",
                                        "additionalTelephoneNumber": "",
                                        "mobileNumber": "",
                                        "faxNumber": "",
                                        "emailAddress": "",
                                        "terms": "60",
                                        "creditLimit": 5000.9992,
                                        "customerDiscount": 5.75,
                                        "taxExemption": 1,
                                        "exemptionNo": "",
                                        "taxRegistrationNo": "-",
                                        "municipalRegistrationNo": "",
                                        "specialInstructions": "",
                                        "bank": "",
                                        "bankBranch": "",
                                        "bankAccountNo": "",
                                        "openingBalance": 105.7501,
                                        "asOfDate": "2017-01-01",
                                        "dkaCustomer": 0,
                                        "seasonalCustomer": 0,
                                        "seasonStartDate": "",
                                        "seasonEndDate": "",
                                        "longitude": "",
                                        "latitude": "",
                                        "userDefinedField1": "",
                                        "userDefinedField2": "",
                                        "userDefinedField3": "",
                                        "userDefinedField4": "",
                                        "userDefinedField5": "",
                                        "hqUserDefinedField1": "",
                                        "hqUserDefinedField2": "",
                                        "hqUserDefinedField3": "",
                                        "hqUserDefinedField4": "",
                                        "hqUserDefinedField5": "",
                                        "visionStore": 0,
                                        "shelfReplenishment": 0,
                                        "digitalFacing": 0,
                                        "numberOfSKUsListed": 0
                                      }
                                    ]);

RbDms.post('customers', customersList, oauthParams, qryParams);

/**
 * Get a list of Customer Contacts/
 */
RbDms.get('customerContacts', oauthParams, qryParams);

/**
 * Post a list of customerContacts/
 */
var customerContactsList = JSON.stringify([
                                           {
                                        	    "distributorCode": "35100121",
                                        	    "contactCode": "00",
                                        	    "customerCode": "KGUE22B0091",
                                        	    "contactType": "C",
                                        	    "contactPerson": "ARIMA",
                                        	    "position": "",
                                        	    "telephoneNumber": "014-6557435",
                                        	    "extension": "",
                                        	    "additionalTelephoneNumber": "",
                                        	    "mobileNumber": "013-8601518",
                                        	    "faxNumber": "",
                                        	    "emailAddress": ""
                                        	  },
                                        	  {
                                        	    "distributorCode": "35100121",
                                        	    "contactCode": "00",
                                        	    "customerCode": "KGUE22F0200",
                                        	    "contactType": "C",
                                        	    "contactPerson": "WYELLINEE MARBIN",
                                        	    "position": "",
                                        	    "telephoneNumber": "013-3698385",
                                        	    "extension": "",
                                        	    "additionalTelephoneNumber": "",
                                        	    "mobileNumber": "013-8601518",
                                        	    "faxNumber": "",
                                        	    "emailAddress": ""
                                        	  }
                                        	]);

RbDms.post('customerContacts', customerContactsList, oauthParams, qryParams);

/**
 * Get a list of Customer ShipTo Addresses/
 */
RbDms.get('customerShipToAddresses', oauthParams, qryParams);

/**
 * Post a list of customerShipToAddresses/
 */
var customerShipToAddressesList = JSON.stringify([
                                                  {
                                                	    "distributorCode": "35100121",
                                                	    "shipToCode": "03",
                                                	    "addressType": "C",
                                                	    "customerCode": "CT0000000060",
                                                	    "description": "GCH RETAIL (M) SDN BHD",
                                                	    "address1": "BANDAR BARU KENINGAU",
                                                	    "address2": "JALAN APIN-APIN",
                                                	    "city": "KENINGAU SABAH",
                                                	    "state": "",
                                                	    "address5": "",
                                                	    "postalCode": "89008",
                                                	    "contactPerson": "CHUNG SIEW CHIN",
                                                	    "contactNo": "016-8330131",
                                                	    "defaultIndicator": 1
                                                	  },
                                                	  {
                                                	    "distributorCode": "35100121",
                                                	    "shipToCode": "04",
                                                	    "addressType": "C",
                                                	    "customerCode": "CT0000000078",
                                                	    "description": "HOCK TAI",
                                                	    "address1": "LOT 11",
                                                	    "address2": "JLN HAJJAH KUSNAH",
                                                	    "city": "P. O. BOX 295 TENOM",
                                                	    "state": "",
                                                	    "address5": "",
                                                	    "postalCode": "89008",
                                                	    "contactPerson": "WYELLINEE MARBIN",
                                                	    "contactNo": "013-3698385",
                                                	    "defaultIndicator": 1
                                                	  }
                                                	]);

RbDms.post('customerShipToAddresses', customerShipToAddressesList, oauthParams, qryParams);

