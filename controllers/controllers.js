//var weatherApp = angular.module('weatherApp');
// CONTROLLERS
//javascript puro: https://www.w3schools.com/js/js_date_methods.asp
//filtros de angular https://docs.angularjs.org/api/ng/filter/date
//moment https://momentjs.com/
//to get the AP key for openweather map https://home.openweathermap.org/api_keys
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

    moment.locale('en');  

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

    
    $scope.getNameByDay = function(day){
        switch(day){
            case 0: return 'Domingo'; break;
            case 1: return 'Lunes'; break;
            case 2: return 'Martes'; break;
            case 3: return 'Miercoles'; break;
            case 4: return 'Jueves'; break;
            case 5: return 'Viernes'; break;
            case 6: return 'Sabado'; break;
            default: return 'Un dia de estos'; break;
        }
    }
    
    $scope.getNameByMonth = function(month){
        switch(month){
            case 0: return 'Enero'; break;
            case 1: return 'Febrero'; break;
            case 2: return 'Marzo'; break;
            case 3: return 'Abril'; break;
            case 4: return 'Mayo'; break;
            case 5: return 'Junio'; break;
            case 6: return 'Julio'; break;
            case 7: return 'Agosto'; break;
            case 8: return 'Septiembre'; break;
            case 9: return 'Octubre'; break;
            case 10: return 'Noviembre'; break;
            case 11: return 'Diciembre'; break;
            default: return 'Un mes de estos'; break;
        }
    }
    

}]);