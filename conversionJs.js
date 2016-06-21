(function(){	
	var app = angular.module('UnitConversion',[]);
	var Units = {
	     /*length*/		
		"mm": 0.001,
		"cm": 0.01,
		"m": 1,
		"km": 1000,
		"in": 0.0254,
		"ft": 0.3048,
		"yd": 0.9144,
		"mi": 1609.344,
		"nmi": 1852,

		/*weight*/
		"mg" : 0.001,
		"gm" : 1,
		"pd" : 453.592,
		"kg" : 1000

		/*temperature*/
		/*"c" : 1,
		"f" : 32,
		"k" : -273.15*/		
	}
	app.directive('conversionTabs',function(){
		return{
			restrict : 'E',
			templateUrl : "conversion-tabs.html",
			controller : function(){
				this.tab = 1;
				this.isSet = function(checkTab){
					return this.tab === checkTab;
				};
				this.setTab = function(setTab) {
					this.tab = setTab;
		   		};
			},
			controllerAs : 'tab'
		};
	});

	app.directive('lengthConversion',function(){
		return{
			restrict : 'E',
			templateUrl : "length-conversion.html",
			controller : function(){
				this.toLen=0;
				this.lenUnitData = {
					lenUnitOptions : [
						 {id: 'mm', name: 'Millimeter'},
						 {id: 'cm', name: 'Centimeter'},
						 {id: 'm', name: 'Meter'},
						 {id: 'km', name: 'Kilometer'},
						 {id: 'in', name: 'Inch'},
						 {id: 'ft', name: 'Feet'},
						 {id: 'yd', name: 'Yard'},
						 {id: 'mi', name: 'Mile'}, 
						 {id: 'nmi', name: 'Nautical Miles'}

					],
					selectedFromOption: {id: 'm', name: 'Meter'},
					selectedToOption: {id: 'm', name: 'Meter'}
				};
				this.convert = function(){
					this.toLen = this.fromLen*(Units[this.lenUnitData.selectedFromOption.id]/Units[this.lenUnitData.selectedToOption.id]);
				};
			},
			controllerAs : 'lenCtrl'
		};
	});

	app.directive('weightConversion',function(){
		return{
			restrict : 'E',
			templateUrl : "weight-conversion.html",
			controller : function(){
				this.toWt=0;
				this.wtUnitData = {
					wtUnitOptions : [
						 {id: 'mg', name: 'Milligram'},
						 {id: 'gm', name: 'Gram'},
						 {id: 'kg', name: 'Kilogram'},
						 {id: 'pd', name: 'Pound'}				 
					],
					selectedFromOption: {id: 'gm', name: 'Gram'},
					selectedToOption: {id: 'gm', name: 'Gram'}
				};
				this.convert = function(){
					this.toWt = this.fromWt*(Units[this.wtUnitData.selectedFromOption.id]/Units[this.wtUnitData.selectedToOption.id]);
				};
			},
			controllerAs : 'wtCtrl'
		};
	});	

	app.directive('temperatureConversion',function(){
		return{
			restrict : 'E',
			templateUrl : "temperature-conversion.html",
			controller : function(){
				this.toTemp=0;
				this.tempUnitData = {
					tempUnitOptions : [
						 {id: 'c', name: 'Celsius'},
						 {id: 'f', name: 'Fahrenheit'},
						 {id: 'k', name: 'Kelvin'}	
					],
					selectedFromOption: {id: 'c', name: 'Celsius'},
					selectedToOption: {id: 'c', name: 'Celsius'}
				};
				this.convert = function(){
					//this.toTemp = this.fromTemp*(Units[this.tempUnitData.selectedFromOption.id]/Units[this.tempUnitData.selectedToOption.id]);
				};
			},
			controllerAs : 'tempCtrl'
		};
	});
})();