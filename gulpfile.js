/**
 * Created by Wayne on 16/2/22.
 */
var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('web', function () {
  gulp.src(['./study/less/*.less'])
    .pipe(less())
    .pipe(gulp.dest('./study/dist/css'));
});