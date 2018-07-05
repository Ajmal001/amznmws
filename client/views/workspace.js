/*jshint bitwise:true, indent:2, curly:true, eqeqeq:true, immed:true,
latedef:true, newcap:true, noarg:true, regexp:true, undef:true,
trailing:true, white:true, strict: false*/
/*global XT:true, XM:true, XV:true, enyo:true, Globalize: true, _:true, async:true,
  window:true, setTimeout:true, SignaturePad:true, FileReader:true */

(function () {
	XT.extensions.amznmws.initWorkspaces = function () {
		var extensions;

		extensions = [

			//panels will go here
		];

		XV.appendExtension("XV.Workspace", extensions);
	}

		// ..........................................................
    // CONFIGURE
    //

	enyo.kind({
		name: "XV.AmznmwsWorkspace",
		kind: "XV.Workspace",
		title: "_configure".loc() + " " + "_amznmws".loc(),
		model: "XM.Amznmws",
		components: [
			{kind: "Panels", arrangerKind: "CarouselArranger",
				fit: true, components: [
					{kind: "XV.Groupbox", name: "mainPanel", components: [
						{kind: "XV>ScrollableGroupbox", name: "mainGroup", fit: true, classes: "in-panel", components: [
							{kind: "onyx.GroupboxHeader", content: "_amznmws".loc()},
							{kind: "XV.AmznmwsConfigurationWidget"}
						]}
					]}
				]
			}
		]});



}());
