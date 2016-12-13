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

	return BaseController.extend("delvermypackage.controller.Tracker", {

		formatter: formatter,

		/* =========================================================== */
		/* lifecycle methods                                           */
		/* =========================================================== */

		/**
		 * Called when the worklist controller is instantiated.
		 * @public
		 */
		onInit: function() {
			this.getRouter().getRoute("Tracker").attachPatternMatched(this._onObjectMatched, this);
			this.getView().byId("map_canvas").addStyleClass("myMap");
		},

		_onObjectMatched: function(oEvent) {
			var sDest = oEvent.getParameter("arguments").Destination;
			var directionsDisplay;
			var directionsService = new google.maps.DirectionsService();
			var map;
			var haight = new google.maps.LatLng(37.7699298, -122.4469157);
			var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);
			directionsDisplay = new google.maps.DirectionsRenderer();
			var mapOptions = {
				zoom: 14,
				center: haight
			}
			map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(), mapOptions);
			directionsDisplay.setMap(map);

			var request = {
				origin: haight,
				destination: sDest,
				travelMode: google.maps.TravelMode['Driving']
			};
			directionsService.route(request, function(response, status) {
				if (status == 'OK') {
					directionsDisplay.setDirections(response);
				}
			});
		},

		onAfterRendering: function() {
			if (!this.initialized) {
				this.initialized = true;
				var loc = {
					lat: -25.363,
					lng: 131.044
				};
				window.mapOptions = {
					center: loc,
					zoom: 8,
					mapTypeId: google.maps.MapTypeId.TERRAIN
				};
				var map = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(), mapOptions);
				var marker = new google.maps.Marker({
					position: loc,
					map: map
				});
				this.geocoder = new google.maps.Geocoder();
				var infowindow = new google.maps.InfoWindow;
			}
		},
		onLocUpdate: function() {
			this.onAfterRendering();
			var newMap = new google.maps.Map(this.getView().byId("map_canvas").getDomRef(), mapOptions);
			var loc = {
				lat: -25.363,
				lng: 131.044
			};
			this.geocoder.geocode({
					'location': loc
				},
				function(results, status) {
					if (status === google.maps.GeocoderStatus.OK) {
						newMap.setCenter(loc);
						newMap.setZoom(12);
						var marker = new google.maps.Marker({
							map: newMap,
							position: loc
						});
					} else {
						alert('Geocode was not successful for the following reason: ' + status);
					}
				});
			var infoWindow = new google.maps.InfoWindow({
				map: newMap,
				position: loc,
				content: 'ino'
			});
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function(position) {
					var pos = {
						lat: position.coords.latitude,
						lng: position.coords.longitude
					};

					infoWindow.setPosition(pos);
					infoWindow.setContent(pos);
					newMap.setCenter(pos);
				}, function() {
					handleLocationError(true, infoWindow, newMap.getCenter());
				});
			} else {
				// Browser doesn't support Geolocation
				handleLocationError(false, infoWindow, map.getCenter());
			}
			return;
		}
	});

});