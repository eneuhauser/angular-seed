(function () {
    'use strict';

    angular
        .module('myApp.view2', ['ngRoute'])
        .config(['$routeProvider', View2Route])
        .controller('View2Controller', View2Controller);

    function View2Route($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Controller'
        });
    }

    function View2Controller() {}
})();