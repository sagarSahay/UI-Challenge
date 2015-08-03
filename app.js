/**
 * Created by Sagar on 25/07/2015.
 */

var app = angular.module('myApp', ['ngSanitize']);

app.controller("deepSpace.ctrl", function (DeepSpaceFactory) {
    var vm = this;
    vm.castList = [];
    vm.selectedCastList = [];
    DeepSpaceFactory.getAll().then(function (response) {
        vm.castList = response.data.RelatedTopics;
    });
    vm.removeRow = function (index) {
        vm.selectedCastList.push(vm.castList[index]);
        vm.castList.splice(index, 1);
    };
    vm.revertRow = function (index) {
        vm.castList.push(vm.selectedCastList[index]);
        vm.selectedCastList.splice(index, 1);
    };
});

app.directive("castTemplate", function ($sce) {
    return {
        restrict: 'E',
        scope: {castList: '=cast-list'},
        templateUrl: 'cast-template.html',
        controllerAs: 'ctrl',
        controller:function ($scope, $element, $attrs){
            $scope.castList;
        },
        link: function (scope, element, attrs) {
            scope.$watch('castList', function (castList) {
                if (castList) {
                    console.log("coming from directive "+castList.length);
                }
            });
        }
    }
});
