angular
	.module("exampleApp.Filters", [])
	.filter("dayName", function(dayNames) {
		return function(input) {
			return angular.isNumber(input) ? dayNames[input] : input;
		}
	});