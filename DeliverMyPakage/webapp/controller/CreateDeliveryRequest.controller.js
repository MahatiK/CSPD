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

	return BaseController.extend("delvermypackage.controller.CreateDeliveryRequest", {

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
			this.getRouter().navTo("DashBoard");
		},

		onCreate: function() {
			var packag = {
				"source"		:	"b",
				"destination"	:	"l",
				"dimensions"	:	"111",
				"sentDate"		:	"34jhhj343443.3434",
				"deliveredDate"	:	"76587786.87",
				"latLong"	:	"878.87678",
				"delivered"	:	"true",
				"weight"	:	"10"
			} ;
			
			
		/*	packag.source = this.byId("fCity").getValue();
			packag.destination = this.byId("tCity").getValue();
			packag.dimensions = this.byId("size").getValue();
			packag.sentDate = this.byId("fDate").getValue();
			packag.deliveredDate = this.byId("tDate").getValue();
			packag.latlong = "324324.33";
			packag.delivered = "false";
			packag.weight = this.byId("weight").getValue();
*/
			this.getModel().create("/Clients('11')/ParcelDetails",
				packag, {
					success: function(data) {
						sap.m.MessageToast.show("success");
					},
					error: function(error) {
						sap.m.MessageToast.show("error");
					}
				});

		}

	});

});