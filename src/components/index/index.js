/**
 * Created by lenovo on 2017/8/30.
 */
angular.module('index',[])
    .directive('nglIndex',[function () {
        return{
            scope:{},
            restrict:'E',
            templateUrl:'/src/components/index/index.html',
            replace:true,
            controller:['$scope',function ($scope) {
                console.log("首页")
            }]
        }
    }])