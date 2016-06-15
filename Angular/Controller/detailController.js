(function () {
var detailInfo=function($scope,$routeParams,dataFactory){

    dataFactory.getdata().success(function(item){

        $scope.movieDetails=item.item;
        $scope.len=item.item.length;
        sentId=parseInt($routeParams.id);
        //$scope.Msgs=$scope.movieDetails[1];
        for(var i=0;i<$scope.len;i++){

            if(sentId===$scope.movieDetails[i].id){
                $scope.Msgs=$scope.movieDetails[i];
                console.log($scope.Msgs.Title);


               break;
            }else{
                $scope.Msgs=" Something went wrong try again later !"+sentId;
            }

        }

    });



}
    detailInfo.$inject=['$scope','$routeParams','dataFactory'];
    angular.module('movieFlix').controller("details",detailInfo)
}());