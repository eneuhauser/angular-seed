(function () {
    'use strict';

    describe('app.view1 module', function () {

        beforeEach(module('myApp.view1'));

        describe('view1 controller', function () {

            it('should ....', inject(function ($controller) {
                //spec body
                var ctrl = $controller('View1Controller');
                expect(ctrl).toBeDefined();
            }));

        });
    });
})();