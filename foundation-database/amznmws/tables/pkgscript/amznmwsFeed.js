//variables for UI objects
var marketplaceBox = mywindow.findChild("marketplaceBox");
var secretKeyField = mywindow.findChild("secretKeyField");
var productIdField = mywindow.findChild("productIdField");
var productTitleField = mywindow.findChild("productTitleField");
var productBrandField = mywindow.findChild("productBrandField");
var productDescriptionField = mywindow.findChild("productDescriptionField");
var currencyBox = mywindow.findChild("currencyBox");
var priceField = mywindow.findChild("priceField");
var manufacturerField = mywindow.findChild("manufacturerField");
var submitButton = mywindow.findChild("submitButton");
var cancelButton = mywindow.findChild("cancelButton");

//onclick functions
submitButton.clicked.connect(submit);
cancelButton.clicked.connect(mywindow.close);


//might need a variable here for file text
var endpoint;
var marketplaceId;



function submit() {
  //variables for what the UI objects contain
  var marketplace = marketplaceBox.currentText;
  var secretKey = secretKeyField.text;
  var productId = productIdField.text;
  var productTitle = productTitleField.text;
  var productBrand = productBrandField.text;
  var productDescription = productDescriptionField.plainText;
  var currency = currencyBox.currentText;
  var price = priceField.text;
  var manufacturer = manufacturerField.text;


  //set endpoints based on marketplace region
  if (marketplace == "United States" || marketplace == "Canada" || marketplace 	== "Mexico" || marketplace == "Brazil"){
    endpoint = "https://mws.amazonservices.com";
    print ("endpoint = North America");

  }
  if (marketplace == "Australia"){
    endpoint = "https://mws.amazonservices.com.au";
    print ("endpoint = Australia");
  }
  if (marketplace == "Spain" || marketplace == "United Kingdom" || marketplace 	== "France" || marketplace == "Germany" || marketplace == "Italy") {
    endpoint = "https://mws-eu.amazonservices.com";
    print ("endpoint = Europe");
  }
  if (marketplace == "India") {
    endpoint = "https://mws.amazonservices.in";
    print ("endpoint = India");
  }
  if (marketplace == "China") {
    endpoint = "https://mws.amazonservices.com.cn";
    print ("endpoint = China");
  }
  if (marketplace == "Japan") {
    endpoint = "https://mws.amazonservices.jp";
    print ("endpoint = Japan");
  }
  
  //set MarketplaceId based on marketplace
  if (marketplace == "Canada") {
    marketplaceId = "A2EUQ1WTGCTBG2";
  }
  if (marketplace == "United States") {
    marketplaceId = "ATVPDKIKX0DER";
  }
  if (marketplace == "Mexico") {
    marketplaceId = "A1AM78C64UM0Y8";
  }
  if (marketplace == "Spain") {
    marketplaceId = "A1RKKUPIHCS9HS";
  }
  if (marketplace == "United Kingdom") {
    marketplaceId = "A1F83G8C2ARO7P";
  }
  if (marketplace == "France") {
    marketplaceId = "A13V1IB3VIYZZH";
  }
  if (marketplace == "Germany") {
    marketplaceId = "A1PA6795UKMFR9";
  }
  if (marketplace == "Italy") {
    marketplaceId = "APJ6JRA9NG5V4";
  }
  if (marketplace == "Brazil") {
    marketplaceId = "A2Q3Y263D00KWC";
  }
  if (marketplace == "India") {
    marketplaceId = "A21TJRUUN4KGV";
  }
  if (marketplace == "China") {
    marketplaceId = "AAHKV2X7AFYLW";
  }
  if (marketplace == "Japan") {
    marketplaceId = "A1VC38T7YXB528";
  }
  if (marketplace == "Australia") {
    marketplaceId = "A39IBJ37TRP1C6";
  }

  print ("marketplace = " + marketplace);
  print ("endpoint = " + endpoint);
  print ("marketplaceId = " + marketplaceId);
  print ("secretKey = " + secretKey);
  print ("productId = " + productId);
  print ("productTitle = " + productTitle);
  print ("productBrand = " + productBrand);
  print ("productDescription = " + productDescription);
  print ("currency = " + currency);
  print ("manufacturer = " + manufacturer); 

//construct XML document from parameters
     var s = '<?xml version = \"1.0\" encoding=\"iso-8859-1\"?>'
	 + '<AmazonEnvelope xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"'
	 + 'xsi: noNamespaceSchemaLocation = \"amzn-envelope.xsd\">'
	 + '<Header>'
	 + '<DocumentVersion>1.01</DocumentVersion>'
	 + '</Header>'
	 + '<MessageType>Product</MessageType>'
	 + '<PurgeAndReplace>false</PurgeAndReplace>'
	 + '<Message>'
	 + '<MessageID>1</MessageId>'
	 + '<OperationType>Update</OperationType>'
	 + '<Product>'
	 + '<StandardProductID>'
	 + '<Type>ASIN</Type>'
	 + wrap("Value", productId)
	 + '</StandardProductID>'
	 + '<ProductTaxCode>A_GEN_NOTAX</ProductTaxCode>'
	 + '<DescriptionData>'
	 + wrap("Title", productTitle)
	 + wrap("Brand", productBrand)
	 + wrap("Description", productDescription)
	 + '<MSRP currency = \"'
	 + currency
	 + '\">' 
	 + price
	 + '</MSRP>'
	 + wrap("Manufacturer", manufacturer)
	 + '</DescriptionData>'
	 + '</Product>'
	 + '</Message>'
	 + '</AmazonEnvelope>';

  print(s);
}


function wrap(key, value, attributes) {
  var attributeString = "";
  if (Array.isArray(attributes))
    attributeString = attributes.map(function (e) {
                                         if (e.key && e.value)

                                           return e.key + '="' + e.value + '"';

                                         else if (typeof e == "string")

                                             return e;

                                         return String(e);

                                       })

                                  .join(" ");



    return '<' + key

               + ( attributeString ? (' ' + attributeString) : '')

               + '>' + value + '</' + key + '>';

}

