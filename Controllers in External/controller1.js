var myApp = angular.module("myApp", []);
myApp.controller("SpicyControl"  , function($scope){
	$scope.spice = "very";
	$scope.ChillySpice = function(){$scope.spice = "Chilly"};
	$scope.PepperSpice = function(){$scope.spice = "Pepper"};
});