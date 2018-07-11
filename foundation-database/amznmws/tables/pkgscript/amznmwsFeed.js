//variables for UI objects
var marketplaceBox = mywindow.findChild("marketplaceBox");
var hashedKeyField = mywindow.findChild("hashedKeyField");
var hashVersionBox = mywindow.findChild("hashVersionBox");
var feedContentFile = mywindow.findChild("feedContentFile");
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
  var hashedKey = hashedKeyField.text;
  var hashVersion = hashVersionBox.currentText;
  var feedDir = feedContentFile.text;

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
  print ("hashedKey = " + hashedKey);
  print ("hashVersion = " + hashVersion);
  print ("feedDir = " + feedDir);
}
