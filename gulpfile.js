var gulp = require('gulp');
gulp.task('first-task', function() {
	console.log("hello hien");
});

// Requires the gulp-sass plugin
var sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('stylesheet/scss/**/*.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('stylesheet/css'))
});

gulp.task('watch', function(){
  gulp.watch('stylesheet/scss/**/*.scss', ['sass']); 
  // Other watchers
})