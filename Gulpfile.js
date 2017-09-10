/*------------------------------------------------------------------
||  Imports
-------------------------------------------------------------------*/
const gulp = require('gulp');
const sass = require('gulp-sass');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const browserSync = require('browser-sync');
const prefix = require('gulp-autoprefixer');
const cp = require('child_process');

/*------------------------------------------------------------------
||  Imports
-------------------------------------------------------------------*/
var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';

/*------------------------------------------------------------------
||  Jekyll
-------------------------------------------------------------------*/
gulp.task('jekyll-build', (done) => {
  return cp.spawn(jekyll, ['build'], { stdio: 'inherit' })
    .on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  browserSync.reload();
});

/*------------------------------------------------------------------
||  Browser Sync
-------------------------------------------------------------------*/
gulp.task('browser-sync', ['sass', 'jekyll-build'], () => {
  browserSync({
    open: false,
    notify: false,
    ghostMode: false,
    server: {
      baseDir: '_site'
    }
  });
});

/*------------------------------------------------------------------
||  SCSS
-------------------------------------------------------------------*/
gulp.task('sass', () => {
  return gulp.src('_scss/main.scss')
    .pipe(plumber())
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 2 versions'], { cascade: true }))
    .pipe(csso())
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('css'));
});

gulp.task('sass:build', () => {
  return gulp.src('_scss/main.scss')
    .pipe(plumber())
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 2 versions'], { cascade: true }))
    .pipe(csso())
    .pipe(gulp.dest('_site/css'));
});

/*------------------------------------------------------------------
||  JavaScript
-------------------------------------------------------------------*/
gulp.task('js', () => {
  return gulp.src('js/main.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename((path) => { path.basename += ".min"; }))
    .pipe(browserSync.reload({ stream: true }))
    .pipe(gulp.dest('js'));
});

gulp.task('js:plugins', function () {
  return gulp.src('js/libs/*.js')
    .pipe(concat("plugins.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js'));
});

gulp.task('js:plugins:build', function () {
  return gulp.src('js/libs/*.js')
    .pipe(concat("plugins.js"))
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('_site/js'));
});

/*------------------------------------------------------------------
||  Imagemin
-------------------------------------------------------------------*/
gulp.task('imagemin', () => {
  return gulp.src('_uploads/**/*')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest('./uploads/'))
});

/*------------------------------------------------------------------
||  Watch
-------------------------------------------------------------------*/
gulp.task('watch', () => {
  gulp.watch('_scss/**/*.scss', ['sass']);
  gulp.watch('_uploads/**/*', ['imagemin']);
  gulp.watch('js/main.js', ['js', 'jekyll-rebuild']);
  gulp.watch(['*.md', '*.html', '_layouts/*.html', '_includes/**/*.html', '_posts/*', 'personaler-report/*', 'uploads/**/*'], ['jekyll-rebuild']);
});

gulp.task('default', ['browser-sync', 'imagemin', 'watch']);
gulp.task('build', ['sass:build', 'js', 'js:plugins:build', 'imagemin', 'jekyll-rebuild']);