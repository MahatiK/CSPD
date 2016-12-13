/*global location*/
sap.ui.define([
		"delvermypackage/controller/BaseController",
		"sap/ui/model/json/JSONModel",
		"sap/ui/core/routing/History",
		"delvermypackage/model/formatter"
	], function (
		BaseController,
		JSONModel,
		History,
		formatter
	) {
		"use strict";

		return BaseController.extend("delvermypackage.controller.Login", {

			formatter: formatter,

			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */

			/**
			 * Called when the worklist controller is instantiated.
			 * @public
			 */
			onInit : function () {
			},
			onSignIn: function () {
				this.getRouter().navTo("DashBoard");
			},
			onRegister: function() {
				this.getRouter().navTo("Register");
			}
			
	});

	}
);