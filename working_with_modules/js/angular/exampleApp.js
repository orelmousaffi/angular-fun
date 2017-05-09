var myApp = angular.module('exampleApp', [
	"exampleApp.Controllers",
	"exampleApp.Filters",
	"exampleApp.Services",
	"exampleApp.Directives"
]);

myApp.constant('dayNames', [
	"Sunday", 
	"Monday", 
	"Tuesday", 
	"Wednesday",
	"Thursday", 
	"Friday", 
	"Saturday"
]);

var now = new Date();
myApp.value("nowValue", now);

/*myApp.controller("dayCtrl", function($scope, days) {
	$scope.day = days.today;
});

myApp.controller("tomorrowCtrl", function($scope, days) {
	$scope.tomorrow = days.tomorrow;
});

myApp.directive("highlight", function($filter) {
	
	var dayFilter = $filter('dayName');

	return function(scope, element, attrs) {
		if (dayFilter(scope.day) === attrs['highlight']) {
			element.css("color", "red");
		}
	}
});

myApp.filter("dayName", function(dayNames) {
	return function(input) {
		return angular.isNumber(input) ? dayNames[input] : input;
	}
});

myApp.service("days", function(nowValue) {
	this.today = nowValue.getDay();
	this.tomorrow = nowValue.getDay() + 1;
});*/