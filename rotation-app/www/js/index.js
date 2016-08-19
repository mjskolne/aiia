var indexApp = angular.module('indexMod', ['ionic', 'mainMod', 'stopwatchMod']);


indexApp.controller('indexCtrl', function() {
    ionic.Platform.ready(function() {
        navigator.splashscreen.hide();
    });
    
});


indexApp.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
        .state('stopwatch', {
            url: '/stopwatch',
            templateUrl: 'templates/stopwatch.html',
            controller: 'stopwatchCtrl'
        })
    
        .state('main', {
            url: '/main',
            templateUrl: 'templates/main.html',
            controller: 'mainCtrl'
        });
    
});


indexApp.run(['$state', function($state) {
    alert("fired: indexApp.run()");

    $state.transitionTo('main');


}]);
