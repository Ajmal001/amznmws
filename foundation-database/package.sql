-- Copyright (c) 1999-2018 by OpenMFG LLC, d/b/a xTuple.
-- See www.xtuple.com/EULA for the full text of the software license.

SELECT createpkgschema('amznmws',
                       $PKG$This package creates the required database tables and functions for xTuple Amazon MWS.
This schema is part of the Enhanced Pricing extension for xTuple ERP, and is Copyright (c) 1999-2018 by OpenMFG LLC, d/b/a xTuple.  It is licensed to you under the xTuple End-User License Agreement ("the EULA"), the full text of which is available at www.xtuple.com/EULA.  While the EULA gives you access to source code and encourages your involvement in the development process, this Package is not free software.  By using this software, you agree to be bound by the terms of the EULA.$PKG$,
                       '1.0.0-alpha',
                       'xTuple ERP Amazon MWS Package',
                       'xTuple'
                      );

UPDATE pkghead SET pkghead_descrip = 'xTuple ERP Amazon MWS Package',
                   pkghead_version = '1.0.0-alpha',
                   pkghead_developer = 'xTuple'
 WHERE pkghead_name = 'amznmws';

-- Set the search path after the package schema exists.
SELECT public.login(true);
