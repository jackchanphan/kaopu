var gulp = require('gulp');
var px2rem = require('gulp-px2rem-plugin');

gulp.task('default', function() {
  console.log('gulp working...');
    gulp.src('../*.css')
        .pipe(px2rem())
       .pipe(gulp.dest('C:\\xampp\\htdocs\\static\\css-rem'));
});