angular.module("app.forecast")
.directive("myforecast",function () {
    console.log( "start directice!!!!!!!!!");
    return {
        restrict:"AEC",
        replace:true,
        scope:{
            //data provider
            dp:"="
        },
        template:"<div id='container'></div>",
        link:linkFn

    }
  //  console.log("before link function!!!");
    function linkFn(scope,element,attrs) {
        console.log("directive before log!!!!");
        console.log("neeeddddddd "+attrs);
        console.log("directive after log!!!!");

    }
        console.log("After linkkkk");
}

);