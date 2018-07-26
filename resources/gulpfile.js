let gulp 			= require('gulp');
let concat 			= require('gulp-concat');
let cssmin 			= require('gulp-minify-css');
let rename          = require('gulp-rename');
let less 			= require('gulp-less');
let copy            = require('gulp-contrib-copy');
let autoprefixer    = require('gulp-autoprefixer');
let helpers         = require('./gulp.helpers');
let minify          = require('gulp-babel-minify');
let imagemin        = require('gulp-imagemin');
let livereload = require('gulp-livereload');

require("any-promise/register")("bluebird");

let origSrc = gulp.src;
let PUBLIC_DIR = './../public';
let path = {
	scripts     : ['js/**/*.js' ],
	less        : ['styles/style.less' ],
	fonts       : ['fonts/**/*.*'],
  img         : ['img/**/*.*']
};

gulp.src = function () {
	return helpers.fixPipe(origSrc.apply(this, arguments));
};


gulp.task('fonts', function() {
    return gulp.src(path.fonts)
        .pipe(copy())
        .pipe(gulp.dest(PUBLIC_DIR+'/fonts'));
});

gulp.task('img', function() {
	return gulp.src(path.img)
		.pipe(imagemin())
		.pipe(gulp.dest(PUBLIC_DIR+'/img'));
});

gulp.task('script', function() {
    return helpers.es6toes5('js/index.js', 'index.js')
      .pipe(livereload());
});

gulp.task('script-concat', ['script'], function() {
  return gulp.src([/*'vendors/3d_particle_plugin/js/vendor/three.min.js', */PUBLIC_DIR+'/js/index.js'])
    .pipe(concat( 'index.js'))
    .pipe(gulp.dest(PUBLIC_DIR+'/js'))
});

gulp.task('script-min', ['script-concat'], () => {
    return gulp.src([PUBLIC_DIR+'/js/index.js'])
        .pipe(minify({
            mangle        : false,
            drop_debugger : true,
            drop_console  : true,
            evaluate      : true,
            unsafe        : false
        }))
        .pipe(gulp.dest(PUBLIC_DIR+'/js'))
});

gulp.task('less', function () {
	return gulp.src(path.less)
		.pipe(concat('app.css'))
		.pipe(less())
		.pipe(autoprefixer([
			'Firefox > 20',
			'Safari > 8',
			'iOS > 7',
			'ie > 8'
		]))
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest(PUBLIC_DIR+'/css'))
    .pipe(livereload());
});
gulp.task('html', function () {
  return gulp.src('./../index.html')
    .pipe(livereload());
});
gulp.task('watch', function() {
  livereload.listen();
	gulp.watch('js/**/*.js', ['script']);
	gulp.watch('styles/**/*.less', ['less']);
	gulp.watch('./../index.html', ['html']);
});

gulp.task('default', ['script-concat', 'less', 'fonts', 'img', 'watch']);
gulp.task('prod', ['script-min', 'less', 'fonts', 'img']);
