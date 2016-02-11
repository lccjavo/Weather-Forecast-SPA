//var weatherApp = angular.module('weatherApp');
// CONTROLLERS
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    $scope.city=cityService.city;
    $scope.$watch('city', function(){
        cityService.city=$scope.city;
    })
    
}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city=cityService.city;
    $scope.days=$routeParams.days || 2;
    
    $scope.weatherAPI= $resource(
        "http://api.openweathermap.org/data/2.5/forecast/daily", 
        {callback: "JSON_CALLBACK"},
        {get: {method: "JSONP"}}    
    );
    
    $scope.weatherResults=$scope.weatherAPI.get(
        {
         q: $scope.city, 
         cnt: $scope.days,
         units: "metric",
         appid: "44db6a862fba0b067b1930da0d769e98"
        }
    );
    
    console.log($scope.weatherResults);
    
    $scope.convertToDate= function(dt){
        return new Date(dt*1000);
    }
    
    
    
}]);