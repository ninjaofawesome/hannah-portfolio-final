'use strict';

var hannahApp = angular.module('hannahApp', [
	'ngRoute',
	'hannahControllers',
	'hannahFilters',
	'hannahServices'
	]);

hannahApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/welcome-page.html',
			controller: 'HannahListCtrl'
		}).
		when('/me',{
			templateUrl: 'partials/my-work.html',
			controller: 'HannahListCtrl'
		}).
		when('/me/:id',{
			templateUrl: 'partials/my-work.html',
			controller: 'HannahDetailCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);