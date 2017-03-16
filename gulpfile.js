var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var prefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');

var paths = {
	sass: 'scss/',
	css: 'css/'
}

// SASS
gulp.task('sass', function(){
	return gulp.src(paths.sass + 'style.scss')
	.pipe(plumber({
		errorHandler: function(err) {
			console.log(err);
			this.emit('end');
		}
	}))
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(prefixer({
		browsers: ['last 1 version', 'IE 9', 'IE 10', '> 2%']
	}))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(paths.css));
});



// Gulp watch
gulp.task('watch', function(){
	gulp.watch(paths.sass + '**/*.scss', ['sass']);
});
