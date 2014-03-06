'use strict';

// Declare app level module which depends on cookies, resource, sanitize and route.
angular.module('micro', [
	'ngCookies',
  	'ngResource',
  	'ngSanitize',
  	'ngRoute'
]).config(function($routeProvider) { //basic routing, please extend
  $routeProvider.when('/', {
  	redirectTo: '/pages/home'
  }).when('/pages/:page',{
  	templateUrl: 'views/pages.html', controller: 'pages'
  }).otherwise({
  	redirectTo: '/'
  });

});