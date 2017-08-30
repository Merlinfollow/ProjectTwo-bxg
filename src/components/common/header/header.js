/**
 * Created by lenovo on 2017/8/29.
 */
angular.module('header',[])
.directive('nglHeader',function () {
    return{
        $scope:{},
        restrict:'E',
        templateUrl:'/src/components/common/header/header.html',
        replace:true,
        controller:["$scope",function ($scope) {
            console,log("头部")
        }]
    }
})