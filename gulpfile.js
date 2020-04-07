/*!
 * Gulp CommonJS Task Runner File
 * (c) 2020 Joshua Adams
 */

'use strict';

/* ============================== Import Modules ============================ */

const gulp = require('gulp');
const eslint = require('gulp-eslint');

/* ================================= Settings =============================== */

const paths = {
	inputs: {
		js: ["./src/js/**/*.js"]
	}
}

/* ================================== Methods =============================== */

function jsLint (arr) {
  return gulp.src(arr)
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format())
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failAfterError last.
    .pipe(eslint.failAfterError());
}

/* =================================== Tasks ================================ */

gulp.task('jslint', function (done) {
  var arr = paths.inputs.js;
  return jsLint(arr);
});

/* ================================ Export Tasks ============================ */

/*
 * Define default task that can be called by just running `gulp` from cli
 */

 exports.default = function () {
   gulp.watch(paths.inputs.js, gulp.series('jslint'));
 };
