/**
 * Created by lenovo on 2017/8/29.
 */
angular.module('app',['ngRoute','aside','header','index','login'])
.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
        .when('/',{
            template:'<ngl-index></ngl-index>'
        })
        .when('/index',{
            redirectTo:'/'
        })
        .when('/login',{
            template:'<ngl-login></ngl-login>'
        })
        .otherwise({
            templateUrl:'/src/html/404.html'
        })
}])