Amazon MWS Extension

## Contents
* client
  * en
    * strings.js - Creates list of relevant strings for use in other files
  * views
    * workspace.js - Creates workspace, which includes the configuration widget
    * package.js - packages the workspace file
  * widgets
    * configuration.js - Widget for setting various Amazon ID's that should eventually be in System -> Setup
    * package.js - packages configuration.js
  * core.js
  * package.js - packages everything in client directory
  * postbooks.js - make relevant changes to postbooks, including adding to System -> Setup
* database - this directory is currently empty...
  * source
    * public
      * tables
    * xt
* foundation-database
  * xtcore
    * schema
      * amznmws.sql - Creates a schema called "amznmws"
    * tables
      * amznmws-info.sql - Creates a table called "amznmws-info" in the amznmws schema
