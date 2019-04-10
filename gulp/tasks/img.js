module.exports = function(){

    $.gulp.task('img:dev', function (x) {
        $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('XTCGjgQ85YMN9RtF9vwdPphXqRl1jKl3'))
            .pipe($.gulp.dest('build/static/img'));
            x();
    });


    $.gulp.task('img:build', function (x) {
        $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
            .pipe($.gp.tinypng('XTCGjgQ85YMN9RtF9vwdPphXqRl1jKl3'))
            .pipe($.gulp.dest('build/static/img'))
            x();
    });

}