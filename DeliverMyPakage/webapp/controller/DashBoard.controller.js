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

		return BaseController.extend("delvermypackage.controller.DashBoard", {

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
			
			onRide: function() {
				this.getRouter().navTo("PostMyRide");
			},
			
			onDeliver: function() {
				this.getRouter().navTo("CreateDeliveryRequest");
			},
			onPress: function(oEvent) {
				//var sDest=oEvent.
				this.getRouter().navTo("Tracker",{
					"Destination" : oEvent.getSource().getBindingContext().getObject().Destination
				});
			},
			ontracker: function() {
					this.getRouter().navTo("Tracker");
			},
			onNavBack: function() {
					this.getRouter().navTo("Login");
			}
			
	});

	}
);