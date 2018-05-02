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
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('stylesheet/scss/**/*.scss', ['sass']); 
  // Other watchers
})

var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'stylesheet'
    },
  })
})



