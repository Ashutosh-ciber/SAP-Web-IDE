/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"App_epm/epm/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});