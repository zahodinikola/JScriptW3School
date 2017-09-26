var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
	
	gulp.watch("./*.html").on('change', browserSync.reload);
	
});