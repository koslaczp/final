
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Tlumaczenie plików .scss do .css
function style() {
    //1. gdzie znadują się pliki .scss
    return gulp.src('./source/style.scss')

        //2. Tłumaczenie .scss .css
        .pipe(sass())
        //3. Gdzie zapisać plik
        .pipe(gulp.dest('./style'))
        //4. Odświerzanie strony
        .pipe(browserSync.stream());
}

function watch() {
    // 1. Inicjalizacja browser sync
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    // 2. Gdzie nasłuchiwać zmian
    gulp.watch('./source/custom/**/**.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
