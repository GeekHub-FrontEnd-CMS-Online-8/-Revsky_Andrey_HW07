var gulp        = require('gulp');
var sass        = require('gulp-sass');
var input_scss  = './app/sass/**/*.scss';
var output_css  = 'dist/css';
var input_img 	='./app/img/**/*';
var output_img  ='dist/img';
var input_html  ='./app/**/*.html';
var output_html ='dist'
var input_js  ='./app/**/*.js';
var output_js ='dist/'

gulp.task('sass', function () {
	return gulp.src(input_scss)
		.pipe(sass())
		.pipe(gulp.dest(output_css))
});

gulp.task('img', function () {
	return gulp.src(input_img)
		.pipe(gulp.dest(output_img))
});


gulp.task('js', function () {
    return gulp.src(input_js)
        .pipe(gulp.dest(output_js))
});

gulp.task("html", function () {
	return gulp.src(input_html)
		.pipe(gulp.dest(output_html))
});

gulp.task("watch", [ 'sass', "html", 'img','js'], function () {
    gulp.watch(input_scss , ["sass"]);
    gulp.watch(input_html, ['html']);
	gulp.watch(input_img, ["img"]);
    gulp.watch(input_js, ["js"]);
});
