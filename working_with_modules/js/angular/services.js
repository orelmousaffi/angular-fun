angular
	.module("exampleApp.Services", [])
	.service("days", function(nowValue) {
		this.today = nowValue.getDay();
		this.tomorrow = nowValue.getDay() + 1;
	});