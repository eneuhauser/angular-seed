'use strict';
var gulp = require('gulp');

module.exports = function (config) {
    return function () {
        return gulp.src(config.source.assets).pipe(gulp.dest(config.dist.assets));
    };
};
