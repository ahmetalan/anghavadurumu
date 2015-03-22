weatherApp.controller('homeCtrl',['$scope','cityService',function($scope,cityService){
    $scope.city = cityService.city;
    $scope.$watch('city',function(){
        cityService.city = $scope.city;
    });
}]);
weatherApp.controller('forecastCtrl',['$scope','$resource','$routeParams','cityService',function($scope,$resource,$routeParams,cityService){
    $scope.city = cityService.city;
    $scope.loading = true;
    $scope.days = $routeParams.days || 2;
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',{
        callback : "JSON_CALLBACK"},{get: {method:"JSONP"}});
    $scope.weatherResult = $scope.weatherAPI.get({q : $scope.city,cnt : $scope.days},function(){
        $scope.loading = false;
    });
    $scope.convertToCelsius = function(degK){
        return Math.round(degK - 273,15);
    };
    $scope.convertToDate = function(date){
        return date * 1000;
    }
}]);
/**
 * Created by Ahmet on 22/01/2015.
 */
