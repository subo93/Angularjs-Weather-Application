angular.module("app.weather")
    .controller("Weather", function ($scope, $routeParams, weatherSvc) {

       $scope.current=null;
       $scope.getTime=getTime;

        if ($routeParams.id !== undefined) {
            getCurrent($routeParams.id);
        }
        function getCurrent(id) {
            console.log("Id in wether crtl!!!!" + id);
            weatherSvc.getCurrent(id)
                .then(
                    function (response) {
                        console.log(response);
                        $scope.current=response;
                    },
                    function (err) {
                        console.log("Error loading current weather data ", err);
                    }
                )
        }

        function getTime(dt) {
            return new Date(dt*1000);

        }
    });