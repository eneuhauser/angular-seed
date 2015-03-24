'use strict';
var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso');

module.exports = function (config) {
    return function () {
        var stream = gulp.src(config.source.style);
        if (config.isDevelopment) {
            stream = stream.pipe(sourcemaps.init());
        }
        stream = stream.pipe(sass());
        if (config.isDevelopment) {
            stream = stream.pipe(sourcemaps.write('./maps'));
        }
        else {
            stream = stream.pipe(csso());
        }
        return stream.pipe(gulp.dest(config.dist.styles));
    };
};
