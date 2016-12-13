jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"delvermypackage/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"delvermypackage/test/integration/pages/Worklist",
		"delvermypackage/test/integration/pages/Object",
		"delvermypackage/test/integration/pages/NotFound",
		"delvermypackage/test/integration/pages/Browser",
		"delvermypackage/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "delvermypackage.view."
	});

	sap.ui.require([
		"delvermypackage/test/integration/WorklistJourney",
		"delvermypackage/test/integration/ObjectJourney",
		"delvermypackage/test/integration/NavigationJourney",
		"delvermypackage/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});