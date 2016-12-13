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

		return BaseController.extend("delvermypackage.controller.PostMyRide", {

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
			onPostRide: function () {
				var ride = {};
				ride.pStreet = this.byId("pStreet").getValue();
				ride.pArea = this.byId("pArea").getValue();
				ride.pCity = this.byId("pCity").getValue();
				ride.pState = this.byId("pState").getValue();
				ride.pDate = this.byId("pDate").getValue();
				ride.pTime = this.byId("pTime").getValue();

				ride.dStreet = this.byId("dStreet").getValue();
				ride.dArea = this.byId("dArea").getValue();
				ride.dCity = this.byId("dCity").getValue();
				ride.dState = this.byId("dState").getValue();
				ride.dDate = this.byId("dDate").getValue();
				ride.dTime = this.byId("dTime").getValue();

				ride.dWeight = this.byId("weight").getValue();
				ride.dSize = this.byId("size").getValue();
				ride.dContents = this.byId("contents").getValue();
			},
			onNavBack: function () {
				this.getRouter().navTo("DashBoard");
			}
			
	});

	}
);