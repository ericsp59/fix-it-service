module.exports = function(){

    $.gulp.task('stylus', function(){
        return $.gulp.src('src/static/stylus/main.styl')
            .pipe($.gp.sourcemaps.init())
            .pipe($.gp.stylus({
                'include css': true
            }))
            .pipe($.gp.autoprefixer({
                browsers: ['last 3 versions'],
                cascade: false
            }))
            .on("error", $.gp.notify.onError({
                title: "style"
              }))
            .pipe($.gp.csso({
                debug: true
            }))
            .pipe($.gp.sourcemaps.write())
            .pipe($.gulp.dest('build/static/css'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

}
