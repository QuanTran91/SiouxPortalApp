(function() {
	'use strict';
	angular.module("SiouxApp").controller("homeCtrl",['$scope','fakeService',homeCtrlFunc]);
	function homeCtrlFunc($scope,fakeService){
		$scope.people = fakeService.all();
		console.log($scope.people);
	};
}());