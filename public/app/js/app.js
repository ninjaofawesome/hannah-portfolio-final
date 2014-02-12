'use strict';

var createHannah = angular.module('createHannah', [
	'ngRoute',
	'hannahControllers',
	'hannahFilters',
	'hannahServices'
	]);

createHannah.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/welcome-page.html',
			controller: 'HannahListCtrl'
		}).
		when('/about',{
			templateUrl: 'partials/my-work.html',
			controller: 'HannahListCtrl'
		}).
		otherwise({
			redirectTo: '/'
		});
}]);