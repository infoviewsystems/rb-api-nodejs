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
 * Get a list of Orders/
 */
RbDms.get('orders', oauthParams, qryParams);

/**
 * Post a list of orders/
 */
var ordersList = JSON.stringify([
                                 {
                                     "orderNo": "SODKH68000005",
                                     "orderKey": "SODKHDKH68201609131042265",
                                     "distributorCode": "339825",
                                     "distributorName": "DKSH",
                                     "customerCode": "CT0000000001",
                                     "customerName": "K.S. Pharmacy",
                                     "customerReferenceNo": "CT500",
                                     "customerType": "Q",
                                     "customerTaxRegNo": "DKH68",
                                     "salesmanCode": "B68",
                                     "salesmanName": "JOHN",
                                     "purchaseOrderNo": "7657656",
                                     "warehouseCode": "WH_DKSH",
                                     "warehouseName": "WH_DKSH",
                                     "orderDate": "2016-09-13",
                                     "createdDateTime": "2016-09-13T10:45:52Z",
                                     "deliveryDate": "2016-09-13",
                                     "shipToCode": "AB5787",
                                     "billToCode": "CT0000000001",
                                     "grossTotal": 789.1324,
                                     "netTotal": 789.1324,
                                     "netTotalTax": 789.1324,
                                     "adjustedAmount": 789.1324,
                                     "taxableAmount": 789.1324,
                                     "nonTaxableAmount": 789.1324,
                                     "taxPercentage1": 789.132,
                                     "taxPercentage2": 789.134,
                                     "taxPercentage3": 789.124,
                                     "taxTotal1": 789.1324,
                                     "taxTotal2": 789.1324,
                                     "taxTotal3": 789.1324,
                                     "taxTotal": 789.1324,
                                     "customerDiscountPercentage": 789.324,
                                     "customerDiscountAmount": 789.1324,
                                     "productDiscountTotal": 789.1324,
                                     "claimDiscount": 789.1324,
                                     "promoDiscount": 789.1324,
                                     "salesDiscount": 789.1324,
                                     "cashDiscount": 789.1324,
                                     "customerGroupDiscount": 789.1324,
                                     "remark": "TEST REMARK",
                                     "reasonCode": "TEST REASON",
                                     "reasonDescription": "TEST RSN DESC",
                                     "status": "P",
                                     "createdBy": "DKH68",
                                     "visitKey": "VSDKHDKH68201609131042254",
                                     "lineItems": [{
                               	      "productIndex": 25,
                               	      "productCode": "8021405",
                               	      "productDescription": "prd5",
                               	      "uomCode": "EA",
                               	      "productSalesType": "S",
                               	      "defaultUomCode": "EA",
                               	      "taxableIndicator": 1,
                               	      "productQuantity": 5.456,
                               	      "mrp": 4.1234,
                               	      "costPrice": 5.1234,
                               	      "productListPrice": 100.1234,
                               	      "uomListPrice": 200.1234,
                               	      "grossAmount": 789.1365,
                               	      "productDiscount": 789.1365,
                               	      "promoDiscountDetail": 789.1348,
                               	      "salesDiscountDetail": 789.1348,
                               	      "customerGroupDiscountDetail": 789.1399,
                               	      "cashDiscountPercentage": 789.1326,
                               	      "cashDiscountDetail": 789.1326,
                               	      "netAmount": 789.1326,
                               	      "netAmountTax": 789.1326,
                               	      "customerDiscount": 789.1354,
                               	      "taxPercentage1Detail": 789.35,
                               	      "taxPercentage2Detail": 789.12,
                               	      "taxPercentage3Detail": 789.34,
                               	      "taxAmount1": 15.4353,
                               	      "taxAmount2": 62.3463,
                               	      "taxAmount3": 37.3454,
                               	      "totalTaxAmount": 84.5673,
                               	      "taxCode": "2",
                               	      "remarkDetail": "TEST REMARK",
                                       "promo": {
                               		      "promotionCode": "DISTDKH01",
                               		      "promotionIndex": 15,
                               		      "promotionSequence": 2335,
                               		      "mechanicType": "3",
                               		      "discountPercentage": 5.343,
                               		      "discountAmount": 10.4578,
                               		      "discountSpentAmount": 2.4563,
                               		      "productBuy": 5.565,
                               		      "totalBuy": 8.464,
                               		      "totalDiscountAmount": 11.4567,
                               		      "correspondingProductIndex": 5
                               		   }
                                   	},
                                   	{
                               	      "productIndex": 30,
                               	      "productCode": "8021408",
                               	      "productDescription": "PRD8",
                               	      "uomCode": "EA",
                               	      "productSalesType": "S",
                               	      "defaultUomCode": "EA",
                               	      "taxableIndicator": 1,
                               	      "productQuantity": 5.456,
                               	      "mrp": 4.1234,
                               	      "costPrice": 5.1234,
                               	      "productListPrice": 100.1234,
                               	      "uomListPrice": 200.1234,
                               	      "grossAmount": 789.1365,
                               	      "productDiscount": 789.1365,
                               	      "promoDiscountDetail": 789.1348,
                               	      "salesDiscountDetail": 789.1348,
                               	      "customerGroupDiscountDetail": 789.1399,
                               	      "cashDiscountPercentage": 789.1326,
                               	      "cashDiscountDetail": 789.1326,
                               	      "netAmount": 789.1326,
                               	      "netAmountTax": 789.1326,
                               	      "customerDiscount": 789.1354,
                               	      "taxPercentage1Detail": 789.35,
                               	      "taxPercentage2Detail": 789.12,
                               	      "taxPercentage3Detail": 789.34,
                               	      "taxAmount1": 15.4353,
                               	      "taxAmount2": 62.3463,
                               	      "taxAmount3": 37.3454,
                               	      "totalTaxAmount": 84.5673,
                               	      "taxCode": "2",
                               	      "remarkDetail": "TEST REMARK",
                               	      "promo": {
                               		      "promotionCode": "DISTDKH02",
                               		      "promotionIndex": 16,
                               		      "promotionSequence": 2335,
                               		      "mechanicType": "3",
                               		      "discountPercentage": 5.343,
                               		      "discountAmount": 10.4578,
                               		      "discountSpentAmount": 2.4563,
                               		      "productBuy": 5.565,
                               		      "totalBuy": 8.464,
                               		      "totalDiscountAmount": 11.4567,
                               		      "correspondingProductIndex": 5
                               	      }
                               	    }]
                                 },
                                 {
                                     "orderNo": "SODKH68000006",
                                     "orderKey": "SODKHDKH68201609131042266",
                                     "distributorCode": "339825",
                                     "distributorName": "DKSH",
                                     "customerCode": "CT0000000001",
                                     "customerName": "K.S. Pharmacy",
                                     "customerReferenceNo": "CT500",
                                     "customerType": "Q",
                                     "customerTaxRegNo": "DKH68",
                                     "salesmanCode": "B68",
                                     "salesmanName": "JOHN",
                                     "purchaseOrderNo": "7657656",
                                     "warehouseCode": "WH_DKSH",
                                     "warehouseName": "WH_DKSH",
                                     "orderDate": "2016-09-13",
                                     "createdDateTime": "2016-09-13T10:45:52Z",
                                     "deliveryDate": "2016-09-13",
                                     "shipToCode": "AB5787",
                                     "billToCode": "CT0000000001",
                                     "grossTotal": 789.1324,
                                     "netTotal": 789.1324,
                                     "netTotalTax": 789.1324,
                                     "adjustedAmount": 789.1324,
                                     "taxableAmount": 789.1324,
                                     "nonTaxableAmount": 789.1324,
                                     "taxPercentage1": 789.132,
                                     "taxPercentage2": 789.134,
                                     "taxPercentage3": 789.124,
                                     "taxTotal1": 789.1324,
                                     "taxTotal2": 789.1324,
                                     "taxTotal3": 789.1324,
                                     "taxTotal": 789.1324,
                                     "customerDiscountPercentage": 789.324,
                                     "customerDiscountAmount": 789.1324,
                                     "productDiscountTotal": 789.1324,
                                     "claimDiscount": 789.1324,
                                     "promoDiscount": 789.1324,
                                     "salesDiscount": 789.1324,
                                     "cashDiscount": 789.1324,
                                     "customerGroupDiscount": 789.1324,
                                     "remark": "TEST REMARK",
                                     "reasonCode": "TEST REASON",
                                     "reasonDescription": "TEST RSN DESC",
                                     "status": "P",
                                     "createdBy": "DKH68",
                                     "visitKey": "VSDKHDKH68201609131042254",
                                     "lineItems": [{
                               	      "productIndex": 31,
                               	      "productCode": "8021405",
                               	      "productDescription": "prd5",
                               	      "uomCode": "EA",
                               	      "productSalesType": "S",
                               	      "defaultUomCode": "EA",
                               	      "taxableIndicator": 1,
                               	      "productQuantity": 5.456,
                               	      "mrp": 4.1234,
                               	      "costPrice": 5.1234,
                               	      "productListPrice": 100.1234,
                               	      "uomListPrice": 200.1234,
                               	      "grossAmount": 789.1365,
                               	      "productDiscount": 789.1365,
                               	      "promoDiscountDetail": 789.1348,
                               	      "salesDiscountDetail": 789.1348,
                               	      "customerGroupDiscountDetail": 789.1399,
                               	      "cashDiscountPercentage": 789.1326,
                               	      "cashDiscountDetail": 789.1326,
                               	      "netAmount": 789.1326,
                               	      "netAmountTax": 789.1326,
                               	      "customerDiscount": 789.1354,
                               	      "taxPercentage1Detail": 789.35,
                               	      "taxPercentage2Detail": 789.12,
                               	      "taxPercentage3Detail": 789.34,
                               	      "taxAmount1": 15.4353,
                               	      "taxAmount2": 62.3463,
                               	      "taxAmount3": 37.3454,
                               	      "totalTaxAmount": 84.5673,
                               	      "taxCode": "2",
                               	      "remarkDetail": "TEST REMARK",
                                       "promo": {
                               		      "promotionCode": "DISTDKH03",
                               		      "promotionIndex": 18,
                               		      "promotionSequence": 2335,
                               		      "mechanicType": "3",
                               		      "discountPercentage": 5.343,
                               		      "discountAmount": 10.4578,
                               		      "discountSpentAmount": 2.4563,
                               		      "productBuy": 5.565,
                               		      "totalBuy": 8.464,
                               		      "totalDiscountAmount": 11.4567,
                               		      "correspondingProductIndex": 5
                               		   }
                                   	},
                                   	{
                               	      "productIndex": 32,
                               	      "productCode": "8021408",
                               	      "productDescription": "PRD8",
                               	      "uomCode": "EA",
                               	      "productSalesType": "S",
                               	      "defaultUomCode": "EA",
                               	      "taxableIndicator": 1,
                               	      "productQuantity": 5.456,
                               	      "mrp": 4.1234,
                               	      "costPrice": 5.1234,
                               	      "productListPrice": 100.1234,
                               	      "uomListPrice": 200.1234,
                               	      "grossAmount": 789.1365,
                               	      "productDiscount": 789.1365,
                               	      "promoDiscountDetail": 789.1348,
                               	      "salesDiscountDetail": 789.1348,
                               	      "customerGroupDiscountDetail": 789.1399,
                               	      "cashDiscountPercentage": 789.1326,
                               	      "cashDiscountDetail": 789.1326,
                               	      "netAmount": 789.1326,
                               	      "netAmountTax": 789.1326,
                               	      "customerDiscount": 789.1354,
                               	      "taxPercentage1Detail": 789.35,
                               	      "taxPercentage2Detail": 789.12,
                               	      "taxPercentage3Detail": 789.34,
                               	      "taxAmount1": 15.4353,
                               	      "taxAmount2": 62.3463,
                               	      "taxAmount3": 37.3454,
                               	      "totalTaxAmount": 84.5673,
                               	      "taxCode": "2",
                               	      "remarkDetail": "TEST REMARK",
                               	      "promo": {
                               		      "promotionCode": "DISTDKH08",
                               		      "promotionIndex": 10,
                               		      "promotionSequence": 2335,
                               		      "mechanicType": "3",
                               		      "discountPercentage": 5.343,
                               		      "discountAmount": 10.4578,
                               		      "discountSpentAmount": 2.4563,
                               		      "productBuy": 5.565,
                               		      "totalBuy": 8.464,
                               		      "totalDiscountAmount": 11.4567,
                               		      "correspondingProductIndex": 5
                               	      }
                               	    }]
                                 }
                               ]);

RbDms.post('orders', ordersList, oauthParams, qryParams);

