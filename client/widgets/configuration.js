(function () {

	XT.extensions.amznmws.initConfigurationWidgets = function ()

	enyo.kind({
		name:  "XV.AmznmwsConfigurationWidget",
		kind: "XV.Groupbox"
		components: [
			{kind: "XV.GroupboxHeader", content: "_amznmws".loc()},
			{name: "label", kind: "xv-label"},
			{kind: "XV.InputWidget", content: "_mwssellerid".loc(),
				getParameter: function() {
					return this.getValue();
				}
			},
			{name: "label", kind: "xv-label"},
			{kind: "XV.InputWidget", content: "_mwsauthtoken".loc(),
				getParameter: function() {
					return this.getValue();
				}
			},
			{name: "label", kind: "xv-label"},
			{kind: "XV.InputWidget", content: "_awsaccesskey".loc(),
				getParameter: function() {
					return this.getValue();
				}
			},

			{kind: "onyx.Button", name: "submit", classes: "icon-ok", ontap: "amznmwsConfigure"}
		],
	});
});
