
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();


gulp.task('serve', function(){
    gulp.src('./')
        .pipe($.webserver({
            port: '80',
            host: '127.0.0.1',
            liveload: true,
            directoryListing: {
                path: './',
                enable: true
            }
        }));
    require('opn')('http://localhost/index.html');
});
gulp.task('default', ['serve']);
