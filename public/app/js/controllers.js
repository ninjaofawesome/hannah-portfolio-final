var hannahControllers = angular.module ('hannahControllers', []);

hannahControllers.controller('HannahListCtrl', ['$scope', 'Hannah', function($scope, Hannah){
	// $http.get('http://localhost:9393/about').success(function(data){
	// 	$scope.hannah = data;});

	$scope.hannah = Hannah.query();


}]);

hannahControllers.controller('HannahDetailCtrl', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
		$http.get('/about/' + $routeParams.hannahsId + '.json').
			function(data) {
				$scope.hannah = data[0];
			});

}]);