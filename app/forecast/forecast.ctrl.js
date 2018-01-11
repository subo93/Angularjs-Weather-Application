angular.module(name,requires)
.controller("Forecast",function ($scope,$routeParams,weatherSvc) {
    $scope.forecast=null;

    if($routeParams.id != undefined){
        getForecast($routeParams.id);
    }
    function getForecast(id) {
weatherSvc.getForecast(id)
    .then(
        function (response) {
            $scope.forecast=response;
            console.log($scope.forecast);
        },
        function(err){
            console.log("err!!!!!!!!!!");
        }
    )
    }

})