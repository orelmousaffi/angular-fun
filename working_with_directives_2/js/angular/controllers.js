var myApp = angular.module("exampleApp");

myApp.config(function($logProvider){
    $logProvider.debugEnabled(true);
});

myApp.controller("defaultCtrl", function($scope) {

	$scope.todos = [
		{ action: "Get groceries", complete: false },
		{ action: "Call plumber", complete: false },
		{ action: "Buy running shoes", complete: true },
		{ action: "Buy flowers", complete: false },
		{ action: "Call family", complete: false }
	];

	$scope.buttonNames = ['Red', 'Green', 'Blue'];
	$scope.rowColor = 'Blue';

	$scope.settings = {
		"Rows" : 'Blue',
		"Columns" : 'Green'
	};

	$scope.handleEvent = function(evt) {
		this.rowColor = (evt.type === 'mouseover') ? 'Green' : 'Blue';
	}
});