angular.module("app.forecast")
.directive(myForecast,function () {
    cosole.log( "start directice!!!!!!!!!");
    return {
       // restrict:"AE",
        replace:true,
        scope:{
            dp:"="
        },
        template:"<div id='contianer'></div>",
        link:linkFn
    }
    function linkFn(scope,element,attrs) {
        cosole.log( element);
        coonsole.log("directive after log!!!!");

    }
});