/*jshint node:true, indent:2, curly:false, eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
strict:true, trailing:true, white:true */
/*global XT:true  */

(function () {
  "use strict";

  var lang = XT.stringsFor("en_US", {
    "_amznmws" "Amazon MWS",
    "_amznmwsDescription": "Amazon Marketplace Web Services",
    "_mwssellerid": "MWS Seller ID",
    "_mwsauthtoken": "MWS Authorization Token",
    "_awsaccesskey": "AWS Access Key"

  });

  if (typeof exports !== 'undefined') {
    exports.language = lang;
  }
}());
