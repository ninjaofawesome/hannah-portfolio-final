var hannahApp = angular.module ('hannahControllers', []);

hannahApp.controller('HannahListCtrl', ['$scope', '$http', function($scope, Hannah){
	$http.get('http://localhost:9393/about').success(function(data){
		$scope.hannah = data;
	});
}]);