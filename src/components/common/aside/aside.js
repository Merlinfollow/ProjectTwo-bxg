/**
 * Created by lenovo on 2017/8/29.
 */
angular.module('aside',[])
.directive('nglAside',[function () {
    return{
        scope:{},
        restrict:'E',
        templateUrl:'/src/components/common/aside/aside.html',
        replace:true,
        controller:['$scope',function ($scope) {
            console.log("侧边栏")
        }]
    }
}])