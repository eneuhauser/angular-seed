'use strict';
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint');

module.exports = function (config) {

    function vendor(input, output) {
        return gulp.src(input).pipe(uglify({preserveComments: 'some'})).pipe(concat(output)).pipe(gulp.dest(config.dist.lib));
    }

    return {
        head: function () {
            return vendor(config.vendor.scripts.head, 'head.js');
        },
        vendor: function () {
            return vendor(config.vendor.scripts.footer, 'vendor.js');
        },
        app: function () {
            var stream = gulp.src(config.source.scripts);
            if (config.isDevelopment) {
                stream = stream.pipe(sourcemaps.init());
            }
            stream = stream.pipe(concat(config.dist.scriptName)).pipe(ngAnnotate()).pipe(uglify());
            if (config.isDevelopment) {
                stream = stream.pipe(sourcemaps.write('./maps'));
            }
            return stream.pipe(gulp.dest(config.dist.scripts));
        },
        lint: function () {
            return gulp.src(config.source.scripts)
                .pipe(jshint('.jshintrc'))
                .pipe(jshint.reporter('default'))
        }
    };
};
