import gulp from 'gulp';

gulp.task('build-html', () => {
    gulp.src('templates/**/*.html')
        .pipe(gulp.dest('dist'))
    ;
});
