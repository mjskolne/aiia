var stopwatchMod = angular.module('stopwatchMod', []);

stopwatchMod.controller('stopwatchCtrl', function($scope, $state, $interval) {    
    $scope.going = false;
    $scope.metric = 0;
    
    
    var metricPromise;
    
    function measure() {
        $scope.metric = Math.floor((Math.random() * 99) + 1);
    }
    metricPromise = $interval(measure, 1000);
    
    
    
    
    var promise;
    var t = -1;    
    
    $scope.changeState = function() {
        $interval.cancel(metricPromise);
        $state.go('main');
    }
    
    $scope.startWatch = function () {
        if(!$scope.going) {
            $scope.going = true;
            promise = $interval(inc, 100);
        }
    }
    
    $scope.stopWatch = function () {
        if ($scope.going) {
            $scope.going = false;
            $interval.cancel(promise);
        
            t = 0;
        }
    }
    
    function twoDigit(n) {
        if(n>9) {
            return n;
        }
        else {
            return '0'+n;
        }
    }
    
    function inc() {
        t++;
        $scope.raw = t;
        
        $scope.minutes = twoDigit(Math.floor(t/10/60));
        $scope.seconds = twoDigit(Math.floor(t/10%60));
        $scope.cs = t - (10*$scope.seconds) - (600*$scope.minutes);
    }
    
    
    
    inc();
});