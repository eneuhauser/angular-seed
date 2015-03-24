(function () {
    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('myApp', [
            'ngRoute',
            'myApp.version',
            'myApp.view1',
            'myApp.view2'
        ])
        .config(IndexRoute);

    function IndexRoute($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }
})();