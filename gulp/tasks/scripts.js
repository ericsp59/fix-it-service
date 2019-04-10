module.exports = function(){

    $.gulp.task('scripts:lib', function (x) {
        return $.gulp.src([
            //'node_modules/jquery/dist/jquery.min.js',
            'src/static/js/jquery.js',
            'node_modules/slick-carousel/slick/slick.min.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js'
        ])
        .pipe($.gp.concat('libs.min.js'))
        .pipe($.gulp.dest('build/static/js/'))
        .pipe($.browserSync.reload({
            stream: true
        }));
        x();
    });


    $.gulp.task('scripts', function(){
        return $.gulp.src('src/static/js/main.js')
        .pipe($.gulp.dest('build/static/js/'))
        .pipe($.browserSync.reload({
            stream: true
        })); 
    });

}
