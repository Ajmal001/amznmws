(function() {
  var mode = mywindow.mode("MaintainAmazonMWSConfigurationSetup", "ViewAmazonMWSConfigurationSetup");
  mywindow.insert(qsTr("Amazon MWS Configuration"), "amznmwsConfig", setup.Configure, Xt.SystemModule, mode, mode);
})
