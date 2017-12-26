var gulp = require('gulp');
var sass = require('gulp-sass');

const autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump = require('pump');

var imagemin = require('gulp-imagemin');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');


gulp.task('sass', function(){
  gulp.src('sass/**/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('../build'))  
});

gulp.task('sass:watch', function(){
  gulp.watch('sass/**/*.sass', ['sass']);
});

gulp.task('autoprefixer', () =>
gulp.src('build/styles.css')
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist'))
);

gulp.task('minify-css', () => {
  return gulp.src('../build/styles.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(rename({ suffix: '.min' })) 
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('../build'))
});

gulp.task('js-compress', function (cb) {
  pump([
        gulp.src('scripts/*.js'),
        rename({ suffix: '.min' }),
        uglify(),
        gulp.dest('../build/scripts')
    ],
    cb
  );
});

gulp.task('imagemin', function() {
    gulp.src('../S/h3ys1n.github.io/MLP/src/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('by_imagemin-def-set1'))
});

gulp.task('images', function() {
  return gulp.src('sass/blocks/**/*')
    .pipe(cache(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.jpegtran({progressive: true}),
      imageminJpegRecompress({
        loops: 6,
        min: 75,
        max: 95,
        quality:'high'
      }),
      imagemin.svgo(),
      imagemin.optipng({optimizationLevel: 3}),
      pngquant({quality: '75-85', speed: 5})
    ],{
      verbose: true
    })))
    .pipe(gulp.dest('sass/blocks'));
});

gulp.task('clear', function (done) {
  return cache.clearAll(done);
});

