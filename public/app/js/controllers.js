var hannahControllers = angular.module ('hannahControllers', []);

hannahControllers.controller('HannahListCtrl', ['$scope', 'Hannah', function($scope, Hannah){
	// $http.get('http://localhost:9393/about').success(function(data){
	// 	$scope.hannah = data;});

	$scope.hannah = Hannah.query();


}]);