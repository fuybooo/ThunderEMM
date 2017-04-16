
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
gulp.task('watch', function(){
    browserSync.init({
        server: './'
    });
    
    gulp.watch([
        'js/**/*.js',
        'css/**/*.css',
        'tpls/**/*.html',
        '*.html',
    ]).on('change', browserSync.reload);
});
gulp.task('default', ['watch']);
