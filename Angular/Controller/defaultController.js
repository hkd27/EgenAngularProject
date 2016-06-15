var ctrl=function($scope,datare){

    $scope.data=datare.getdata().success(function(item){

        console.log(item);
    });


};

ctrl.$inject=['$scope','datare'];
angular.module('movieFlix').controller("ctrl",ctrl);