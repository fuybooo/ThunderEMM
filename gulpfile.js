
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
        'img/**/*.*',
        'json/**/*.json'
    ]).on('change', browserSync.reload);
});
gulp.task('serve', function(){
//  gulp.src('./')
//      .pipe($.webserver({
//          port: '80',
//          host: '127.0.0.1',
//          liveload: true,
//          directoryListing: {
//              path: './',
//              enable: true
//          }
//      }));
//  require('opn')('http://localhost/index.html');
});
gulp.task('default', ['watch']);
//gulp.task('default', ['watch','serve']);
