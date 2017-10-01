var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');


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

gulp.task('sass-watch', ['minify'], browserSync.reload);

//watch js files
gulp.task('watch', function(){
    browserSync({
        server: {}
    })
    gulp.watch('js/*.js', ['uglify']);
    gulp.watch('css/sass/*.scss', ['sass-watch']);
});

gulp.task('default', ['uglify', 'minify', 'watch']);