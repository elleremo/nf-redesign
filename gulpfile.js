const gulp = require('gulp');


const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
// const imageminJpegRecompress = require('imagemin-jpeg-recompress');
// const imageminPngquant = require('imagemin-pngquant');
// const del = require('del');
const babel = require('gulp-babel');
const browserSync = require("browser-sync");
reload = browserSync.reload;



let pluginSrc = {
    html: ['*.html', "**/*.php"],

    js: [
        'js/*.js',
        '!js/*.min.js',
        '!js/vendor/**/*.js',
        '!js/vendor',
        '!js/vendor/',
    ],
    cssInit: [
        'nf-css/init.less',
        '!styles/vendor',
        '!styles/my',
    ],
    cssWatch: [
        'nf-css/**/*.less',
        '!nf-css/vendor',
        '!nf-css/my/*.less',
        '!nf-css/my/',
        '!nf-css/my',
    ],
    cssGrid: [
        'nf-css/my/grid.less',
        '!nf-css/vendor',
    ],

    cssMaps: [
        'nf-css/maps/*',
    ],
    svg: [
        'images/**/*.svg',
    ],
    images: [
        'images/**/*.png',
        'images/**/*.jpeg',
        'images/**/*.jpg',
    ],
}

let reload_src = [
    '*.html',
    '**/*.php',
    'styles/**/*.css',
    'public/**/*.js'
]
//
// // var d = path.dir
var config = {
    // server: {
    //     baseDir: './',
    // },
    files: reload_src,
    host: "cafe.lc",
    proxy: "cafe.lc",
    port: 8080,
    //
    // reloadDelay: 0,
    // reloadDebounce: 0,
    injectChanges: true,
    // proxy: "cafe.lc"
}
gulp.task('serve', function () {
    browserSync(config);
})


gulp.task('js', function () {
    return gulp.src(pluginSrc.js)
        // .pipe(babel())
        .pipe(plumber())
        .pipe(uglify({
            compress: true
        }))
        .pipe(rename({
            extname: '.js',
            suffix: '.min',
        }))
        .pipe(gulp.dest(function (file) {
            return file.base
        }))
        .pipe(reload({ stream: true }))
        // .pipe(notify({ message: 'Скрипты собрались' }))
})

gulp.task('css', function () {
    return gulp.src(pluginSrc.cssInit)
        .pipe(plumber())
        .pipe(sourcemaps.init({}))
        .pipe(less())
        .pipe(concat('nf-styles.css'))
        // .pipe(gulp.dest('nf-css/'))
        // // .pipe(autoprefixer(['ios_saf >= 6', 'last 3 versions']))
      
        
        // .pipe(concat('nf-styles.min.css'))
        
        // .pipe(csso())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('nf-css/'))
        .pipe(reload({ stream: true }))
        // .pipe(notify({message: 'Стили собрались'}))
})
gulp.task('grid', function () {
    return gulp.src(pluginSrc.cssGrid)
        .pipe(plumber())
        .pipe(sourcemaps.init({}))
        .pipe(less())
        .pipe(concat('grid-test.css'))
        .pipe(gulp.dest('nf-css/my/'))
        // .pipe(autoprefixer(['ios_saf >= 6', 'last 3 versions']))
        // .pipe(sourcemaps.write('./maps/'))
        .pipe(csso())
        .pipe(concat('grid.min.css'))

        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest('nf-css/my/'))
        .pipe(reload({ stream: true }))
    // .pipe(notify({message: 'Стили собрались'}))
})
  
// gulp.task('svg', function () {
//
//     gulp.src(pluginSrc.svg)
//         .pipe(plugins.svgo())
//         .pipe(gulp.dest(function (file) {
//             return file.base
//         }))
//         .pipe(plugins.notify({message: 'SVG оптимизированы'}))
// })
//
// gulp.task('images', function () {
//     return gulp.src(pluginSrc.images)
//         .pipe(plugins.plumber())
//         .pipe(plugins.imagemin([
//             plugins.imagemin.gifsicle({interlaced: true}),
//             imageminJpegRecompress({
//                 progressive: true,
//                 max: 80,
//                 min: 70,
//             }),
//             imageminPngquant({
//                 quality: [0.7, 0.9],
//                 speed: 2,
//                 dithering: 1,
//             }),
//             plugins.imagemin.svgo({plugins: [{removeViewBox: true}]}),
//         ]))
//         .pipe(gulp.dest(function (file) {
//             return file.base
//         }))
//         .pipe(plugins.notify({message: 'Картинка оптимизирована'}))
//
// });

gulp.task('watch', function () {
    gulp.watch(pluginSrc.cssWatch, gulp.series('css'))
    gulp.watch('nf-css/my/*.less', gulp.series('grid'))
    gulp.watch(pluginSrc.js, gulp.series('js'))
});
