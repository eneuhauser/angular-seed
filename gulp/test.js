'use strict';
var gulp = require('gulp'),
    karma = require('karma').server,
    gulpProtractor = require('gulp-protractor'),
    protractor = gulpProtractor.protractor,
    webdriverUpdate = gulpProtractor.webdriver_update;

module.exports = function (config) {
    return {
        prepare: webdriverUpdate,
        unit: function (done) {
            return karma.start({
                configFile: __dirname + '/..' + config.source.test.unit.conf,
                singleRun: true
            }, done);
        },
        integration: function () {
            return gulp.src(config.source.test.integration.source)
                .pipe(protractor({
                    configFile: config.source.test.integration.conf
                }))
                .on('error', function (e) {
                    throw e;
                });
        }
    };
};
