weatherApp.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl : "pages/home.html",
            controller : "homeCtrl"
        })
        .when('/forecast',{
            templateUrl : "pages/forecast.html",
            controller : "forecastCtrl"
        })
        .when('/forecast/:days',{
            templateUrl : "pages/forecast.html",
            controller : "forecastCtrl"
        })
        .otherwise({redirectTo:"/"});
});