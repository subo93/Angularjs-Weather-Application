angular.module("app.data")
    .factory("weatherSvc", function ($http, $q) {
        return {
            find: findByLocation,
            getCurrent: getCurrentWeather
        }
        function findByLocation(location) {
            console.log("service weather " + location)
            var url = "http://api.openweathermap.org/data/2.5/find?q=" + location + "&appid=057c3d71e00dd24826bcb8b1f8e90fd1";

            //to check the data has arrived
            var defer = $q.defer();
            $http.get(url)
                .success(function (response) {
                    defer.resolve(response);

                })
                .error(function (err) {
                    defer.reject(err);
                    console.log("error in weather svc!")
                })
            console.log(url);
            return defer.promise;
        }

        function getCurrentWeather(id) {
            var defer = $q.defer();
            console.log("getCurrentWeather  "+id);
            var url = "http://api.openweathermap.org/data/2.5/find?q=" + id + "&appid=057c3d71e00dd24826bcb8b1f8e90fd1";

            console.log("weathersvc -------" + url);
            $http.get(url)
                .success(function (response) {
                        defer.resolve(response);
                    }
                )
                        .error(function (err) {
                                defer.reject(err);
                            }
                        )

            return defer.promise;

        };
    })