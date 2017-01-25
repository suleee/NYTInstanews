var gulp = require('gulp'); // Load Gulp!
// Now that we've installed the uglify package we can require it:
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync').create();
    eslint = require('gulp-eslint'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify');

var plumberErrorHandler = {
    errorHandler: notify.onError({
    title: 'Gulp',
    message: 'Error: <%= error.message %>'
    })
};


gulp.task('scripts', function(){
  gulp.src('./js/*.js') // What files do we want gulp to consume?
//.pipe(plumber(plumberErrorHandler))
   .pipe(uglify()) // Call the uglify function on these files
   .pipe(rename({ extname: '.min.js' })) // Rename the uglified file
   .pipe(gulp.dest('./build/js')) // Where do we put the result?
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(['style.css'], ['build/js/*js']).on('change', browserSync.reload);
});

gulp.task('lint', function() {
    return gulp.src(['./js/*.js'])
        //.pipe(plumber(plumberErrorHandler))
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint'], function () {
});

gulp.task('watch', function() {
   gulp.watch('js/*.js', ['scripts']);
});

gulp.task('default',['watch', 'browser-sync']);
