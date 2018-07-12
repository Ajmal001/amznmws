//create variables for all UI elements
var SellerIdField = mywindow.findChild("SellerIdField");
var MWSAuthField = mywindow.findChild("MWSAuthField");
var MWSAccessKeyField = mywindow.findChild("MWSAccessKeyField");
var ServerField = mywindow.findChild("ServerField");
var TestingCheckbox = mywindow.findChild("TestingCheckbox");
var SubmitButton = mywindow.findChild("SubmitButton");
var CancelButton = mywindow.findChild("CancelButton");

//create a variable for testing that changes when checkbox changes
TestingCheckbox.setChecked(false);
var testingChecked = false;
TestingCheckbox.clicked.connect(toggleTesting);

//submit and cancel button functions
SubmitButton.clicked.connect(query);
CancelButton.clicked.connect(mywindow.close);

//toggle testing value
function toggleTesting() {
  if (testingChecked) { testingChecked = false; }
  else { testingChecked = true; }
  print (testingChecked);
}
function toggleNewUser() {
  if (newUserChecked) { newUserChecked = false; }
  else { newUserChecked = true; }
  print (newUserChecked);
}



//queries database, should input values in amznmws table
function query() {
    print ("query called");
    try{
      metrics.set("amznmwsSellerId", SellerIdField.text);
      metrics.set("amznmwsAuth", MWSAuthField.text);
      metrics.set("amznmwsAccessKey", MWSAccessKeyField.text);
      metrics.set("amznmwsServer", ServerField.text);
    } catch (e) { print (e); }
}