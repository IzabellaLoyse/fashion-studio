const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
exports.default = () => (
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
);