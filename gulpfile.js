const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

// Sass Task Runner
gulp.task('sass', function() {

	// Return the task
	return gulp.src('./scss/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed', includePaths: ['./scss'] }).on('error', sass.logError))
		.pipe( prefix({
			overrideBrowserslist: ['last 2 versions']
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./css'));
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('./scss/*.scss', gulp.series('sass'));
    cb();
  })
);