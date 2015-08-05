/**
 * Created by Sagar on 25/07/2015.
 */

var app = angular.module('myApp', ['ngSanitize']);

app.controller("deepSpace.ctrl", function (DeepSpaceFactory) {
    var vm = this;
});

app.directive("castTemplate", function ($sce, DeepSpaceFactory) {
    return {
        restrict: 'E',
        scope: {isOriginal: '='},
        templateUrl: 'cast-template.html',
        controller: function ($scope) {
            $scope.list = [];
            if ($scope.isOriginal === true) {
                DeepSpaceFactory.getAll().then(function (response) {
                    $scope.list = response.data.RelatedTopics
                });
            } else {
                $scope.list = DeepSpaceFactory.selectedCastList;
            }
            $scope.add = function (index) {
                DeepSpaceFactory.add(index);
            };
            $scope.remove = function (index) {
                DeepSpaceFactory.remove(index);
            }
        }
    }
});
