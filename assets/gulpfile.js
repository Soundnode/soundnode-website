var gulp = require('gulp')

var babel = require('gulp-babel'),
    concat = require('gulp-concat'),
    csso = require('gulp-csso'),
    cssnext = require('postcss-cssnext'),
    imagemin = require('gulp-imagemin'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    stylus = require('gulp-stylus'),
    uglify = require('gulp-uglify')

gulp.task('styl', function() {
  gulp.src('styl/main.styl')
  .pipe(stylus())
  .pipe(postcss([cssnext({browsers: ['> 5%']})]))
  .pipe(csso())
  .pipe(rename('main.css'))
  .pipe(gulp.dest('../static/assets/css'))
})

gulp.task('js', function() {
  gulp.src('js/*.js')
  .pipe(concat('main.js'))
  .pipe(babel())
  .pipe(uglify())
  .pipe(gulp.dest('../static/assets/js'))
})

gulp.task('img', function() {
  gulp.src('img/*')
  .pipe(imagemin())
  .pipe(gulp.dest('../static/assets/img'))
})

gulp.task('icons', function() {
  gulp.src('icons/*')
  .pipe(imagemin())
  .pipe(gulp.dest('../static/assets/icons'))
})

gulp.task('default', ['styl', 'js', 'img', 'icons'])

gulp.task('watch', function() {
  gulp.watch('styl/**/*.styl', ['styl'])
  gulp.watch('js/**/*.js', ['js'])
  gulp.watch('img/**/*', ['img'])
  gulp.watch('icons/**/*', ['icons'])
})
