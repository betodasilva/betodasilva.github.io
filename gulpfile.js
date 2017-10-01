var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass');


// uglify JavaScripts
gulp.task('uglify', function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

gulp.task('minify', function(){
    gulp.src('css/sass/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        })).on('error', sass.logError)
        .pipe(gulp.dest('build/css'));
});

//watch js files
gulp.task('watch', function(){
    gulp.watch('js/*.js', ['uglify']);
    gulp.watch('css/sass/*.scss', ['minify']);
});

gulp.task('default', ['uglify', 'minify', 'watch']);