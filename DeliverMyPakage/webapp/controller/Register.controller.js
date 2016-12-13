/*global location*/
sap.ui.define([
	"delvermypackage/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"delvermypackage/model/formatter"
], function(
	BaseController,
	JSONModel,
	History,
	formatter
) {
	"use strict";

	return BaseController.extend("delvermypackage.controller.Register", {

		formatter: formatter,

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		onInit: function() {},
		onNavBack: function() {
			this.getRouter().navTo("Login");
		},
		onRegister: function() {
			var user = {};
			user.firstName = this.byId("name").getValue();
			user.lastName = user.firstName;
			user.email = this.byId("email").getValue();
			user.address = this.byId("address").getValue();
			user.govId = this.byId("adhar").getValue();
			user.phone = this.byId("phone").getValue();
			user.rating = "3";
			this.getModel().create("/Clients",
				user, {
					success: function(data) {
						sap.m.MessageToast.show("success");
					},
					error: function(error) {
						sap.m.MessageToast.show("error");
					}
				});

			if (this.byId("carrier").getSelected()) {
				this.getModel().create("/Shippers",
					{"email" : user.email}, {
						success: function(data) {
							sap.m.MessageToast.show("success");
						},
						error: function(error) {
							sap.m.MessageToast.show("error");
						}
					});
			}

		}
	});

});