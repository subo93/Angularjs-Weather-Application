angular.module("app.search")
.controller("Search",function ($scope,weatherSvc) {
$scope.cities=null;
    $scope.$on("search",search);
    function search(evt,data) {
        console.log("entered data  "+data.str);


        //using the service(find) implemented in weatherSvc
        weatherSvc.find(data.str)


    .then(function(responce){
        $scope.cities=responce.list;
                console.log(responce);
            },function (err) {
                console.log("Error finding cities: ",err);
            })
        console.log("After weatherSvc define");
    }

});