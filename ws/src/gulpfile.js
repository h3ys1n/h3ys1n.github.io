var gulp = require('gulp');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
var htmlmin = require('gulp-htmlmin');
let cleanCSS = require('gulp-clean-css');


gulp.task('sass', function(){
    gulp.src('./sass/**/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./../build'));  
});

gulp.task('sass:watch', function(){
    gulp.watch('./sass/**/*.sass', ['sass']);
});

 
gulp.task('autoprefixer', () =>
    gulp.src('../build/styles.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('../build/'))
);

gulp.task('compress', function() {
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('comprssedimgs'))
});

gulp.task('minify', function() {
    return gulp.src('../build/*.html')
      .pipe(htmlmin({collapseWhitespace: true}))
      .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
    return gulp.src('../build/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('dist'));
});