var mainMod = angular.module('mainMod', []);

mainMod.controller('mainCtrl', function($scope, $state, $interval) {    
    $scope.changeState = function() {
        $state.go('stopwatch');
    }
    
    
});