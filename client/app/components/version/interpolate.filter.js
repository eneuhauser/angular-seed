(function () {
    'use strict';

    angular
        .module('myApp.version.interpolate-filter', [])
        .filter('interpolate', interpolate);

    function interpolate(version) {
        return function (text) {
            return String(text).replace(/\%VERSION\%/mg, version);
        };
    }
})();
