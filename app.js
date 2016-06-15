(function(){

    var app=angular.module('movieFlix',['ngMaterial','ngRoute','ngMdIcons']).run(function(){
        
    });
    app.config(function($routeProvider){
        $routeProvider.when('/',{
            controller:'ctrl',
            templateUrl:'Angular/Views/default.html'
           })
            .when('/detail/:id',{controller:'details',templateUrl:'Angular/Views/details.html'})
            .otherwise({redirectTo:'/'});
    });

}());

