(function () {
    'use strict';

    angular
        .module('myApp.view1', ['ngRoute'])
        .config(['$routeProvider', View1Route])
        .controller('View1Controller', View1Controller);

    function View1Route($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Controller'
        });
    }

    function View1Controller() {

    }
})();