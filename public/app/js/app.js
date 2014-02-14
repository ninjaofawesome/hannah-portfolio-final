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
		when('/about',{
			templateUrl: 'partials/my-work.html',
			controller: 'HannahListCtrl'
		}).
		when('/about/:id',{
			templateUrl: 'partials/my-work.html',
			controller: 'HannahDetailCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);