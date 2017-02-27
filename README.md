# DMS API Node.js Wrapper
A Node.js wrapper for RbDms REST API. The library uses OAuth2.0 authentication over HTTP protocol and interacts with the DMS rest API.

## Setup for new DMS REST API integration:
Setup for new DMS REST API integration:

```js
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
```

## Method GET
Provide Endpoint, Client Id, Client Secret, country code and Distributor code as parameters

```js
    /**
     * Get a list of Inventory Items/
     */
    RbDms.get('inventoryItems', oauthParams, qryParams);
```

## Method POST
Provide Endpoint, Client Id, Client Secret, country code and Distributor code and data as parameters

```js
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
```    

## Endpoints

The following are the endpoints available:
* orders
* invoices
* inventoryItems
* creditNotes
* debitNotes
* orderStatuses
* customers
* customerContacts
* customerShipToAddresses
* returns
* productPrices
* companyInvoices
