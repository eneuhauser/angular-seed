(function () {
    'use strict';

    angular
        .module('myApp.version.version-directive', [])
        .directive('appVersion', VersionDirective);

    function VersionDirective(version) {
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, elm, attrs) {
            elm.text(version);
        }
    }
})();