'use strict';

//We give you a basic controller to get you up and running.
//This controller just serves static pages for you, giving you in essence a 
//simple 'static' CMS.
angular.module('micro').controller('pages', function($scope, $routeParams, $log){
	$scope.title = '';

	$scope.loadPage = function(){

		$scope.title = $routeParams.page;

		if(!$scope.title){
			$scope.title = 'home';
		}

		return 'views/pages/'+$scope.title+'.html';
		//$scope.$apply();
	}
	
}); //If you want to add more controllers, just remove the ';' and chain off of here.