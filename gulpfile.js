var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('server', function(done) {
  connect.server({
    port:5001,
    livereload:true
  });
});

gulp.task('default',['server']);