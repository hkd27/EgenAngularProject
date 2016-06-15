var ctrl=function($scope,dataFactory){

    dataFactory.getdata().success(function(item){

        $scope.dataItem=item.item;
    });


};

ctrl.$inject=['$scope','dataFactory'];
angular.module('movieFlix').controller("ctrl",ctrl);