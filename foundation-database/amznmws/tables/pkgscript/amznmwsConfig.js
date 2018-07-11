//create variables for all UI elements
var SellerIdField = mywindow.findChild("SellerIdField");
var MWSAuthField = mywindow.findChild("MWSAuthField");
var MWSAccessKeyField = mywindow.findChild("MWSAccessKeyField");
var ServerField = mywindow.findChild("ServerField");
var TestingCheckbox = mywindow.findChild("TestingCheckbox");
var NewUserCheckbox = mywindow.findChild("NewUserCheckbox");
var SubmitButton = mywindow.findChild("SubmitButton");
var CancelButton = mywindow.findChild("CancelButton");

//create a variable for testing that changes when checkbox changes
TestingCheckbox.setChecked(false);
var testingChecked = false;
TestingCheckbox.clicked.connect(toggleTesting);

//create a variable for new user that changes when checkbox changes
NewUserCheckbox.setChecked(false);
var newUserChecked = false;
NewUserCheckbox.clicked.connect(toggleNewUser);

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
//returns list of parameters for query
function getParams() {
try{
  var params = new Object;
  params.SellerId = SellerIdField.text;
  params.MWSAuth = MWSAuthField.text;
  params.MWSAccessKey = MWSAccessKeyField.text;
  params.Server = ServerField.text;
  params.Testing = testingChecked;
  params.NewUser = newUserChecked;

  print("params.SellerId = " + params.SellerId);
  print("params.MWSAuth = " + params.MWSAuth);
  print("params.MWSAccessKey = " + params.MWSAccessKey);
  print("params.Server = " + params.Server);
  print("params.Testing = " + params.Testing);

  return params;
} catch (e) { print (e); }
}

//creates new entry in amznmws table
function newUser(){
  print("newUser called")
  var params = getParams();
  try{
    var qry = toolbox.executeDbQuery("amznmws", "newUser", params);
  } catch (e) { print (e); }
}

//queries database, should input values in amznmws table
function query() {
  if (newUserChecked){
    newUser();
  }
  else{
    var params = getParams();
    print ("query called");
    try{
      var qry = toolbox.executeDbQuery("amznmws", "sellerInfo", params);
    } catch (e) { print (e); }
  }
}