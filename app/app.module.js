var name="app";
requires=["app.shell","app.search","app.weather","app.forecast","app.data","app.component"];
angular.module(name,requires)


    //without this ng-view didn't work!
.run(['$route',function ($route) {
    $route.reload();
}]);