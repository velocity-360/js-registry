var gulp = require('gulp')
var less = require('gulp-less')
var gp_concat = require('gulp-concat')
var gp_rename = require('gulp-rename')
var gp_uglify = require('gulp-uglify')
var minifyCSS = require('gulp-minify-css')
var autoprefixer = require('gulp-autoprefixer')
var to5 = require('gulp-6to5')
var path = require('path')


gulp.task('build', function(){
    return gulp.src(
            [
                './public/js/entry.js',
                './public/dist/bundle.js',
            ]
        )
        .pipe(gp_concat('gulp-concat.js'))
        .pipe(gulp.dest('./js/min/'))
        .pipe(gp_rename('bundle.min.js'))
        .pipe(gp_uglify())
        .pipe(gulp.dest('./public/dist'));
})

// gulp.task('watch', function() {
//     gulp.watch(['./public/less/**.less', './src/serverapp.js', './src/*/**.js', './src/*/*/**.js', './src/*/*/*/**.js'], ['less', 'es6-es5'])
// })


// gulp.task('prod', ['compile-desktop', 'compile-mobile', 'es6-es5'], function(){});
// gulp.task('default', ['compile-desktop', 'compile-mobile', 'es6-es5', 'watch'], function(){})

gulp.task('prod', ['build'], function(){});
gulp.task('default', ['build', 'watch'], function(){})


