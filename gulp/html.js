'use strict';
var gulp = require('gulp'),
    minifyHTML = require('gulp-minify-html');

module.exports = function (config) {
    return function () {
        return gulp.src(config.source.html).pipe(minifyHTML({conditionals: true})).pipe(gulp.dest(config.dist.html));
    };
};
