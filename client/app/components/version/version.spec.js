/*(function() {
 'use strict';

 describe('app module', function () {
 beforeEach(module('app'));

 describe('version service', function () {
 it('should return current version', inject(function (version) {
 expect(version).toEqual('0.1');
 }));
 });
 });
 })();*/


'use strict';

describe('myApp.version module', function () {
    beforeEach(module('myApp.version'));

    describe('version service', function () {
        it('should return current version', inject(function (version) {
            expect(version).toEqual('0.1');
        }));
    });
});