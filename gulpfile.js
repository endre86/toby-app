var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatenate = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    livereload = require('gulp-livereload');
    react = require('gulp-react');
 
gulp.task('scss', function () {
    gulp.src('app/styles/main.scss')
      .pipe(sass({
          style: 'compressed',
          errLogToConsole: true
      }))
      // .pipe(minifyCss())
      .pipe(gulp.dest('app/styles/css/'))
      .pipe(livereload());
});
 
gulp.task('reload', function () {
    livereload.reload();
});

gulp.task('react', function() {
    gulp.src('app/react/reactModules.jsx')
        .pipe(react())
        .pipe(gulp.dest('app/react/js/'));
});
 
gulp.task('watch', function () {
    gulp.watch('app/styles/**', ['scss']);
    gulp.watch('app/*.html', ['reload']);
    gulp.watch('app/scripts/**', ['reload']);
    gulp.watch('app/react/**', ['react']);
 
    livereload.listen();
});
 
gulp.task('default', ['watch']);