const { series } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifyCss = require('gulp-uglifycss');
const concat = require('gulp-concat');

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('error', sass.logError ))
        .pipe(uglifyCss({
            "uglifyComments": true
        }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'));
}

exports.default = series(transformacaoCSS);