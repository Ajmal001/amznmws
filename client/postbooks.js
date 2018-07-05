/*jshint bitwise:true, indent:2, curly:true, eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
trailing:true, white:true*/
/*global XT:true, XV:true, enyo:true*/

(function() {

	XT.extensions.amznmws.initPostbooks = function () {
	  var module,
		panels,
		relevantPrivileges,
		configurationJson,
		configuration;

		// ....................................................
		// APPLICATION
		//

		//add configuration
		configurationJson = {
			model: "XM.amznmws",
			name: "_amznmws".loc(),
			description: "_amznmwsDescription".loc(),
			workspace: "XV.AmznmwsWorskspace"
		};
		configuration = new XM.ConfigurationModel(configurationJson);
		XM.configurations.add(configuration);

		//extend setup
		panels = [
			{name: "amznmwsConfiguration", kind: "XV.amznmwsConfiguration"}
		];
		XT.app.$.postbooks.appendPanels("setup", panels);

		//create amznmws module (not really sure if this is needed)
		module = {
			name: "amznmws",
			label: "_amznmws".loc(),
			panels: [
				//add panels here
			]
			//add events here
			events: {
				onTransactionList: ""
			},
			actions: [
				//add actions here
			],

		};

		
		XT.app.$.postbooks.insertModule(module, 0);

		relevantPrivileges = [
			//insert relevant privileges here
		];
		XT.session.addRelevantPrivileges(module.name, relevantPrivileges);
	};
}());