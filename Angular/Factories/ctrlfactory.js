(function(){

var datare=function($http) {
    var url = "movielist.json";
    var dataFactory = {};

    dataFactory.getdata=function()
    {
        return $http.get(url);
    };
    
    return dataFactory;
};
    angular.module('movieFlix').factory('dataFactory',datare);
}());

