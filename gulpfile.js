const gulp = require('gulp');
const concat = require('gulp-concat');

const gulpless = require('gulp-less');
const gulpautoprefixer = require('gulp-autoprefixer');
 
function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
exports.default = defaultTask

function css(){
    const allLessFiles = [
        './src/less/main.less',
        './src/less/media.less'
    ];
    
    let dest = './build/css';

    return gulp
        .src(allLessFiles)
        .pipe(gulpless())
        .pipe(gulpautoprefixer({overrideBrowserslist: ['last 2 versions','>5%']}))
        .pipe(concat('all.css'))
        .pipe(gulp.dest(dest));
}

function js(){
    const mainJs = [
        './src/js/whell.js',
        './src/js/lib.js'
    ];
    
    let dest = './build/js';

    return gulp
        .src(mainJs)
        .pipe(concat('main.js'))
        .pipe(gulp.dest(dest));
}

gulp.task('css', css);
gulp.task('js', js);