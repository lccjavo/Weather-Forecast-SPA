//var weatherApp = angular.module('weatherApp');
// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city=cityService.city;
    $scope.$watch('city', function(){
        cityService.city=$scope.city;
    })
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', '$http', '$sce', function($scope, $resource, $routeParams, cityService, $http, $sce) {
    
    $scope.city=cityService.city;
    $scope.days=$routeParams.days || 2;

    var url = "http://api.openweathermap.org/data/2.5/forecast/daily";
    $sce.trustAsResourceUrl(url);

    moment.locale('es');  

    $http({
      method: 'GET',
      url: url,
      params: {
         q: $scope.city, 
         cnt: $scope.days,
         units: "metric",
         appid: "52293df3f05e4dff10211d72c40fca6f"
        },
    }).then(function successCallback(response) {
        $scope.weatherResults = response.data;
        for(i=0; i<response.data.list.length; i++){
            $scope.weatherResults.list[i].date = $scope.convertToDate($scope.weatherResults.list[i].dt);
            $scope.weatherResults.list[i].dateMoment = moment($scope.weatherResults.list[i].date);
        }
        
        console.log($scope.weatherResults);;
      }, function errorCallback(response) {
         console.log(response);
      });
    
    $scope.convertToDate= function(dt){
        return new Date(dt*1000);
    }    
    
}]);