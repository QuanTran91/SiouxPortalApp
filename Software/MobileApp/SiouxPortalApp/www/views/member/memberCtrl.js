;(function() {
	'use strict';

	angular.module("SiouxApp").controller('memberCtrl', ['$scope', function($scope){
		$scope.member.name = "QuanTran";
		$scope.member.face = "img/quantran.png";
	}]);
}());