'use strict';
var gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp),
    server = require('gulp-server-livereload');

module.exports = function (config) {
    var enableLiveReload = config.livereload || false;

    return {
        run: function (callback) {
            gulp.src(config.dist.path).pipe(server({
                port: config.server.port,
                livereload: enableLiveReload,
                defaultFile: config.server.index
            }));
            callback();
        },
        watch: function () {
            gulp.watch(config.source.styles, ['styles']);
            gulp.watch(config.source.scripts, ['scripts:app']);
            gulp.watch(config.source.assets, ['assets']);
            gulp.watch(config.source.html, ['html']);
        },
        watchWithReload: function () {
            enableLiveReload = true;
            runSequence('watch');
        }
    };
};
