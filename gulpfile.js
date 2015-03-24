'use strict';
var gulp = require('gulp'),
    config = require('./config/config.js'),
    tasks = config.tasks(),
    runSequence = require('run-sequence').use(gulp);

gulp.task('styles', tasks.styles);
gulp.task('assets', tasks.assets);
gulp.task('html', tasks.html);

gulp.task('scripts:head', tasks.scripts.head);
gulp.task('scripts:vendor', tasks.scripts.vendor);
gulp.task('scripts:lint', tasks.scripts.lint);
gulp.task('scripts:app', ['scripts:lint'], tasks.scripts.app);
gulp.task('scripts', ['scripts:app', 'scripts:head', 'scripts:vendor']);

gulp.task('test:prepare', tasks.test.prepare);
gulp.task('test:unit', tasks.test.unit);
gulp.task('test:integration', [ 'serve', 'test:prepare' ], tasks.test.integration);
gulp.task('test', ['test:unit', 'test:integration']);

gulp.task('serve', [ 'build' ], tasks.serve.run);
gulp.task('watch', [ 'serve' ], tasks.serve.watch);
gulp.task('watch:reload', tasks.serve.watchWithReload);

gulp.task('clean', tasks.clean);
gulp.task('build', function(callback) {
    runSequence('clean', ['styles', 'scripts', 'assets', 'html'], callback);
});

gulp.task('default', ['watch']);