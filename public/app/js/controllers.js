var hannahControllers = angular.module ('hannahControllers', []);

hannahControllers.controller('HannahListCtrl', ['$scope', 'Hannah', function($scope, Hannah){
	// $http.get('http://localhost:9393/about').success(function(data){
	// 	$scope.hannah = data;});

	$scope.hannah = Hannah.query();


}]);

hannahControllers.controller('HannahDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get("me/-" + $routeParams.hannahId + '.json').success(function(data) {
      $scope.hannah = data[0];
      // $scope.mainImg = data[0].images[0];
    });

    // $scope.setImage = function(imageName) {
    //   $scope.mainImg = imageName;
    //}
  }]);