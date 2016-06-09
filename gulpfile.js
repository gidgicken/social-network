var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function(){ //type gulp es6 into terminal to create new dist folder
  return gulp.src(['js/*.js', 'js/services/*.js', 'js/controllers/*.js', 'js/directives/*.js'])
  .pipe(concat('all.js'))
  .pipe(gulp.dest('dist'));
})

gulp.task('styles', function(){
  return gulp.src(['styles/views/*.css', 'styles/base/*.css'])
  .pipe(concat('all.css'))
  .pipe(gulp.dest('dist'));
})

gulp.watch(['styles/views/*.css', 'styles/base/*.css'], ['styles']);
gulp.watch(['js/*.js', 'js/services/*.js', 'js/controllers/*.js', 'js/directives/*.js'], ['js']);

gulp.task('default', ['js', 'styles'])
