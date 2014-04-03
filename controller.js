(function() {

    'use strict';

    var sampleController = function($scope) {
        $scope.data = {
            userName: 'LOLCATZ',
            userPass: '0123456789',
            longUserName: ' ',
            shortUserName: ' ',
            longUserPass: ' ',
            shortUserPass: ' '
        };

        $scope.$watch('data.userName', function(newValue) {
            $scope.data.longUserName = newValue.length > 20;
            $scope.data.shortUserName = newValue.length < 10;
            console.log('FIX IT');
        });

        $scope.$watch('data.userPass', function(newValue) {
            $scope.data.longUserPass = newValue.length > 15;
            $scope.data.shortUserPass = newValue.length < 11;
            console.log('WE HAD THIS DISCUSSION');
        });
    };

    sampleController.$inject = ['$scope'];

    angular.module('sampleApp.controllers', [])
        .controller('sampleController', sampleController);


}());