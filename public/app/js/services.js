var hannahServices = angular.module('hannahServices', ['ngResource']);

hannahServices.factory('Hannah', ['$resource',
  function($resource){
    return $resource('http://localhost:9393/about', {}, {
      query: {method: 'GET', params: {}, isArray:true}
    });
  }]);